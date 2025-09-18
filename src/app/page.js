"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useTheme } from "@/contexts/theme-context";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  CreditCard,
  UserCheck,
  HardHat,
  Users,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { AnimatedMetric } from "@/components/animated-metric";
import Link from "next/link";

export default function ERPCompanyWebsite() {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { theme } = useTheme();

  // Memoized bubble colors based on theme
  const colors = useMemo(() => {
    if (theme === "dark") {
      return {
        primary: "rgba(217, 176, 206, 0.6)", // Softer pink for dark theme
        secondary: "rgba(166, 41, 133, 0.5)", // Softer magenta for dark theme
        accent: "rgba(107, 44, 109, 0.4)", // Softer accent for dark theme
      };
    } else {
      return {
        primary: "rgba(166, 41, 133, 0.8)", // Bright magenta for light theme
        secondary: "rgba(217, 176, 206, 0.8)", // Bright pink for light theme
        accent: "rgba(107, 44, 109, 0.8)", // Bright accent for light theme
      };
    }
  }, [theme]);

  // Hover handling functions for products - simplified like services
  const handleProductMouseEnter = useCallback((index) => {
    setHoveredProduct(index);
  }, []);

  const handleProductMouseLeave = useCallback(() => {
    setHoveredProduct(null);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Bubbles */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Blur Bubbles Container - Only in Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 md:-inset-4 lg:-inset-8 xl:-inset-12">
            {/* Actual Blur Bubbles - More bubbles for desktop, optimized for mobile */}
            {[
              // Desktop bubbles (12 balanced bright bubbles for even distribution)
              // Left side bubbles (6 bubbles)
              {
                size: 600,
                color: `radial-gradient(circle, ${
                  colors.primary
                } 0%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.5)"
                )} 15%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.25)"
                )} 30%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.08)"
                )} 50%, transparent 70%)`,
                delay: 0,
                duration: 20,
                initialX: "10%",
                initialY: "15%",
                showOnMobile: false,
              },
              {
                size: 550,
                color: `radial-gradient(circle, ${
                  colors.accent
                } 0%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.5)"
                )} 15%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.25)"
                )} 30%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.08)"
                )} 50%, transparent 70%)`,
                delay: 6,
                duration: 18,
                initialX: "25%",
                initialY: "70%",
                showOnMobile: false,
              },
              {
                size: 650,
                color: `radial-gradient(circle, ${
                  colors.primary
                } 0%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.4)"
                )} 15%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.2)"
                )} 30%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.06)"
                )} 50%, transparent 70%)`,
                delay: 2,
                duration: 22,
                initialX: "15%",
                initialY: "85%",
                showOnMobile: false,
              },
              {
                size: 400,
                color: `radial-gradient(circle, ${
                  colors.secondary
                } 0%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.5)"
                )} 15%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.25)"
                )} 30%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.08)"
                )} 50%, transparent 70%)`,
                delay: 8,
                duration: 14,
                initialX: "30%",
                initialY: "35%",
                showOnMobile: false,
              },
              {
                size: 500,
                color: `radial-gradient(circle, ${
                  colors.accent
                } 0%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.4)"
                )} 15%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.2)"
                )} 30%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.06)"
                )} 50%, transparent 70%)`,
                delay: 14,
                duration: 18,
                initialX: "20%",
                initialY: "50%",
                showOnMobile: false,
              },
              {
                size: 350,
                color: `radial-gradient(circle, ${
                  colors.primary
                } 0%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.35)"
                )} 15%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.15)"
                )} 30%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.04)"
                )} 50%, transparent 70%)`,
                delay: 12,
                duration: 12,
                initialX: "5%",
                initialY: "40%",
                showOnMobile: false,
              },
              // Right side bubbles (6 bubbles)
              {
                size: 700,
                color: `radial-gradient(circle, ${
                  colors.secondary
                } 0%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.5)"
                )} 15%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.25)"
                )} 30%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.08)"
                )} 50%, transparent 70%)`,
                delay: 3,
                duration: 25,
                initialX: "90%",
                initialY: "20%",
                showOnMobile: false,
              },
              {
                size: 500,
                color: `radial-gradient(circle, ${
                  colors.accent
                } 0%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.5)"
                )} 15%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.25)"
                )} 30%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.08)"
                )} 50%, transparent 70%)`,
                delay: 4,
                duration: 16,
                initialX: "85%",
                initialY: "75%",
                showOnMobile: false,
              },
              {
                size: 750,
                color: `radial-gradient(circle, ${
                  colors.primary
                } 0%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.4)"
                )} 15%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.2)"
                )} 30%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.06)"
                )} 50%, transparent 70%)`,
                delay: 1,
                duration: 28,
                initialX: "95%",
                initialY: "60%",
                showOnMobile: false,
              },
              {
                size: 450,
                color: `radial-gradient(circle, ${
                  colors.secondary
                } 0%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.5)"
                )} 15%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.25)"
                )} 30%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.08)"
                )} 50%, transparent 70%)`,
                delay: 10,
                duration: 16,
                initialX: "75%",
                initialY: "45%",
                showOnMobile: false,
              },
              {
                size: 380,
                color: `radial-gradient(circle, ${
                  colors.accent
                } 0%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.4)"
                )} 15%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.2)"
                )} 30%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.06)"
                )} 50%, transparent 70%)`,
                delay: 16,
                duration: 14,
                initialX: "80%",
                initialY: "85%",
                showOnMobile: false,
              },
              {
                size: 420,
                color: `radial-gradient(circle, ${
                  colors.primary
                } 0%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.35)"
                )} 15%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.15)"
                )} 30%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.04)"
                )} 50%, transparent 70%)`,
                delay: 18,
                duration: 16,
                initialX: "70%",
                initialY: "10%",
                showOnMobile: false,
              },
              // Mobile bubbles (3 smaller bubbles for performance)
              {
                size: 300,
                color: `radial-gradient(circle, ${
                  colors.primary
                } 0%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.2)"
                )} 15%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.08)"
                )} 30%, ${colors.primary.replace(
                  /[\d.]+\)$/g,
                  "0.02)"
                )} 50%, transparent 70%)`,
                delay: 0,
                duration: 15,
                initialX: "20%",
                initialY: "20%",
                showOnMobile: true,
              },
              {
                size: 250,
                color: `radial-gradient(circle, ${
                  colors.secondary
                } 0%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.15)"
                )} 15%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.05)"
                )} 30%, ${colors.secondary.replace(
                  /[\d.]+\)$/g,
                  "0.01)"
                )} 50%, transparent 70%)`,
                delay: 2,
                duration: 12,
                initialX: "70%",
                initialY: "60%",
                showOnMobile: true,
              },
              {
                size: 200,
                color: `radial-gradient(circle, ${
                  colors.accent
                } 0%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.15)"
                )} 15%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.05)"
                )} 30%, ${colors.accent.replace(
                  /[\d.]+\)$/g,
                  "0.01)"
                )} 50%, transparent 70%)`,
                delay: 4,
                duration: 10,
                initialX: "50%",
                initialY: "80%",
                showOnMobile: true,
              },
            ].map((bubble, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full ${
                  bubble.showOnMobile ? "block md:hidden" : "hidden md:block"
                }`}
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  background: bubble.color,
                  left: bubble.initialX,
                  top: bubble.initialY,
                  zIndex: 5,
                  filter: "blur(80px)",
                  opacity: 0.9,
                  willChange: "transform",
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
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-balance font-heading">
            Your business deserves more than tools
            <p className="text-primary"> it deserves a </p>
            <p className="text-primary font-black text-4xl md:text-6xl">
              companion.
            </p>
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
            {/* <Button size="lg" variant="outline">
              Watch Demo
            </Button> */}
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section id="solutions" className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-heading">
              What We Solve as ERP
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our ERP solutions address the core challenges businesses face in
              today&apos;s competitive landscape
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105  hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2 group-hover:text-white transition-colors duration-500" />
                <CardTitle className="group-hover:text-white transition-colors duration-500">
                  Fragmented Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                  Unify all your business data in one centralized platform for
                  better decision-making and insights.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105  hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2 group-hover:text-white transition-colors duration-500" />
                <CardTitle className="group-hover:text-white transition-colors duration-500">
                  Manual Processes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                  Automate repetitive tasks and workflows to increase efficiency
                  and reduce human error.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105  hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2 group-hover:text-white transition-colors duration-500" />
                <CardTitle className="group-hover:text-white transition-colors duration-500">
                  Compliance Issues
                </CardTitle>
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
      <Services />

      {/* Industries Section
      <section id="industries" className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
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
              "Technology & Services",
              "Agriculture & Allied",
            ].map((industry, index) => (
              <Card
                key={index}
                className={`text-center font-semibold p-6 border-border/50 hover:shadow-lg transition-all duration-300 ${
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
      </section> */}

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful ERP modules to streamline every aspect of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Finance & Accounting",
                description:
                  "Streamline your financial operations with automated processes",
                icon: CreditCard,
                features: [
                  {
                    name: "Invoice processing time",
                    oldValue: 7,
                    newValue: 1,
                    improvement: 85,
                  },
                  {
                    name: "GST/TDS filing accuracy",
                    oldValue: 75,
                    newValue: 98,
                    improvement: 23,
                  },
                  {
                    name: "Bank reconciliation speed",
                    oldValue: 40,
                    newValue: 90,
                    improvement: 50,
                  },
                  {
                    name: "Monthly closing time",
                    oldValue: 15,
                    newValue: 3,
                    improvement: 80,
                  },
                  {
                    name: "Expense tracking visibility",
                    oldValue: 30,
                    newValue: 95,
                    improvement: 65,
                  },
                ],
                hasMetrics: true,
              },
              {
                name: "Sales & CRM",
                description:
                  "Boost your sales performance with intelligent customer management",
                icon: UserCheck,
                features: [
                  {
                    name: "Lead conversion growth",
                    oldValue: 15,
                    newValue: 43,
                    improvement: 28,
                  },
                  {
                    name: "Faster quotation turnaround",
                    oldValue: 20,
                    newValue: 80,
                    improvement: 60,
                  },
                  {
                    name: "Shorter sales cycle",
                    oldValue: 45,
                    newValue: 65,
                    improvement: 20,
                  },
                  {
                    name: "Faster customer response",
                    oldValue: 30,
                    newValue: 75,
                    improvement: 45,
                  },
                  {
                    name: "Lower customer acquisition cost",
                    oldValue: 70,
                    newValue: 85,
                    improvement: 15,
                  },
                ],
                hasMetrics: true,
              },
              {
                name: "Manufacturing",
                description:
                  "Optimize production processes and quality control",
                icon: HardHat,
                features: [
                  {
                    name: "Production efficiency",
                    oldValue: 65,
                    newValue: 88,
                    improvement: 23,
                  },
                  {
                    name: "Work order completion",
                    oldValue: 70,
                    newValue: 95,
                    improvement: 25,
                  },
                  {
                    name: "Production planning accuracy",
                    oldValue: 55,
                    newValue: 85,
                    improvement: 30,
                  },
                  {
                    name: "Shop floor visibility",
                    oldValue: 40,
                    newValue: 90,
                    improvement: 50,
                  },
                  {
                    name: "Quality management score",
                    oldValue: 75,
                    newValue: 96,
                    improvement: 21,
                  },
                ],
                hasMetrics: true,
              },
              {
                name: "Human Resources",
                description:
                  "Manage your workforce efficiently with automated HR processes",
                icon: Users,
                features: [
                  {
                    name: "Employee record accuracy",
                    oldValue: 70,
                    newValue: 98,
                    improvement: 28,
                  },
                  {
                    name: "Appraisal completion rate",
                    oldValue: 60,
                    newValue: 95,
                    improvement: 35,
                  },
                  {
                    name: "Employee satisfaction",
                    oldValue: 65,
                    newValue: 88,
                    improvement: 23,
                  },
                  {
                    name: "Leave approval speed",
                    oldValue: 48,
                    newValue: 2,
                    improvement: 96,
                  },
                  {
                    name: "Overtime cost reduction",
                    oldValue: 25,
                    newValue: 75,
                    improvement: 50,
                  },
                ],
                hasMetrics: true,
              },
              {
                name: "Projects",
                description:
                  "Deliver projects on time with better resource management",
                icon: ClipboardList,
                features: [
                  {
                    name: "Project completion rate",
                    oldValue: 70,
                    newValue: 92,
                    improvement: 22,
                  },
                  {
                    name: "Resource allocation efficiency",
                    oldValue: 55,
                    newValue: 85,
                    improvement: 30,
                  },
                  {
                    name: "Project delivery timeline",
                    oldValue: 60,
                    newValue: 88,
                    improvement: 28,
                  },
                  {
                    name: "Resource utilization",
                    oldValue: 65,
                    newValue: 90,
                    improvement: 25,
                  },
                  {
                    name: "Budget adherence",
                    oldValue: 75,
                    newValue: 94,
                    improvement: 19,
                  },
                ],
                hasMetrics: true,
              },
              {
                name: "Quality Control",
                description:
                  "Maintain high standards with comprehensive quality management",
                icon: ShieldCheck,
                features: [
                  {
                    name: "Rejection rate reduction",
                    oldValue: 15,
                    newValue: 3,
                    improvement: 80,
                  },
                  {
                    name: "Customer complaint reduction",
                    oldValue: 25,
                    newValue: 5,
                    improvement: 80,
                  },
                  {
                    name: "Inspection compliance",
                    oldValue: 80,
                    newValue: 98,
                    improvement: 18,
                  },
                  {
                    name: "NCR resolution speed",
                    oldValue: 40,
                    newValue: 85,
                    improvement: 45,
                  },
                  {
                    name: "Defect prevention",
                    oldValue: 60,
                    newValue: 92,
                    improvement: 32,
                  },
                ],
                hasMetrics: true,
              },
            ].map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-500 border border-primary/20 hover:border-primary hover:scale-105 bg-card/50 backdrop-blur overflow-hidden relative"
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                   <CardHeader className="pb-4">
                     <div className="flex items-center space-x-3 mb-4">
                       <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                         <IconComponent className="h-6 w-6 text-gray-500 group-hover:text-primary transition-colors duration-500" />
                       </div>
                       <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                         {product.name}
                       </CardTitle>
                     </div>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                       {product.description}
                     </p>
                   </CardHeader>
                  <CardContent className="pt-0">
                    {product.hasMetrics ? (
                      <div className="relative min-h-[280px]">
                        {/* Default state - simple features list */}
                        <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                          <div className="space-y-3">
                            {product.features
                              .slice(0, 5)
                              .map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center space-x-3"
                                >
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">
                                    {typeof feature === "object"
                                      ? feature.name
                                      : feature}
                                  </span>
                                </div>
                              ))}
                            {product.features.length > 5 && (
                              <div className="text-xs text-muted-foreground/60 italic">
                                +{product.features.length - 5} more metrics...
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Hover state - detailed metrics with animations and scroll */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent pr-2">
                            <div className="space-y-4 pb-2">
                              {product.features.map((feature, featureIndex) => (
                                <div key={featureIndex}>
                                  {typeof feature === "object" ? (
                                    <AnimatedMetric
                                      feature={feature}
                                      isHovered={hoveredProduct === index}
                                    />
                                  ) : (
                                    <div className="flex items-center space-x-3">
                                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                      <span className="text-sm text-muted-foreground">
                                        {feature}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {typeof feature === "string"
                                ? feature
                                : feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary bg-tranhover:bg-primary  hover:text-white"
            >
              <Link href="/products">
                Explore More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why Choose ERPFlow
            </h2>
            <p className="text-lg text-primary-foreground max-w-2xl mx-auto">
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
                    <CheckCircle className="h-5 w-5 text-white" />
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
                    <CheckCircle className="h-5 w-5 text-white" />
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our ERP solutions
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How long does ERP implementation take?",
                answer:
                  "With our config-first approach, most businesses go live in 4–8 weeks. Larger, multi-location setups may take longer, but we ensure measurable progress from week one.",
              },
              {
                question: "Is training included in the package?",
                answer:
                  "Yes. We provide role-based training for your team, along with simple guides and video sessions. Our aim is to make ERP adoption zero-confusion for daily users.",
              },
              {
                question: "Can the system integrate with existing software?",
                answer:
                  "Absolutely. Our ERP connects with accounting tools, WhatsApp, payment gateways, IoT devices, and custom apps through APIs and middleware. We focus on smooth transitions, not forcing replacements.",
              },
              {
                question: "What kind of support do you provide?",
                answer:
                  "We offer continuous companionship — WhatsApp support, remote assistance, and on-site visits (if needed). Our job doesn’t end at go-live; we evolve the system with your business.",
              },
              {
                question: "Is ERP suitable for MSMEs?",
                answer:
                  "Yes. Our solutions are MSME-first, with affordable pricing, simple interfaces, and compliance (GST, e-invoicing, DPDP Act) built in.",
              },
              {
                question: "Will my data be secure?",
                answer:
                  "Yes. We ensure enterprise-grade security with cloud backups, role-based access, and data encryption — the same standards used by large enterprises.",
              },
              {
                question: "Do you provide industry-specific modules?",
                answer:
                  "Yes. We offer Agriculture, Manufacturing, Trading, and Service-focused ERP modules, with KPIs tailored to each sector.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
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
            {/* <Button size="lg" variant="outline">
              Schedule Demo
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
