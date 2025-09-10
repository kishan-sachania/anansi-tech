import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

export function Footer() {
  const { theme } = useTheme()
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={theme === "dark" ? "/anansi/anansi-light.png" : "/anansi/Anansi-full.png"} 
                alt="Anansi Tech" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses with intelligent ERP solutions since
              2023.
            </p>
          </div>
          <div>
            <h4 className="letter-spacing-wide mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/product" className="hover:text-primary transition-colors">
                  Financial Management
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-primary transition-colors">
                  Supply Chain
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-primary transition-colors">
                  Human Resources
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-primary transition-colors">
                  Customer Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="letter-spacing-wide mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/team"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="letter-spacing-wide mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  System Status
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2023 Anansi Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
