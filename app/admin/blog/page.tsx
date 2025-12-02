"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RichTextEditor } from "@/components/rich-text-editor"
import { Trash2, Edit, Plus, LogOut } from "lucide-react"

export default function AdminBlogPage() {
  const router = useRouter()
  const supabase = createBrowserClient()
  const [posts, setPosts] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string>("")
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    category: "technology",
    published: false,
  })

  useEffect(() => {
    checkAuth()
    loadPosts()
  }, [])

  async function checkAuth() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      setUserEmail(user.email || "")
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  async function loadPosts() {
    try {
      console.log("[v0] Loading blog posts...")
      const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("[v0] Error loading posts:", error)
        setError(`Failed to load posts: ${error.message}`)
        return
      }

      console.log("[v0] Posts loaded:", data?.length || 0)
      setPosts(data || [])
      setError(null)
    } catch (err: any) {
      console.error("[v0] Exception loading posts:", err)
      setError(`Exception: ${err.message}`)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      console.log("[v0] Submitting post:", formData)

      if (editingPost) {
        const { error } = await supabase.from("blog_posts").update(formData).eq("id", editingPost.id)
        if (error) {
          console.error("[v0] Update error:", error)
          setError(`Failed to update: ${error.message}`)
          setLoading(false)
          return
        }
        console.log("[v0] Post updated successfully")
      } else {
        const { error } = await supabase.from("blog_posts").insert([formData])
        if (error) {
          console.error("[v0] Insert error:", error)
          setError(`Failed to create: ${error.message}`)
          setLoading(false)
          return
        }
        console.log("[v0] Post created successfully")
      }

      resetForm()
      await loadPosts()
    } catch (err: any) {
      console.error("[v0] Exception:", err)
      setError(`Exception: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        console.log("[v0] Deleting post:", id)
        const { error } = await supabase.from("blog_posts").delete().eq("id", id)
        if (error) {
          console.error("[v0] Delete error:", error)
          setError(`Failed to delete: ${error.message}`)
          return
        }
        console.log("[v0] Post deleted successfully")
        await loadPosts()
      } catch (err: any) {
        console.error("[v0] Exception deleting:", err)
        setError(`Exception: ${err.message}`)
      }
    }
  }

  function handleEdit(post: any) {
    setEditingPost(post)
    setFormData(post)
    setShowForm(true)
  }

  function resetForm() {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featured_image: "",
      category: "technology",
      published: false,
    })
    setEditingPost(null)
    setShowForm(false)
  }

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Blog Admin</h1>
            {userEmail && <p className="text-sm text-gray-600 mt-1">Logged in as: {userEmail}</p>}
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setShowForm(!showForm)}>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            <strong>Error:</strong> {error}
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-bold mb-4">{editingPost ? "Edit Post" : "Create New Post"}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) })
                  }}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <RichTextEditor
                  value={formData.content}
                  onChange={(value) => setFormData({ ...formData, content: value })}
                  placeholder="Write your blog post content here. Use the toolbar to format text, add headings, lists, links, and more..."
                />
                <p className="text-xs text-gray-500 mt-2">
                  Use the formatting toolbar above to create professional blog posts with headings, bold/italic text,
                  bullet points, and links.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Featured Image URL</label>
                <Input
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                  placeholder="/blog/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="h-4 w-4"
                />
                <label className="text-sm font-medium">Published</label>
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : editingPost ? "Update" : "Create"} Post
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        )}

        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{post.title}</div>
                      <div className="text-sm text-gray-500">/blog/{post.slug}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
