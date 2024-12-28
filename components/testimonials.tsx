"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Beatrix Solutions transformed our business with their innovative software solutions. Their team's expertise and dedication were exceptional.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp Inc.",
    },
    {
      quote:
        "Working with Beatrix was a game-changer. They delivered our project on time and exceeded all expectations.",
      author: "Michael Chen",
      role: "CTO, InnovateLabs",
    },
    {
      quote:
        "The team at Beatrix Solutions showed incredible attention to detail and technical expertise throughout our project.",
      author: "Emily Rodriguez",
      role: "Product Manager, StartupX",
    },
  ];

  return (
    <section className="self-center container px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center max-w-[900px] mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Client Testimonials
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Hear what our clients have to say about working with us
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-lg border bg-card p-6 shadow-sm"
          >
            <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
            <p className="text-card-foreground mb-4">{testimonial.quote}</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}