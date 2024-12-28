"use client";

import { motion } from "framer-motion";
import { BlogGrid } from "@/components/blog-grid";
import { FeaturedPosts } from "@/components/featured-posts";
import { BlogCategories } from "@/components/blog-categories";
import { BlogSearch } from "@/components/blog-search";

export default function BlogPage() {
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
            Our Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Insights, tutorials, and updates from our team of software development experts.
          </p>
        </motion.div>
      </section>

      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FeaturedPosts />
            <BlogGrid />
          </div>
          <aside className="lg:col-span-4 space-y-8">
            <BlogSearch />
            <BlogCategories />
          </aside>
        </div>
      </div>
    </div>
  );
}