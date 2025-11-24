"use client";

import { motion } from "framer-motion";

export function CRMLogosSection() {
  return (
    //<section className="py-20 bg-white">
      //<div className="container mx-auto text-center mb-10">
        //<h2 className="text-4xl font-bold text-foreground mb-4">
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-center text-4xl font-bold text-foreground mb-10 text-gray-800">
          Our CRM Expertise
        </h2>
        <p className="text-muted-foreground">
          We implement leading CRM platforms trusted worldwide
        </p>
      </div>

      <div className="overflow-hidden mt-12">
        <motion.div
          className="flex gap-20 justify-center items-center"
          //animate={{ x: ["0%", "-100%"] }}
          //transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          animate={{ x: [-80, 80, -80] }}   // back & forth effect
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Zoho CRM Logo 
          <img src="/logos/zoho-crm.webp" alt="Zoho CRM" className="h-14 object-contain opacity-90 hover:opacity-100 transition"/>
          <img src="/logos/hubspot-crm.webp" alt="HubSpot CRM" className="h-14 object-contain opacity-90 hover:opacity-100 transition"/>
          <img src="/logos/suite-crm.webp" alt="SuiteCRM" className="h-14 object-contain opacity-90 hover:opacity-100 transition"/>
          */}
          <img src="/logos/zoho-crm.webp" alt="Zoho CRM" className="h-14 object-contain" />
          <img src="/logos/hubspot-crm.webp" alt="HubSpot CRM" className="h-14 object-contain" />
          <img src="/logos/suite-crm.webp" alt="SuiteCRM" className="h-14 object-contain" />
        </motion.div>
      </div>
    </section>
  );
}
