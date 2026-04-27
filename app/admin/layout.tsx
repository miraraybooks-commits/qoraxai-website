// Prevent all admin pages from being prerendered during build
// Admin pages are protected and require dynamic authentication
export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
