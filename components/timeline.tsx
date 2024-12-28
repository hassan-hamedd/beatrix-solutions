"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Beatrix Solutions was established with a vision to transform businesses through technology.",
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-level software solution.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew our team to 20+ talented developers and designers.",
  },
  {
    year: "2023",
    title: "International Presence",
    description: "Expanded operations to serve clients globally.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched our innovation lab for emerging technologies.",
  },
];

export function Timeline() {
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
          Our Journey
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          The key milestones that have shaped our success
        </p>
      </motion.div>

      <div className="relative max-w-[800px] mx-auto">
        <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-border" />
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative grid gap-8 mb-8 ${
              index % 2 === 0 ? "md:grid-cols-[1fr,auto,1fr]" : "md:grid-cols-[1fr,auto,1fr] md:[&>*:first-child]:col-start-3"
            }`}
          >
            <div className={`bg-background p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? "text-right" : ""
            }`}>
              <div className="text-primary font-bold">{milestone.year}</div>
              <h3 className="text-lg font-semibold mt-1">{milestone.title}</h3>
              <p className="text-muted-foreground mt-2">{milestone.description}</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-primary" />
            </div>
            {index % 2 === 0 ? <div /> : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}