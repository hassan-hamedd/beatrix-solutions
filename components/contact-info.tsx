import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Innovation Street", "Tech District", "San Francisco, CA 94105"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@beatrix.dev", "support@beatrix.dev"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM PST"],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold">Contact Information</h2>
        <p className="mt-2 text-muted-foreground">
          Reach out to us through any of these channels.
        </p>
      </div>

      <div className="grid gap-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex gap-4">
            <item.icon className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <div className="mt-1 space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}