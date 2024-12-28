"use client";

import { motion } from "framer-motion";

const technologies = {
  Frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Python",
    "Java",
    "Go",
    "Ruby on Rails",
    ".NET Core",
  ],
  Database: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "DynamoDB",
  ],
  Cloud: [
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
  ],
};

export function TechnologyStack() {
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
          Our Technology Stack
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          We use cutting-edge technologies to build robust solutions
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(technologies).map(([category, techs], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border bg-background p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 gap-3">
              {techs.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center rounded-lg border bg-muted/50 px-3 py-2"
                >
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}