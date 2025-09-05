"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Anansi Tech.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          
          <Link href="/#industries" className="text-sm font-medium hover:text-primary transition-colors">
            Industries
          </Link>

          <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </Link>
          
          <Link href="/team" className="text-sm font-medium hover:text-primary transition-colors">
            Team
          </Link>
          
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
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
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/#services" className="block text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/#industries" className="block text-sm font-medium hover:text-primary">
              Industries
            </Link>
            <Link href="/products" className="block text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="/team" className="block text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-primary">
              Contact
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
