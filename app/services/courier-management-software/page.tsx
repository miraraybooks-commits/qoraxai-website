import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "Courier Software Bangladesh | QoraxAI | Booking to Delivery",
  description:
    "Courier Software | Automate booking, parcel tracking, COD settlement, branch accounts, and delivery operations — all in one platform. Call 01718 723202.",
  keywords: [
    "courier management software Bangladesh",
    "courier software Dhaka",
    "parcel tracking system Bangladesh",
    "COD management software",
    "courier business software",
    "multi-branch courier system",
    "delivery management software Bangladesh",
  ],
  alternates: {
    canonical: "/services/courier-management-software",
  },
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

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-24">
          <div>
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">
              🇧🇩 Made for Bangladesh Courier Businesses
            </span>

            <h1 className="text-4xl font-bold text-primary mb-5 leading-tight">
              Courier Management Software — Booking থেকে Delivery সম্পূর্ণ অটোমেটেড
            </h1>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              আপনার কুরিয়ার ব্যবসা কি এখনও Excel, WhatsApp আর হাতের খাতায় চলছে? প্রতিদিন শত শত পার্সেলের
              হিসাব রাখা, COD সেটেলমেন্ট মেলানো, ব্রাঞ্চের হিসাব দেখা — এগুলো করতে গিয়ে কত সময় নষ্ট হচ্ছে,
              কত ভুল হচ্ছে, আর কত টাকা লস হচ্ছে তার হিসাব কি আছে?
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              QoraxAI-এর Courier Management Software বাংলাদেশের কুরিয়ার ব্যবসার বাস্তব সমস্যা বুঝে তৈরি।
              Booking থেকে Delivery পর্যন্ত পুরো প্রক্রিয়া এক প্ল্যাটফর্মে — দ্রুত, নির্ভুল ও লাভজনক।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition text-center"
              >
                ফ্রি ডেমো দেখুন
              </Link>
              <a
                href="tel:01718723202"
                className="inline-block border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition text-center"
              >
                📞 01718 723202
              </a>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/courier-management.jpg"
              alt="QoraxAI courier management software dashboard — parcel tracking and branch management"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* ── STATS STRIP ───────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "100%", label: "Digital Operation" },
              { num: "Real-time", label: "Parcel Tracking" },
              { num: "8+", label: "Core Modules" },
              { num: "End-to-End", label: "Automation" },
            ].map((stat) => (
              <div key={stat.label} className="bg-primary text-white rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold mb-1">{stat.num}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── THE REAL PROBLEM ──────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary mb-4 text-center">
            বাংলাদেশের কুরিয়ার ব্যবসার আসল সমস্যা
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            এগুলো কি আপনার পরিচিত লাগছে?
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "COD হিসাব মেলে না",
                desc: "ডেলিভারি ম্যান কত টাকা কালেক্ট করল, কত জমা দিল — এই হিসাব প্রতিদিন মেলাতে গিয়ে ঘণ্টার পর ঘণ্টা চলে যায়। ভুল হলে কে দায়ী বোঝা যায় না।"
              },
              {
                title: "ব্রাঞ্চের খোঁজ রাখা যায় না",
                desc: "ঢাকায় বসে চট্টগ্রাম বা সিলেট ব্রাঞ্চে কী হচ্ছে জানার উপায় নেই। ফোন করতে হয়, ম্যাসেজ করতে হয় — তবুও সঠিক তথ্য পাওয়া যায় না।"
              },
              {
                title: "পার্সেল হারিয়ে যায়",
                desc: "কোন পার্সেল কোথায় আছে কেউ বলতে পারে না। কাস্টমার ফোন করে, স্টাফ খোঁজে — কিন্তু সিস্টেম না থাকলে খোঁজাটাই সমস্যা।"
              },
              {
                title: "আয়-ব্যয়ের হিসাব নেই",
                desc: "মাসের শেষে কত আয় হলো, কোন ব্রাঞ্চ লাভজনক, কোনটা লোকসান করছে — এই ছবিটা কেউ দেখতে পায় না।"
              },
              {
                title: "ম্যানুয়াল ভুল থামানো যায় না",
                desc: "হাতে লেখা বা Excel-এ একই তথ্য বারবার লেখা হয়। একটা ভুল সংখ্যা পুরো হিসাব নষ্ট করে দেয়।"
              },
              {
                title: "Fraud ধরার উপায় নেই",
                desc: "কে কখন কী পরিবর্তন করল, কোন পার্সেলের স্ট্যাটাস বদলালো — লগ না থাকলে Fraud ধরার কোনো সুযোগ নেই।"
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
        <div className="bg-white py-16 px-4 rounded-3xl shadow-inner mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center mb-4">
              কীভাবে কাজ করে?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Booking থেকে শুরু করে Customer-এর কাছে পার্সেল পৌঁছানো এবং COD সেটেলমেন্ট পর্যন্ত
              প্রতিটি ধাপ সিস্টেমে রেকর্ড হয় — স্বয়ংক্রিয়ভাবে।
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "১",
                  title: "Booking",
                  desc: "পার্সেল বুকিং হওয়ার সাথে সাথে Invoice তৈরি হয়, Tracking ID জেনারেট হয়, Cash বা Credit — সব রেকর্ড হয়।"
                },
                {
                  step: "২",
                  title: "Hub → Branch",
                  desc: "Scan করলেই পার্সেলের লোকেশন আপডেট হয়। কোন Hub-এ আছে, কোন Branch-এ গেছে — সব দেখা যায় Real-time-এ।"
                },
                {
                  step: "৩",
                  title: "Delivery",
                  desc: "ডেলিভারি ম্যান পার্সেল দেওয়ার সাথে সাথে Status Update হয়। COD কালেক্ট হলে সাথে সাথে Accounts-এ যোগ হয়।"
                },
                {
                  step: "৪",
                  title: "Settlement",
                  desc: "COD Auto Settlement হয়। Branch-to-Branch Money Transfer রেকর্ড হয়। মাসের শেষে হিসাব মেলাতে কোনো ঝামেলা নেই।"
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 8 MODULES ─────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary text-center mb-4">
            ৮টি Core Module — একটি সফটওয়্যারে পুরো ব্যবসা
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            আলাদা আলাদা সফটওয়্যার কেনার দরকার নেই। QoraxAI-এর একটি প্ল্যাটফর্মেই আপনার কুরিয়ার
            ব্যবসার সব কাজ হবে।
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "📦",
                title: "Booking Module",
                points: ["Quick Parcel Entry", "Auto Invoice Generation", "Cash / Credit Booking"],
                color: "border-blue-600"
              },
              {
                icon: "🔄",
                title: "Operation Module",
                points: ["Hub → Branch → Delivery Flow", "Scan-based Status Update", "Lost / Delay Monitor"],
                color: "border-orange-500"
              },
              {
                icon: "💰",
                title: "Accounts Module",
                points: ["Daily Income & Expense", "Branch-wise হিসাব", "COD Management"],
                color: "border-green-600"
              },
              {
                icon: "📊",
                title: "Reports Module",
                points: ["Delivery Performance Report", "Branch Comparison", "Financial Summary"],
                color: "border-yellow-500"
              },
              {
                icon: "🧾",
                title: "Customer Care Module",
                points: ["Parcel Tracking Support", "Complaint Management", "Full Customer History"],
                color: "border-purple-600"
              },
              {
                icon: "🔐",
                title: "Admin & Control",
                points: ["Role-based Access Control", "Edit Lock (Admin Only)", "System Settings"],
                color: "border-red-500"
              },
              {
                icon: "🔁",
                title: "Money Transfer Module",
                points: ["Branch-to-Branch Transfer", "COD Auto Settlement", "Accounts Automation"],
                color: "border-cyan-600"
              },
              {
                icon: "✅",
                title: "Audit Module",
                points: ["Parcel Verification", "Fraud Detection", "Account Reconciliation"],
                color: "border-amber-500"
              },
            ].map((mod) => (
              <div key={mod.title} className={`bg-white rounded-xl shadow-sm p-5 border-t-4 ${mod.color}`}>
                <div className="text-2xl mb-3">{mod.icon}</div>
                <h3 className="font-semibold text-primary mb-3 text-sm">{mod.title}</h3>
                <ul className="space-y-1">
                  {mod.points.map((p) => (
                    <li key={p} className="text-xs text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-0.5">›</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHO IS IT FOR ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary text-center mb-4">
            কোন ধরনের ব্যবসার জন্য?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            ছোট হোক বা বড় — যেকোনো কুরিয়ার ব্যবসার জন্য এই সফটওয়্যার কাজ করে।
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "নতুন কুরিয়ার কোম্পানি",
                desc: "শুরু থেকেই সঠিক সিস্টেমে চললে ব্যবসা দ্রুত বাড়ে। ম্যানুয়াল পদ্ধতিতে শুরু করলে পরে বদলানো কঠিন হয়ে যায়।"
              },
              {
                title: "মাল্টি-ব্রাঞ্চ কুরিয়ার",
                desc: "ঢাকা, চট্টগ্রাম, সিলেট — সব ব্রাঞ্চ একটি ড্যাশবোর্ড থেকে দেখুন। কোন ব্রাঞ্চ ভালো করছে, কোনটা পিছিয়ে — সাথে সাথে বুঝতে পারবেন।"
              },
              {
                title: "E-commerce Fulfillment",
                desc: "অনলাইন শপের পার্সেল ডেলিভারি করেন? COD কালেক্ট করেন? তাহলে আপনার জন্য Automated COD Settlement সবচেয়ে দরকারি।"
              },
              {
                title: "Local Delivery Service",
                desc: "শহরের মধ্যে Same-day Delivery দেন? Scan-based tracking আর Real-time status update আপনার কাস্টমারকে আপডেট রাখবে।"
              },
              {
                title: "District-level Courier",
                desc: "জেলা বা উপজেলা পর্যায়ে কাজ করেন? Lost parcel alert আর Delay monitor আপনাকে সময়মতো ব্যবস্থা নিতে সাহায্য করবে।"
              },
              {
                title: "3PL / Outsourced Logistics",
                desc: "একাধিক ক্লায়েন্টের পার্সেল ম্যানেজ করেন? Customer History আর Branch Performance Analytics দিয়ে প্রতিটি ক্লায়েন্টকে আলাদা রিপোর্ট দিন।"
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BENEFITS ──────────────────────────────────────────────── */}
        <div className="bg-white py-16 px-4 rounded-3xl shadow-inner mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center mb-4">
              এই সফটওয়্যার ব্যবহার করলে কী পাবেন?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              শুধু ফিচার না — বাস্তবে কী পরিবর্তন আসে সেটা জানুন।
            </p>
            <div className="space-y-4">
              {[
                {
                  num: "১",
                  title: "COD-এর লস বন্ধ হবে",
                  desc: "COD Auto Settlement মানে প্রতিটি টাকার হিসাব সিস্টেমে আছে। কে কত কালেক্ট করল, কত জমা দিল — সব দেখা যাবে। কাউকে বিশ্বাসের উপর ছাড়তে হবে না।"
                },
                {
                  num: "২",
                  title: "Head Office থেকে সব Branch দেখা যাবে",
                  desc: "Centralized Dashboard মানে আপনি ঢাকায় বসে সারাদেশের সব ব্রাঞ্চের Real-time অবস্থা দেখতে পাবেন। ফোন করতে হবে না।"
                },
                {
                  num: "৩",
                  title: "Fraud ও চুরি ধরা যাবে",
                  desc: "Audit Module ও Role-based Access Control মানে কে কখন কী করেছে সব লগ আছে। Edit Control Admin-এর হাতে — তাই অনুমতি ছাড়া কেউ কিছু বদলাতে পারবে না।"
                },
                {
                  num: "৪",
                  title: "হারানো পার্সেলের সংখ্যা কমবে",
                  desc: "Scan-based tracking মানে প্রতিটি পার্সেল প্রতিটি ধাপে স্ক্যান হয়। Lost বা Delay হলে সাথে সাথে Alert আসে — আগেই ব্যবস্থা নেওয়া সম্ভব।"
                },
                {
                  num: "৫",
                  title: "আয়-ব্যয়ের সঠিক ছবি পাবেন",
                  desc: "Daily Income/Expense, Branch Performance, Profit/Loss Report — সব একটি ক্লিকে। কোন রুট লাভজনক, কোন ব্রাঞ্চ খরচ বেশি করছে — সিদ্ধান্ত নেওয়া সহজ হবে।"
                },
                {
                  num: "৬",
                  title: "Customer Satisfaction বাড়বে",
                  desc: "কাস্টমার নিজেই Tracking করতে পারবে। Complaint করলে History দেখে সাথে সাথে উত্তর দেওয়া যাবে। বারবার ফোন করতে হবে না।"
                },
              ].map((b) => (
                <div key={b.num} className="flex gap-5 items-start bg-gray-50 rounded-2xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {b.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURES TAGS ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary text-center mb-8">
            বিশেষ সুবিধাসমূহ
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "🔍 Real-time Parcel Tracking",
              "🏢 Multi-Branch Management",
              "💳 COD Auto Settlement",
              "📱 Scan-based Update",
              "📈 Profit / Loss Report",
              "🛡️ Fraud Detection",
              "👤 Role-based Access Control",
              "🔔 Delay & Loss Alert",
              "📋 Branch Performance Analytics",
              "🤝 Customer History & Support",
              "💼 Fully Automated Accounts",
              "🇧🇩 Bangla-first Interface",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-primary/20 text-primary text-sm px-4 py-2 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── AI DASHBOARD ──────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-primary rounded-3xl p-8 md:p-10 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2 block">
                  🧠 AI-Powered
                </span>
                <h2 className="text-2xl font-bold mb-3">Business Intelligence Dashboard</h2>
                <p className="text-white/80 leading-relaxed">
                  শুধু ডেটা না — AI-powered Insights দিয়ে বুঝুন কোন Branch ভালো করছে, কোন রুটে বেশি Delay হচ্ছে,
                  কোন সময়ে Booking বেশি আসে। Daily, Monthly, Branch-wise Analytics এক জায়গায়।
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-white/80 min-w-max">
                <div>📊 Daily / Monthly Analytics</div>
                <div>🏆 Top vs Low Performing Branch</div>
                <div>📦 Booking, Delivery & Pending Reports</div>
                <div>💡 AI-driven Recommendations</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── HONEST NOTE ───────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-primary mb-3">
              আমাদের কথা — সরাসরি
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              এই সফটওয়্যার তৈরি হয়েছে বাংলাদেশের কুরিয়ার ব্যবসার বাস্তব সমস্যা থেকে। আমরা নিজেরা
              এই সমস্যাগুলো দেখেছি, বুঝেছি — তারপর সমাধান তৈরি করেছি। <strong>"We lived the problem."</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              আমরা আপনাকে বলব না যে এই সফটওয়্যার সব সমস্যার সমাধান। প্রথম কথোপকথনেই আপনার ব্যবসা বুঝে
              সৎভাবে জানাব এটা আপনার জন্য উপযুক্ত কিনা। Demo দেখুন, প্রশ্ন করুন — তারপর সিদ্ধান্ত নিন।
            </p>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            আজই ফ্রি ডেমো দেখুন
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            ৩০ মিনিটের Demo-তে দেখুন আপনার ব্যবসার জন্য এই সফটওয়্যার কীভাবে কাজ করবে।
            কোনো commitment নেই — শুধু দেখুন।
          </p>
          <p className="text-muted-foreground mb-8">
            📞 <strong>01718 723202</strong> &nbsp;|&nbsp; 📧 <strong>sales@qoraxai.com</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
            >
              ফ্রি ডেমো বুক করুন
            </Link>
            <a
              href="tel:01718723202"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition"
            >
              📞 এখনই কল করুন
            </a>
          </div>
        </div>

      </section>
    </>
  )
}
