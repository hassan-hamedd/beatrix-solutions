"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Technology", count: 12 },
  { name: "Development", count: 8 },
  { name: "Design", count: 6 },
  { name: "Architecture", count: 5 },
  { name: "Security", count: 4 },
  { name: "Cloud Computing", count: 7 },
  { name: "AI & ML", count: 9 },
  { name: "Best Practices", count: 5 },
];

export function BlogCategories() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border bg-background p-6"
    >
      <h2 className="font-semibold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-between"
          >
            {category.name}
            <span className="text-muted-foreground text-sm">
              ({category.count})
            </span>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}