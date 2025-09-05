"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, TrendingUp, Users, BarChart3, Settings } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const products = [
  {
    name: "Financial Management",
    description: "Comprehensive financial tools for accounting, budgeting, and reporting",
    features: ["General Ledger", "Accounts Payable/Receivable", "Budget Planning", "Financial Reporting", "Tax Management"],
    icon: BarChart3,
    category: "Finance",
    pricing: "Starting at $99/month"
  },
  {
    name: "Supply Chain Management",
    description: "End-to-end supply chain visibility and optimization",
    features: ["Inventory Management", "Procurement", "Vendor Management", "Order Processing", "Warehouse Management"],
    icon: TrendingUp,
    category: "Operations",
    pricing: "Starting at $149/month"
  },
  {
    name: "Human Resources",
    description: "Complete HR management and employee lifecycle tools",
    features: ["Payroll Processing", "Employee Records", "Performance Management", "Time Tracking", "Benefits Administration"],
    icon: Users,
    category: "HR",
    pricing: "Starting at $79/month"
  },
  {
    name: "Customer Relationship Management",
    description: "Streamline customer interactions and sales processes",
    features: ["Lead Management", "Sales Pipeline", "Customer Support", "Marketing Automation", "Analytics"],
    icon: Users,
    category: "Sales",
    pricing: "Starting at $129/month"
  },
  {
    name: "Project Management",
    description: "Plan, track, and deliver projects on time and within budget",
    features: ["Task Management", "Resource Planning", "Time Tracking", "Gantt Charts", "Collaboration Tools"],
    icon: Settings,
    category: "Project",
    pricing: "Starting at $89/month"
  },
  {
    name: "Business Intelligence",
    description: "Advanced analytics and reporting for data-driven decisions",
    features: ["Custom Dashboards", "Real-time Analytics", "Predictive Analytics", "Data Visualization", "KPI Tracking"],
    icon: BarChart3,
    category: "Analytics",
    pricing: "Starting at $199/month"
  }
]

const categories = ["All", "Finance", "Operations", "HR", "Sales", "Project", "Analytics"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Products
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Powerful ERP <span className="text-primary">Modules</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Comprehensive ERP modules designed to streamline every aspect of your business operations. 
            Choose the modules you need or get the complete suite.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                className="mb-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} 
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => {                                             
              const IconComponent = product.icon
              return (
                <Card key={`${product.category}-${index}`} className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                      <Badge variant="secondary" className="group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">{product.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-white transition-colors duration-500">{product.name}</CardTitle>
                    <CardDescription className="text-sm group-hover:text-white/90 transition-colors duration-500">{product.description}</CardDescription>
                    <div className="text-sm font-semibold text-primary group-hover:text-white transition-colors duration-500">{product.pricing}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 group-hover:text-white transition-colors duration-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Enterprise Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get all modules in one integrated platform with advanced features and enterprise-grade security
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Complete Suite?</h3>
              <div className="space-y-4">
                {[
                  { title: "Seamless Integration", desc: "All modules work together seamlessly with shared data and workflows" },
                  { title: "Unified Dashboard", desc: "Single dashboard to manage all aspects of your business" },
                  { title: "Advanced Security", desc: "Enterprise-grade security with role-based access control" },
                  { title: "24/7 Support", desc: "Dedicated support team and comprehensive documentation" },
                  { title: "Scalable Architecture", desc: "Grows with your business from startup to enterprise" },
                  { title: "Custom Development", desc: "Tailored solutions for your specific business needs" }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{advantage.title}</h4>
                      <p className="text-muted-foreground text-sm">{advantage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise Suite</CardTitle>
                <CardDescription>Complete ERP solution with all modules</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Profitable Package</div>
                  
                  <div className="text-sm text-muted-foreground mt-2">Complete enterprise solution</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>All 6 Modules</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex justify-between">
                    <span>Unlimited Users</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex justify-between">
                    <span>Advanced Analytics</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex justify-between">
                    <span>Priority Support</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex justify-between">
                    <span>Custom Development</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">
                    Contact for Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a free trial and see how our ERP modules can streamline your operations
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">
                Contact for Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
