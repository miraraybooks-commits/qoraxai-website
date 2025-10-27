-- Add new columns to contacts table for the updated form
ALTER TABLE public.contacts
ADD COLUMN IF NOT EXISTS mobile TEXT,
ADD COLUMN IF NOT EXISTS country_code TEXT,
ADD COLUMN IF NOT EXISTS service TEXT,
ADD COLUMN IF NOT EXISTS description TEXT;

-- Update existing message column to be nullable since we're using description now
ALTER TABLE public.contacts
ALTER COLUMN message DROP NOT NULL;
