"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    description: "Modern e-commerce solution with real-time inventory management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Healthcare Analytics",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    description: "Advanced analytics platform for healthcare providers.",
    technologies: ["Python", "TensorFlow", "React"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    description: "Secure and intuitive mobile banking application.",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Supply Chain Management",
    category: "Enterprise Software",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    description: "End-to-end supply chain management system.",
    technologies: ["Java", "Spring Boot", "Oracle"],
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    description: "Property listing and management platform.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    title: "IoT Dashboard",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1558346547-4439467bd1d5",
    description: "Real-time monitoring dashboard for IoT devices.",
    technologies: ["React", "WebSocket", "InfluxDB"],
  },
];

export function ProjectGrid() {
  return (
    <section className="container px-4">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg border bg-background shadow-md"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 text-sm font-medium text-primary">
                {project.category}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button className="w-full gap-2">
                View Project <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}