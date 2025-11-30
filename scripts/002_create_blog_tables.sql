-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  category TEXT DEFAULT 'technology',
  author_name TEXT DEFAULT 'QoraxAI Team',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blog_images table for multiple images per post
CREATE TABLE IF NOT EXISTS blog_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_images_post_id ON blog_images(post_id);

-- Insert sample blog post
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, category, published)
VALUES (
  '5 Ways Technology Can Boost Your Business Revenue in 2025',
  '5-ways-technology-boost-business-revenue-2025',
  'Discover how modern technology solutions can dramatically increase your business revenue and operational efficiency.',
  '<h2>Introduction</h2><p>In today''s competitive business landscape, technology is no longer optional—it''s essential for growth. At <a href="/">QoraxAI</a>, we''ve helped dozens of businesses in Bangladesh increase their revenue by 40% or more through strategic technology implementation.</p><h2>1. Automate Repetitive Tasks</h2><p>Automation saves time and reduces human error. By implementing automated workflows for tasks like invoice generation, email marketing, and customer support, businesses can save up to 30 hours per week. Learn more about our <a href="/services/cost-reduction">Cost Reduction Services</a>.</p><h2>2. Optimize Your Website Performance</h2><p>A slow website costs you customers. Studies show that a 1-second delay in page load time can reduce conversions by 7%. Our <a href="/services/website-performance">Website Performance Check</a> service can help you identify and fix performance issues.</p><h2>3. Implement Data-Driven Decision Making</h2><p>Use analytics and business intelligence tools to make informed decisions. Companies that use data-driven strategies are 5-6 times more likely to make faster decisions than competitors.</p><h2>4. Enhance Cybersecurity</h2><p>Protect your business from costly data breaches. The average cost of a data breach in 2024 was $4.45 million. Our <a href="/services/cybersecurity">Cybersecurity Assessment</a> helps you stay protected.</p><h2>5. Leverage Cloud and Managed IT</h2><p>Move to the cloud for scalability and cost savings. Cloud adoption can reduce IT costs by 30-40% while improving accessibility. Explore our <a href="/services/managed-it">Managed IT Services</a>.</p><h2>Conclusion</h2><p>Technology investment isn''t an expense—it''s a strategic decision that drives revenue growth. Contact <a href="/#contact">QoraxAI</a> today for a free consultation and discover how we can help your business grow.</p>',
  '/blog/technology-revenue-growth.jpg',
  'technology',
  true
) ON CONFLICT (slug) DO NOTHING;
