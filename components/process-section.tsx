"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const process = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "Understanding your needs and project requirements",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Creating detailed plans and architectural designs",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building your solution with cutting-edge technology",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous testing to ensure quality and reliability",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Smooth deployment and implementation",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description: "Ongoing maintenance and technical support",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-muted/50 py-12 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[800px] mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Process
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A systematic approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-lg border bg-background p-6 shadow-md"
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                {index < process.length - 1 && (
                  <div className="h-px w-8 bg-border" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}