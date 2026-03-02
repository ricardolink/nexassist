import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  name: string;
  role: "client" | "partner" | "admin";
  created_at: string;
};

export type Request = {
  id: string;
  client_id: string;
  service_type: string;
  date: string;
  budget: string;
  description: string;
  status: "pending" | "matched" | "confirmed" | "completed";
  created_at: string;
};

export type Partner = {
  id: string;
  user_id: string;
  business_name: string;
  services: string[];
  areas: string[];
  verified: boolean;
  created_at: string;
};

export type Waitlist = {
  id: string;
  email: string;
  created_at: string;
};
