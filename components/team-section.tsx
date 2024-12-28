"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "David Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "15+ years of software development and leadership experience",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Former tech lead at major tech companies",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Full-stack expert specializing in scalable solutions",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Zhang",
    role: "UX Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Passionate about creating intuitive user experiences",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export function TeamSection() {
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
          Meet Our Team
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Passionate experts dedicated to delivering exceptional software solutions
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-primary font-medium">{member.role}</p>
            <p className="mt-2 text-muted-foreground">{member.bio}</p>
            <div className="mt-4 flex justify-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}