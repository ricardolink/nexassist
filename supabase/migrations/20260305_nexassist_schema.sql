-- Profiles: extend
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'client' CHECK (role IN ('client','partner','admin'));
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS company_name TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS partner_status TEXT DEFAULT 'pending' CHECK (partner_status IN ('pending','approved','suspended'));

-- Requests: extend
ALTER TABLE requests ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS service_type TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS city TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS date_needed TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS budget TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS photo_url TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS country_dial TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS country_flag TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS client_name TEXT;
ALTER TABLE requests ADD COLUMN IF NOT EXISTS client_email TEXT;

-- Partner offers
CREATE TABLE IF NOT EXISTS partner_offers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID REFERENCES requests(id) ON DELETE CASCADE,
  partner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  partner_email TEXT,
  partner_company TEXT,
  has_item BOOLEAN DEFAULT true,
  photo_url TEXT,
  price TEXT,
  message TEXT,
  extras TEXT[],
  status TEXT DEFAULT 'sent' CHECK (status IN ('sent','viewed','accepted','declined')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles_own" ON profiles;
CREATE POLICY "profiles_own" ON profiles FOR ALL USING (auth.uid() = id);

DROP POLICY IF EXISTS "requests_owner" ON requests;
CREATE POLICY "requests_owner" ON requests FOR ALL USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('partner','admin'))
);

DROP POLICY IF EXISTS "requests_insert_open" ON requests;
CREATE POLICY "requests_insert_open" ON requests FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "offers_all" ON partner_offers;
CREATE POLICY "offers_all" ON partner_offers FOR ALL USING (
  auth.uid() = partner_id OR
  EXISTS (SELECT 1 FROM requests r WHERE r.id = request_id AND r.user_id = auth.uid()) OR
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

DROP POLICY IF EXISTS "offers_insert" ON partner_offers;
CREATE POLICY "offers_insert" ON partner_offers FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'partner')
);

-- Auto-create profile
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, name, role)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email,'@',1)), 'client')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
