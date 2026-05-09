import type { MetadataRoute } from "next"
import { createServerClient } from "@/lib/supabase/server"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://qoraxai.com"

  const supabase = await createServerClient()

  // Fetch all published blog posts dynamically
  const { data: blogPosts } = await supabase
    .from("blog_posts")
    .select("slug, updated_at, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false })

  // Fetch all published services dynamically
  const { data: services } = await supabase
    .from("services")
    .select("slug, updated_at, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false })

  // Map blog posts to sitemap entries
  const blogPostEntries: MetadataRoute.Sitemap = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || post.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Map services to sitemap entries
  const serviceEntries: MetadataRoute.Sitemap = (services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updated_at || service.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    // Static pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
RM
    // Dynamic entries
    ...blogPostEntries,
    ...serviceEntries,
  ]
}
