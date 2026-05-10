import Link from "next/link"
import Image from "next/image"
import { createServerClient } from "@/lib/supabase/server"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPageHeader } from "@/components/blog-page-header"

export const metadata = {
  title: "Blog - Latest Insights on Business Technology | QoraxAI",
  description:
    "Read expert articles on business growth, technology solutions, digital transformation, and IT strategies for Bangladesh businesses.",
  openGraph: {
    title: "Blog - Latest Insights on Business Technology | QoraxAI",
    description:
      "Read expert articles on business growth, technology solutions, digital transformation, and IT strategies for Bangladesh businesses.",
    type: "website",
    url: "https://qoraxai.com/blog",
  },
  alternates: {
    canonical: "https://qoraxai.com/blog",
  },
}

const POSTS_PER_PAGE = 9

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams
  const currentPage = Math.max(1, parseInt(params.page || "1"))
  const skip = (currentPage - 1) * POSTS_PER_PAGE

  const supabase = await createServerClient()

  // Fetch featured posts (latest 3)
  const { data: featuredPosts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(3)

  // Fetch posts by category for "Featured Articles" section
  const { data: technologyPosts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .eq("category", "technology")
    .order("created_at", { ascending: false })
    .limit(4)

  // Get total count of published posts
  const { count: totalCount } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact", head: true })
    .eq("published", true)

  // Get paginated posts
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .range(skip, skip + POSTS_PER_PAGE - 1)

  if (error) {
    console.error("Error fetching blog posts:", error)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Page Header */}
      <BlogPageHeader />

      {/* Latest Posts Section */}
      {featuredPosts && featuredPosts.length > 0 && (
        <section className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post: any) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                  <article className="flex flex-col h-full">
                    {post.featured_image && (
                      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-xs text-blue-600 font-semibold">{post.category}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(post.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Articles Section */}
      {technologyPosts && technologyPosts.length > 0 && (
        <section className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologyPosts.map((post: any) => {
                const excerptLength = 60
                const truncatedExcerpt =
                  (post.excerpt || "").substring(0, excerptLength) +
                  ((post.excerpt || "").length > excerptLength ? "..." : "")

                return (
                  <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                    <article className="flex flex-col h-full">
                      {post.featured_image && (
                        <div className="relative h-32 w-full rounded-lg overflow-hidden mb-3">
                          <Image
                            src={post.featured_image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex-grow line-clamp-2 mb-3">{truncatedExcerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {new Date(post.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Recent Insights Section (All Posts with Pagination) */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Insights</h2>

          {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-16">
        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">Error loading posts: {error.message}</p>
          </div>
        )}
        {!posts || posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.featured_image && (
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.featured_image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {posts && posts.length > 0 && totalCount && totalCount > POSTS_PER_PAGE && (
          <div className="flex justify-center items-center gap-2 mt-16">
            {Array.from({ length: Math.ceil(totalCount / POSTS_PER_PAGE) }, (_, i) => i + 1).map((pageNum) => (
              <Link key={pageNum} href={`/blog?page=${pageNum}`}>
                <Button
                  variant={pageNum === currentPage ? "default" : "outline"}
                  className={`min-w-10 h-10 ${
                    pageNum === currentPage ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </Button>
              </Link>
            ))}
          </div>
        )}

          {/* Pagination */}
          {posts && posts.length > 0 && totalCount && totalCount > POSTS_PER_PAGE && (
            <div className="flex justify-center items-center gap-2 mt-16">
              {Array.from({ length: Math.ceil(totalCount / POSTS_PER_PAGE) }, (_, i) => i + 1).map((pageNum) => (
                <Link key={pageNum} href={`/blog?page=${pageNum}`}>
                  <Button
                    variant={pageNum === currentPage ? "default" : "outline"}
                    className={`min-w-10 h-10 ${
                      pageNum === currentPage ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
