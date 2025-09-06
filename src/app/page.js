"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ERPCompanyWebsite() {
  const [hoveredIndustry, setHoveredIndustry] = useState(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)
                                                                                        
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Bubbles */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Blur Bubbles Container - Only in Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 md:-inset-4 lg:-inset-8 xl:-inset-12">
            {/* Actual Blur Bubbles - Reduced for mobile performance */}
            {[
              // Desktop bubbles (6 bubbles)
              { size: 600, color: 'radial-gradient(circle, rgba(166, 41, 133, 0.6) 0%, rgba(166, 41, 133, 0.3) 15%, rgba(166, 41, 133, 0.1) 30%, rgba(166, 41, 133, 0.03) 50%, transparent 70%)', delay: 0, duration: 20, initialX: '5%', initialY: '10%', showOnMobile: false },
              { size: 700, color: 'radial-gradient(circle, rgba(217, 176, 206, 0.5) 0%, rgba(217, 176, 206, 0.2) 15%, rgba(217, 176, 206, 0.08) 30%, rgba(217, 176, 206, 0.02) 50%, transparent 70%)', delay: 3, duration: 25, initialX: '85%', initialY: '15%', showOnMobile: false },
              { size: 550, color: 'radial-gradient(circle, rgba(107, 44, 109, 0.6) 0%, rgba(107, 44, 109, 0.25) 15%, rgba(107, 44, 109, 0.08) 30%, rgba(107, 44, 109, 0.03) 50%, transparent 70%)', delay: 6, duration: 18, initialX: '50%', initialY: '80%', showOnMobile: false },
              { size: 650, color: 'radial-gradient(circle, rgba(166, 41, 133, 0.5) 0%, rgba(166, 41, 133, 0.2) 15%, rgba(166, 41, 133, 0.06) 30%, rgba(166, 41, 133, 0.02) 50%, transparent 70%)', delay: 2, duration: 22, initialX: '20%', initialY: '85%', showOnMobile: false },
              { size: 500, color: 'radial-gradient(circle, rgba(217, 176, 206, 0.5) 0%, rgba(217, 176, 206, 0.2) 15%, rgba(217, 176, 206, 0.08) 30%, rgba(217, 176, 206, 0.02) 50%, transparent 70%)', delay: 4, duration: 16, initialX: '95%', initialY: '70%', showOnMobile: false },
              { size: 750, color: 'radial-gradient(circle, rgba(107, 44, 109, 0.4) 0%, rgba(107, 44, 109, 0.15) 15%, rgba(107, 44, 109, 0.05) 30%, rgba(107, 44, 109, 0.01) 50%, transparent 70%)', delay: 1, duration: 28, initialX: '10%', initialY: '60%', showOnMobile: false },
              // Mobile bubbles (3 smaller bubbles)
              { size: 300, color: 'radial-gradient(circle, rgba(166, 41, 133, 0.4) 0%, rgba(166, 41, 133, 0.2) 15%, rgba(166, 41, 133, 0.08) 30%, rgba(166, 41, 133, 0.02) 50%, transparent 70%)', delay: 0, duration: 15, initialX: '20%', initialY: '20%', showOnMobile: true },
              { size: 250, color: 'radial-gradient(circle, rgba(217, 176, 206, 0.3) 0%, rgba(217, 176, 206, 0.15) 15%, rgba(217, 176, 206, 0.05) 30%, rgba(217, 176, 206, 0.01) 50%, transparent 70%)', delay: 2, duration: 12, initialX: '70%', initialY: '60%', showOnMobile: true },
              { size: 200, color: 'radial-gradient(circle, rgba(107, 44, 109, 0.3) 0%, rgba(107, 44, 109, 0.15) 15%, rgba(107, 44, 109, 0.05) 30%, rgba(107, 44, 109, 0.01) 50%, transparent 70%)', delay: 4, duration: 10, initialX: '50%', initialY: '80%', showOnMobile: true }
            ].map((bubble, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full ${bubble.showOnMobile ? 'block md:hidden' : 'hidden md:block'}`}
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  background: bubble.color,
                  left: bubble.initialX,
                  top: bubble.initialY,
                  zIndex: 5,
                  filter: 'blur(80px)',
                  opacity: 0.7,
                  willChange: 'transform',
                }}
                animate={{
                  x: [0, 200, -150, 100, -50, 0],
                  y: [0, -200, 150, -100, 50, 0],
                  scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
                  rotate: [0, 45, 90, 135, 180, 0],
                }}
                transition={{
                  duration: bubble.duration,
                  delay: bubble.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center max-w-4xl bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-border/10 mx-4">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Enterprise Resource Planning Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance font-heading">
            Your business deserves more than tools
            <span className="text-primary"> it deserves a partner.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto font-body">
            Streamline operations, boost productivity, and drive growth with our
            comprehensive ERP solutions designed for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section id="solutions" className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              What We Solve as ERP
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our ERP solutions address the core challenges businesses face in
              today&apos;s competitive landscape
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2 group-hover:text-white transition-colors duration-500" />
                <CardTitle className="group-hover:text-white transition-colors duration-500">Fragmented Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                  Unify all your business data in one centralized platform for
                  better decision-making and insights.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2 group-hover:text-white transition-colors duration-500" />
                <CardTitle className="group-hover:text-white transition-colors duration-500">Manual Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                  Automate repetitive tasks and workflows to increase efficiency
                  and reduce human error.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2 group-hover:text-white transition-colors duration-500" />
                <CardTitle className="group-hover:text-white transition-colors duration-500">Compliance Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                  Ensure regulatory compliance with built-in controls and
                  automated reporting features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ERP services tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ERP Implementation",
                desc: "Full-scale ERP deployment with minimal disruption to your operations",
              },
              {
                title: "System Integration",
                desc: "Seamlessly connect your existing systems with our ERP platform",
              },
              {
                title: "Custom Development",
                desc: "Tailored modules and features to meet your unique requirements",
              },
              {
                title: "Training & Support",
                desc: "Comprehensive training programs and 24/7 technical support",
              },
              {
                title: "Data Migration",
                desc: "Secure and accurate transfer of your existing data to the new system",
              },
              {
                title: "Maintenance",
                desc: "Ongoing system maintenance and updates to ensure optimal performance",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized ERP solutions for diverse industry verticals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Manufacturing",
              "Healthcare",
              "Retail",
              "Construction",
              "Education",
              "Finance",
              "Logistics",
              "Real Estate",
            ].map((industry, index) => (
              <Card
                key={index}
                className={`text-center p-6 border-border/50 hover:shadow-lg transition-all duration-300 ${
                  hoveredIndustry !== null && hoveredIndustry !== index 
                    ? "opacity-30" 
                    : "opacity-100"
                }`}
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <CardContent className="p-0">
                  <h3 className="font-semibold">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful ERP modules to streamline every aspect of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Financial Management",
                features: ["Accounting", "Budgeting", "Financial Reporting"],
              },
              {
                name: "Supply Chain",
                features: ["Inventory", "Procurement", "Vendor Management"],
              },
              {
                name: "Human Resources",
                features: [
                  "Payroll",
                  "Employee Records",
                  "Performance Management",
                ],
              },
              {
                name: "Customer Management",
                features: ["CRM", "Sales Tracking", "Customer Support"],
              },
              {
                name: "Project Management",
                features: [
                  "Task Tracking",
                  "Resource Planning",
                  "Time Management",
                ],
              },
              {
                name: "Business Intelligence",
                features: ["Analytics", "Dashboards", "Reporting"],
              },
            ].map((product, index) => (
              <Card
                key={index}
                className={`border-border/50 hover:shadow-lg transition-all duration-300 ${
                  hoveredProduct !== null && hoveredProduct !== index 
                    ? "opacity-30" 
                    : "opacity-100"
                }`}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ERPFlow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages that set us apart from the competition
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: "Cloud-Native Architecture",
                  desc: "Scalable, secure, and accessible from anywhere",
                },
                {
                  title: "Real-time Analytics",
                  desc: "Make data-driven decisions with live insights",
                },
                {
                  title: "Mobile-First Design",
                  desc: "Access your ERP on any device, anytime",
                },
              ].map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className=" mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "99.9% Uptime Guarantee",
                  desc: "Reliable performance you can count on",
                },
                {
                  title: "Advanced Security",
                  desc: "Enterprise-grade security and data protection",
                },
                {
                  title: "Rapid Implementation",
                  desc: "Get up and running in weeks, not months",
                },
              ].map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className=" mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our ERP solutions
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                How long does ERP implementation take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Implementation time varies based on company size and complexity,
                but typically ranges from 3-6 months for small to medium
                businesses and 6-12 months for larger enterprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Is training included in the package?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provide comprehensive training for all users, including
                administrators and end-users. Training includes online sessions,
                documentation, and ongoing support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Can the system integrate with existing software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Our ERP solution offers robust integration
                capabilities with popular business applications, accounting
                software, and third-party systems through APIs and connectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                What kind of support do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer 24/7 technical support, regular system updates,
                maintenance, and dedicated customer success managers to ensure
                your ERP system runs smoothly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your business? Contact us today for a
            consultation and discover how our ERP solutions can help you
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
