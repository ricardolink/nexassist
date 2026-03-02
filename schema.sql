-- NexAssist Database Schema
-- Run this in your Supabase SQL Editor

-- Profiles
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  name text,
  role text check (role in ('client', 'partner', 'admin')) default 'client',
  created_at timestamptz default now()
);

-- Requests
create table requests (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references profiles(id) on delete cascade,
  service_type text not null,
  date text,
  budget text,
  description text,
  status text check (status in ('pending', 'matched', 'confirmed', 'completed')) default 'pending',
  created_at timestamptz default now()
);

-- Partners
create table partners (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  business_name text not null,
  services text[],
  areas text[],
  bio text,
  verified boolean default false,
  created_at timestamptz default now()
);

-- Waitlist
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamptz default now()
);

-- Recommendations
create table recommendations (
  id uuid default gen_random_uuid() primary key,
  category text not null,
  title text not null,
  description text,
  image_url text,
  created_at timestamptz default now()
);

-- Row Level Security
alter table profiles enable row level security;
alter table requests enable row level security;
alter table partners enable row level security;
alter table waitlist enable row level security;

create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can view own requests" on requests for select using (auth.uid() = client_id);
create policy "Users can insert own requests" on requests for insert with check (auth.uid() = client_id);
create policy "Anyone can join waitlist" on waitlist for insert with check (true);
