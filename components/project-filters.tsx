"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Enterprise Software",
  "Data Analytics",
  "IoT",
];

export function ProjectFilters() {
  return (
    <section className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9 w-full md:w-[300px]"
          />
        </div>
      </motion.div>
    </section>
  );
}