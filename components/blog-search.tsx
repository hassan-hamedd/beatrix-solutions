"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function BlogSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border bg-background p-6"
    >
      <h2 className="font-semibold mb-4">Search</h2>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          className="pl-9"
        />
      </div>
    </motion.div>
  );
}