"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/service-card";
import { ProcessSection } from "@/components/process-section";
import { TechnologyStack } from "@/components/technology-stack";
import { ServicePricing } from "@/components/service-pricing";
import { ServiceFAQ } from "@/components/service-faq";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive software development solutions tailored to your business needs.
            From concept to deployment, we're with you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Detailed Services */}
      <section className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard />
        </div>
      </section>

      <ProcessSection />
      <TechnologyStack />
      <ServicePricing />
      <ServiceFAQ />
    </div>
  );
}