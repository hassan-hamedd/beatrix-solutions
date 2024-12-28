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

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your specific business requirements and goals.",
    features: [
      "Custom web applications",
      "Enterprise software",
      "API development",
      "Legacy system modernization",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to power your digital transformation.",
    features: [
      "Cloud migration",
      "AWS/Azure/GCP solutions",
      "Cloud-native development",
      "DevOps automation",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    features: [
      "iOS development",
      "Android development",
      "Cross-platform solutions",
      "Mobile UI/UX design",
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Efficient database design, optimization, and maintenance services.",
    features: [
      "Database architecture",
      "Performance optimization",
      "Data migration",
      "Backup solutions",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets.",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance consulting",
      "Security training",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics & BI",
    description:
      "Data-driven insights to help you make informed business decisions.",
    features: [
      "Data visualization",
      "Business intelligence",
      "Predictive analytics",
      "Custom dashboards",
    ],
  },
];

export function ServiceCard() {
  return (
    <>
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
            <service.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-muted-foreground mb-4">{service.description}</p>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-sm text-muted-foreground">
                <div className="mr-2 h-1 w-1 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full">Learn More</Button>
        </motion.div>
      ))}
    </>
  );
}