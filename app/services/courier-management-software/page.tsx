import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "Courier & Parcel Management Software | Logistics Solution | QoraxAI",
  description:
    "Streamline parcel logistics with intelligent courier management software. Track shipments, optimize routes, and reduce delivery costs.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CourierManagementPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Courier & Parcel Management Software</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Optimize your entire logistics operation. QoraxAI&apos;s <strong>Courier Management Software</strong> automates shipment tracking, route optimization, and delivery management. Reduce costs, improve customer satisfaction, and scale your logistics operation effortlessly.
            </p>

            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Optimize Your Logistics
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/courier-management.webp"
              alt="Courier and parcel management software with real-time tracking"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Section: The Challenge */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">Logistics & Delivery Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Manual parcel management leads to lost shipments, failed deliveries, customer frustration, and wasted operational costs. Without visibility into deliveries, you can&apos;t optimize routes or respond to issues in real-time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Inefficient Route Planning</h3>
              <p className="text-muted-foreground">
                Manual routing leads to longer delivery times, wasted fuel, and avoidable logistics costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Poor Customer Experience</h3>
              <p className="text-muted-foreground">
                Without real-time tracking, customers can&apos;t track orders, leading to support calls and complaints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Lost/Misplaced Shipments</h3>
              <p className="text-muted-foreground">
                Manual data entry creates errors and makes it difficult to locate missing parcels quickly.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Our Solution */}
        <div className="bg-white py-16 shadow-inner">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">Our Courier Management Solution</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Real-Time Shipment Tracking</h3>
                <p className="text-muted-foreground mb-6">
                  GPS-enabled tracking gives your team and customers complete visibility into every parcel&apos;s location and status.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. Intelligent Route Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  AI-powered algorithms optimize delivery routes to minimize distance, fuel costs, and delivery times.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Automated Dispatch Management</h3>
                <p className="text-muted-foreground">
                  Automatically assign deliveries to the nearest driver, balance workloads, and manage dynamic route changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. Multi-Courier Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Integrate with multiple courier partners—DHL, FedEx, UPS, local couriers—for flexible fulfillment options.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Customer Notifications & Proofs</h3>
                <p className="text-muted-foreground mb-6">
                  Automated SMS/email updates, delivery confirmations, and digital proof-of-delivery enhance customer trust.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Analytics & Cost Optimization</h3>
                <p className="text-muted-foreground">
                  Detailed reporting on delivery metrics, costs, and performance drivers to identify continuous improvement opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Why Choose QoraxAI */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose QoraxAI for Courier Management</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We bring together proven logistics expertise, cutting-edge technology, and customer-first design to deliver courier solutions that scale with your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">30% Cost Reduction</h3>
              <p className="text-muted-foreground">Average client savings through route optimization and efficiency improvements.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">98% On-Time Delivery</h3>
              <p className="text-muted-foreground">Intelligent routing and dispatch ensure superior delivery performance.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Scalable Platform</h3>
              <p className="text-muted-foreground">Supports 100+ deliveries/day to 10,000+ with zero performance degradation.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Easy Integration</h3>
              <p className="text-muted-foreground">Works with your existing e-commerce, ERP, and logistics systems seamlessly.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Transform Your Logistics Operation</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Reduce costs, improve delivery performance, and delight customers with smarter logistics management. Schedule a free logistics assessment with our team.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Book Logistics Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
