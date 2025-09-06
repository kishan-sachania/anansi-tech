"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    if (href.startsWith("/#")) {
      // For hash links, don't show as active by default
      // Only show underline on hover
      return false
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center transition-all duration-300 hover:scale-105">
          <img 
            src="/anansi/Anansi-full.png" 
            alt="Anansi Tech" 
            className="h-12 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/#services" 
            className={`text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
              isActive("/#services") 
                ? "text-foreground font-semibold" 
                : "text-foreground"
            }`}
          >
            Services
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
              isActive("/#services") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            }`} />
          </Link>
          
          <Link 
            href="/#industries" 
            className={`text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
              isActive("/#industries") 
                ? "text-foreground font-semibold" 
                : "text-foreground"
            }`}
          >
            Industries
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
              isActive("/#industries") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            }`} />
          </Link>

          <Link 
            href="/products" 
            className={`text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
              isActive("/products") 
                ? "text-foreground font-semibold" 
                : "text-foreground"
            }`}
          >
            Products
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
              isActive("/products") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            }`} />
          </Link>
          
          <Link 
            href="/team" 
            className={`text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
              isActive("/team") 
                ? "text-foreground font-semibold" 
                : "text-foreground"
            }`}
          >
            Team
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
              isActive("/team") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            }`} />
          </Link>
          
          <Link 
            href="/contact" 
            className={`text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
              isActive("/contact") 
                ? "text-foreground font-semibold" 
                : "text-foreground"
            }`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
              isActive("/contact") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            }`} />
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="transition-all duration-300 hover:scale-110"
          >
            <div className="transition-all duration-300">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background transition-all duration-300 ease-in-out animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/#services" 
              className={`block text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
                isActive("/#services") 
                  ? "text-foreground font-semibold" 
                  : "text-foreground"
              }`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                isActive("/#services") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`} />
            </Link>
            
            <Link 
              href="/#industries" 
              className={`block text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
                isActive("/#industries") 
                  ? "text-foreground font-semibold" 
                  : "text-foreground"
              }`}
            >
              Industries
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                isActive("/#industries") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`} />
            </Link>
            
            <Link 
              href="/products" 
              className={`block text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
                isActive("/products") 
                  ? "text-foreground font-semibold" 
                  : "text-foreground"
              }`}
            >
              Products
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                isActive("/products") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`} />
            </Link>
            
            <Link 
              href="/team" 
              className={`block text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
                isActive("/team") 
                  ? "text-foreground font-semibold" 
                  : "text-foreground"
              }`}
            >
              Team
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                isActive("/team") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`} />
            </Link>
            
            <Link 
              href="/contact" 
              className={`block text-sm font-medium relative transition-all duration-300 hover:text-primary group ${
                isActive("/contact") 
                  ? "text-foreground font-semibold" 
                  : "text-foreground"
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                isActive("/contact") ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`} />
            </Link>
            
            <Button asChild className="w-full mt-4">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
