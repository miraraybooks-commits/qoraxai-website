-- Enable RLS on admin_users table if not already enabled
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Admins can read own profile" ON admin_users;
DROP POLICY IF EXISTS "Admins can update own profile" ON admin_users;

-- Create policies for admin_users
CREATE POLICY "Admins can read own profile" ON admin_users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Admins can update own profile" ON admin_users
  FOR UPDATE USING (auth.uid()::text = id::text);

-- Update blog_posts policies to require authentication
DROP POLICY IF EXISTS "Anyone can manage blog posts" ON blog_posts;

-- Only authenticated users can manage blog posts
CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts
  FOR ALL USING (auth.uid() IS NOT NULL);

-- Update blog_images policies
DROP POLICY IF EXISTS "Anyone can manage blog images" ON blog_images;

-- Only authenticated users can manage blog images  
CREATE POLICY "Authenticated users can manage blog images" ON blog_images
  FOR ALL USING (auth.uid() IS NOT NULL);
