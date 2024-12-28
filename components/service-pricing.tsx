"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$999",
    description: "Perfect for small projects",
    features: [
      "Custom development",
      "Basic support",
      "1 revision round",
      "30-day warranty",
    ],
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "Priority support",
      "3 revision rounds",
      "90-day warranty",
      "Performance optimization",
      "Security audit",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale projects",
    features: [
      "Everything in Professional",
      "24/7 dedicated support",
      "Unlimited revisions",
      "1-year warranty",
      "Advanced security",
      "Custom integrations",
      "Training sessions",
    ],
  },
];

export function ServicePricing() {
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
          Transparent Pricing
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Choose the plan that best fits your needs
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-lg border bg-background p-6 shadow-md ${
              plan.popular ? "border-primary" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-2 text-3xl font-bold">{plan.price}</div>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}