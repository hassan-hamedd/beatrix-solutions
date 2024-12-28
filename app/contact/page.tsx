"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { Map } from "@/components/map";

export default function ContactPage() {
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
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>
      </section>

      <section className="container px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <Map />
    </div>
  );
}