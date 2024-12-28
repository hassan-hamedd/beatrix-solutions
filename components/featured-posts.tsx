"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const featuredPosts = [
  {
    title: "The Impact of AI on Software Development",
    excerpt: "How artificial intelligence is revolutionizing the way we build software and what it means for developers.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "Mar 18, 2024",
    readTime: "10 min read",
    category: "Artificial Intelligence",
  },
  {
    title: "Cloud-Native Development: A Complete Guide",
    excerpt: "Everything you need to know about building applications for the cloud.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    date: "Mar 16, 2024",
    readTime: "12 min read",
    category: "Cloud Computing",
  },
];

export function FeaturedPosts() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
      <div className="grid gap-8">
        {featuredPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg border bg-background shadow-md"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-video md:aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto gap-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}