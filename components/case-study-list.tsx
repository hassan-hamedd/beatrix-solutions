"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Transforming E-commerce with AI",
    client: "TechMart Inc.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description:
      "How we helped TechMart increase sales by 150% through AI-powered recommendations.",
    results: ["150% increase in sales", "30% higher customer retention", "2x faster checkout"],
  },
  {
    title: "Healthcare Innovation Platform",
    client: "MedCare Solutions",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    description:
      "Revolutionizing patient care with a comprehensive digital platform.",
    results: ["40% reduction in wait times", "90% patient satisfaction", "50% less paperwork"],
  },
];

export function CaseStudyList() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-[800px] mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Case Studies
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Detailed insights into our most impactful projects
        </p>
      </motion.div>

      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 items-center lg:grid-cols-2"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="text-primary font-medium">{study.client}</div>
              <h3 className="text-2xl font-bold">{study.title}</h3>
              <p className="text-muted-foreground">{study.description}</p>
              <ul className="space-y-2">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
              <Button className="gap-2">
                Read Case Study <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}