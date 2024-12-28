"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Innovate. Build. Transform.
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400 mx-auto">
                We create exceptional software solutions that drive business growth and innovation.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button size="lg" className="gap-2">
                <Rocket className="w-4 h-4" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Code2 className="w-4 h-4" />
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  );
}