"use client";

import { motion } from "framer-motion";
import { ProjectGrid } from "@/components/project-grid";
import { ProjectFilters } from "@/components/project-filters";
import { CaseStudyList } from "@/components/case-study-list";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Our Work
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful projects and see how we've helped
            businesses achieve their digital transformation goals.
          </p>
        </motion.div>
      </section>

      <ProjectFilters />
      <ProjectGrid />
      <CaseStudyList />
    </div>
  );
}