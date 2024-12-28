"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to WebAssembly.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    title: "Building Scalable Applications with Microservices",
    excerpt: "Learn how to design and implement scalable applications using microservices architecture.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    category: "Architecture",
  },
  {
    title: "Securing Your Web Applications: Best Practices",
    excerpt: "Essential security practices every developer should know to protect web applications.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    category: "Security",
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Tips and techniques for improving the performance of your React applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "Mar 8, 2024",
    readTime: "7 min read",
    category: "React",
  },
];

export function BlogGrid() {
  return (
    <div className="grid gap-8">
      {blogPosts.map((post, index) => (
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
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
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
  );
}