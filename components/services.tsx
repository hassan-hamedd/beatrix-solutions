"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Cloud,
  Smartphone,
  Database,
  Shield,
  LineChart,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Tailored solutions designed to meet your specific business requirements and goals.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure to power your digital transformation.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Efficient database design, optimization, and maintenance services.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets.",
    },
    {
      icon: LineChart,
      title: "Analytics & BI",
      description:
        "Data-driven insights to help you make informed business decisions.",
    },
  ];

  return (
    <section className="bg-muted/50 self-center w-full">
      <div className="container px-4 py-12 md:py-16 lg:py-20 m-auto">
        <div className="w-full self-center text-center max-w-[900px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>
        <div className="w-full self-center grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <service.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-xl">{service.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">{service.description}</p>
              <Button variant="link" className="mt-4 p-0">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}