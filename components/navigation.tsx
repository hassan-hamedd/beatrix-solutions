"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all",
        isScrolled ? "border-border" : "border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ScrollText className="h-6 w-6" />
          <span className="font-bold">Beatrix</span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Portfolio", "/portfolio"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
          <ModeToggle />
          <Button>Contact Us</Button>
        </div>
      </nav>
    </header>
  );
}