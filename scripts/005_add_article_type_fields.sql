-- Add is_featured and is_insights boolean fields to blog_posts table
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS is_featured boolean DEFAULT false;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS is_insights boolean DEFAULT false;

-- Add comment explaining the fields
COMMENT ON COLUMN blog_posts.is_featured IS 'Mark article as Featured Article - appears in Featured Articles section on blog home';
COMMENT ON COLUMN blog_posts.is_insights IS 'Mark article as Recent Insights - appears in Recent Insights section on blog home';
