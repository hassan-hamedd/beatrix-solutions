import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container self-center px-4 py-12 md:py-16 lg:py-20 m-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <ScrollText className="h-6 w-6" />
              <span className="font-bold">Beatrix</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into exceptional software solutions since 2020.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Custom Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Mobile Apps
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:hassan@beatrixsolutions.com" className="text-muted-foreground hover:text-foreground">
                    hassan@beatrixsolutions.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">
                    +96178877188
                  </a>
                </li>
                <li>
                  <Button variant="link" className="h-auto p-0">
                    Schedule a Call
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Beatrix Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}