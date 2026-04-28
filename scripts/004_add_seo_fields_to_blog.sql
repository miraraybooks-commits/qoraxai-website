-- Add SEO fields to blog_posts table for dynamic metadata generation
-- This migration adds keywords field for better keyword targeting in SEO

-- Add keywords column (optional, for storing target keywords)
ALTER TABLE blog_posts
ADD COLUMN IF NOT EXISTS keywords TEXT;

-- Add or update indexes for better SEO performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_created ON blog_posts(published, created_at DESC);
