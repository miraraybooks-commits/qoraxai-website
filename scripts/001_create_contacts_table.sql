-- Create contacts table for form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS for security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public contact form)
CREATE POLICY "Allow public to insert contacts"
  ON public.contacts FOR INSERT
  WITH CHECK (true);

-- Allow only authenticated users to view their own submissions (optional)
CREATE POLICY "Allow users to view all contacts"
  ON public.contacts FOR SELECT
  USING (true);
