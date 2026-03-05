-- Partner Applications table
CREATE TABLE IF NOT EXISTS partner_applications (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  company     TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  website     TEXT,
  services    TEXT[] DEFAULT '{}',
  description TEXT,
  city        TEXT,
  status      TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  admin_notes TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);

ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an application
DROP POLICY IF EXISTS "apply_insert" ON partner_applications;
CREATE POLICY "apply_insert" ON partner_applications FOR INSERT WITH CHECK (true);

-- Public readable so login page can check approval status by email
DROP POLICY IF EXISTS "apply_select" ON partner_applications;
CREATE POLICY "apply_select" ON partner_applications FOR SELECT USING (true);

-- Admins can update status; partners can read their own row (MVP: open update)
DROP POLICY IF EXISTS "apply_update" ON partner_applications;
CREATE POLICY "apply_update" ON partner_applications FOR UPDATE USING (true);
