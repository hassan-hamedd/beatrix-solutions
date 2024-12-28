"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TeamSection } from "@/components/team-section";
import { ValuesSection } from "@/components/values-section";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground">
              Founded in 2020, Beatrix Solutions has grown from a small team of passionate developers
              to a full-service software development company trusted by businesses worldwide.
            </p>
            <Button size="lg">Join Our Team</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/50 py-12 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses through innovative software solutions that drive growth,
                efficiency, and digital transformation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading software development partner known for excellence,
                innovation, and delivering transformative digital solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <Timeline />
      <TeamSection />
    </div>
  );
}