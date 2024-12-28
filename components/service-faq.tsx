"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your development process?",
    answer:
      "Our development process follows an agile methodology, starting with requirements gathering, followed by design, development, testing, and deployment. We maintain transparent communication throughout the project.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and requirements. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. We'll provide a detailed timeline during consultation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your software continues to perform optimally. This includes bug fixes, updates, and technical support.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms like AWS and Azure. Our team stays current with the latest tech trends and best practices.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain regular communication through scheduled meetings, progress reports, and project management tools. You'll have a dedicated project manager as your main point of contact.",
  },
  {
    question: "What about data security?",
    answer:
      "Security is a top priority. We implement industry best practices for security, including encryption, secure authentication, and regular security audits. We also ensure compliance with relevant regulations.",
  },
];

export function ServiceFAQ() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-[800px] mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Find answers to common questions about our services
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[800px] mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}