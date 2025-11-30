import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { createServerClient } from "@/lib/supabase/server"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// Blog posts will be rendered dynamically on-demand instead

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  try {
    const supabase = await createServerClient()
    const { data: post } = await supabase
      .from("blog_posts")
      .select("title, excerpt")
      .eq("slug", slug)
      .eq("published", true)
      .single()

    if (!post) return { title: "Blog Post Not Found | QoraxAI" }

    return {
      title: `${post.title} | QoraxAI Blog`,
      description: post.excerpt || "Read the latest insights from QoraxAI",
    }
  } catch (error) {
    return { title: "Blog Post | QoraxAI" }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  console.log("[v0] Requested slug:", slug)

  const supabase = await createServerClient()

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  console.log("[v0] Post found:", !!post, "| Error:", error?.message || "none")
  if (!post) {
    console.log("[v0] No post found for slug:", slug)
  }

  if (!post || error) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author_name}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            {post.excerpt && <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>}
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.featured_image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="mb-6 text-blue-50">
            Get a free consultation and discover how QoraxAI can help you achieve your business goals.
          </p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
