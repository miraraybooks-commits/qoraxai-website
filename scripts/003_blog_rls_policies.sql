-- Enable RLS on blog tables
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_images ENABLE ROW LEVEL SECURITY;

-- Allow public to read published blog posts
CREATE POLICY "Public can read published posts"
ON blog_posts FOR SELECT
USING (published = true);

-- Allow anyone to insert/update/delete blog posts (temporary - you can add auth later)
CREATE POLICY "Anyone can manage blog posts"
ON blog_posts FOR ALL
USING (true)
WITH CHECK (true);

-- Allow public to read blog images
CREATE POLICY "Public can read blog images"
ON blog_images FOR SELECT
USING (true);

-- Allow anyone to manage blog images
CREATE POLICY "Anyone can manage blog images"
ON blog_images FOR ALL
USING (true)
WITH CHECK (true);
