import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cost Optimization – Save 20–40% on IT for Bangladeshi SMEs | QoraxAI",
  description: "QoraxAI helps Bangladeshi SMEs cut IT costs 20–40% by identifying underused subscriptions, cloud waste, and redundant IT expenses. Get a free tech audit today.",
}

export default function CybersecurityPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image src="/cybersecurity.png" alt="Cybersecurity Assessment" fill className="object-cover object-center" priority />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Cybersecurity Assessment</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Protect your business data and reputation. We scan for vulnerabilities, configuration issues, and security gaps — ensuring your IT environment meets global standards.
        </p>
        <Link href="/#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition">
          Get Your Free Tech Audit
        </Link>
      </div>
    </section>
  );
}
