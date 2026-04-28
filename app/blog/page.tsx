import Link from "next/link"
import Image from "next/image"
import { createServerClient } from "@/lib/supabase/server"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export default async function BlogPage() {
  const supabase = await createServerClient()

  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching blog posts:", error)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header with Logo and Back Button */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                Q
              </div>
              <span className="font-bold text-gray-900 hidden sm:inline">QoraxAI</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Minimal Hero Section */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">QoraxAI Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Latest insights on business growth, technology, and digital transformation
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
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
      </div>
    </div>
  )
}
