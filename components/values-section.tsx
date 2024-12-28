"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap, Target, Users, Trophy } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about creating exceptional software that makes a difference.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Building long-lasting relationships through transparency and reliability.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve extraordinary results.",
  },
  {
    icon: Trophy,
    title: "Success",
    description: "Dedicated to our clients' success and growth.",
  },
];

export function ValuesSection() {
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
          Our Values
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          The principles that guide everything we do
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
              <value.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <p className="mt-2 text-muted-foreground">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}