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
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()

    if (!post) return { title: "Blog Post Not Found | QoraxAI" }

    const postUrl = `https://qoraxai.com/blog/${post.slug}`
    const ogImage = post.featured_image || "https://qoraxai.com/og-image.jpg"

    return {
      title: `${post.title} | QoraxAI Blog`,
      description: post.excerpt || "Read the latest insights from QoraxAI",
      keywords: post.keywords || `${post.title}, QoraxAI Blog`,
      authors: [{ name: post.author_name || "QoraxAI" }],
      creator: post.author_name || "QoraxAI",
      robots: {
        index: true,
        follow: true,
      },

      // Canonical URL — essential for SEO to avoid duplicate content penalties
      alternates: {
        canonical: postUrl,
      },

      // Open Graph — critical for social media sharing (Facebook, LinkedIn, WhatsApp)
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt || "Read the latest insights from QoraxAI",
        url: postUrl,
        siteName: "QoraxAI",
        publishedTime: new Date(post.created_at).toISOString(),
        authors: [post.author_name || "QoraxAI"],
        tags: [post.category, ...(post.keywords?.split(",").map((k: string) => k.trim()) || [])],
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.title,
            type: "image/jpeg",
          },
        ],
      },

      // Twitter / X Card — for better Twitter preview
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt || "Read the latest insights from QoraxAI",
        images: [ogImage],
        creator: "@qoraxai",
      },
    }
  } catch (error) {
    return { title: "Blog Post | QoraxAI" }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const supabase = await createServerClient()

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  if (!post || error) {
    notFound()
  }

  // JSON-LD BlogPosting Schema — improves visibility in Google Search results and AI search
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.title,
    image: [post.featured_image || "https://qoraxai.com/og-image.jpg"],
    datePublished: new Date(post.created_at).toISOString(),
    dateModified: post.updated_at ? new Date(post.updated_at).toISOString() : new Date(post.created_at).toISOString(),
    author: {
      "@type": "Person",
      name: post.author_name || "QoraxAI",
    },
    publisher: {
      "@type": "Organization",
      name: "QoraxAI",
      logo: {
        "@type": "ImageObject",
        url: "https://qoraxai.com/qoraxai-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://qoraxai.com/blog/${post.slug}`,
    },
    keywords: post.keywords || post.title,
    articleSection: post.category,
    wordCount: post.content ? Math.ceil(post.content.split(/\s+/).length) : 0,
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        {/*<article className="prose prose-lg max-w-none prose-img:mx-auto prose-img:rounded-lg">
        <article className="w-full">
          <header className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-600">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">{post.title}</h1>
            {post.excerpt && <p className="text-xl text-gray-600 leading-relaxed text-center">{post.excerpt}</p>}
          </header>*/}


        <article className="w-full">
          <header className="mb-8">
            {/* Date / Author / Category bar — stays at top, centered */}
            <div className="flex items-center justify-center gap-4 mb-8 text-sm text-gray-600">
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
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>

            {/* Styled heading — matches the HTML blog design */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
                .blog-post-tag {
                  display: inline-block;
                  font-size: 11px;
                  font-weight: 600;
                  letter-spacing: 0.18em;
                  text-transform: uppercase;
                  color: #059669;
                  border: 1.5px solid #059669;
                  padding: 4px 14px;
                  margin-bottom: 20px;
                }
                .blog-post-title {
                  font-family: 'Playfair Display', Georgia, serif;
                  font-size: clamp(1.9rem, 5vw, 3rem);
                  font-weight: 900;
                  line-height: 1.2;
                  color: #0f172a;
                  margin-bottom: 20px;
                  letter-spacing: -0.02em;
                  text-align: left;
                }
                .blog-post-title span {
                  color: #059669;
                }
                .blog-post-meta {
                  display: flex;
                  gap: 16px;
                  align-items: center;
                  font-size: 13px;
                  color: #6b7280;
                  margin-bottom: 0;
                  padding-bottom: 28px;
                  border-bottom: 1.5px solid #e2e8f0;
                  font-style: italic;
                  flex-wrap: wrap;
                }
              `}</style>

            {/* Category tag */}
            {post.category && (
              <div>
                <span className="blog-post-tag">{post.category}</span>
              </div>
            )}

            {/* Styled H1 — Playfair Display, left aligned */}
            <h1
              className="blog-post-title"
              dangerouslySetInnerHTML={{
                __html: post.title.replace(
                  /(:.*)/,
                  (match: string) =>
                    `: <span>${match.replace(/^:\s*/, "")}</span>`
                ),
              }}
            />

            {/* Author / category / read time meta row */}
            <div className="blog-post-meta">
              <span>By {post.author_name} · QoraxAI</span>
              <span>·</span>
              <span>{post.category}</span>
              <span>·</span>
              <span>
                {post.content
                  ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read`
                  : "5 min read"}
              </span>
            </div>
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
            //className="text-center prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-strong:text-gray-900 prose-p:text-center prose-headings:text-center"
            className="w-full"
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
