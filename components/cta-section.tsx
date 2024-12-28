"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="self-center w-full bg-primary text-primary-foreground">
      <div className="container m-auto px-4 py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[800px] mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}