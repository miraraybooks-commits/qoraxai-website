"use client";

import { motion } from "framer-motion";

export function CRMLogosSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Our CRM Expertise
        </h2>
        <p className="text-muted-foreground">
          We implement leading CRM platforms trusted worldwide
        </p>
      </div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-20 justify-center items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {/* Zoho CRM Logo */}
          <img
            src="/logos/zoho-crm.webp"
            alt="Zoho CRM"
            className="h-14 object-contain opacity-90 hover:opacity-100 transition"
          />

          {/* HubSpot CRM Logo */}
          <img
            src="/logos/hubspot-crm.webp"
            alt="HubSpot CRM"
            className="h-14 object-contain opacity-90 hover:opacity-100 transition"
          />

          {/* SuiteCRM Logo */}
          <img
            src="/logos/suite-crm.webp"
            alt="SuiteCRM"
            className="h-14 object-contain opacity-90 hover:opacity-100 transition"
          />
        </motion.div>
      </div>
    </section>
  );
}
