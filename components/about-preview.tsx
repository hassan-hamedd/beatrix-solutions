"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Smartphone } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="container px-4 py-12 md:py-16 lg:py-20 self-center">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Crafting Digital Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            At Beatrix Solutions, we combine technical expertise with creative innovation
            to deliver software solutions that exceed expectations.
          </p>
          <div className="flex gap-4">
            <Link href="/about">
              <Button className="gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {[
            {
              icon: Code,
              title: "Custom Development",
              description: "Tailored solutions for your unique needs",
            },
            {
              icon: Cloud,
              title: "Cloud Solutions",
              description: "Scalable and secure cloud infrastructure",
            },
            {
              icon: Smartphone,
              title: "Mobile Apps",
              description: "Native and cross-platform applications",
            },
            {
              icon: ArrowRight,
              title: "24/7 Support",
              description: "Round-the-clock technical assistance",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
            >
              <item.icon className="h-6 w-6 mb-2 text-primary" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              {stat.value}
            </h3>
            <p className="mt-2 text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}