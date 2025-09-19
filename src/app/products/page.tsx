"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Users,
  ClipboardList,
  UserCheck,
  PieChart,
  Truck,
  Wifi,
  Leaf,
  ShieldCheck,
  HardHat,
  Archive,
  PackageCheck,
  CreditCard,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedMetric } from "@/components/animated-metric";
import Link from "next/link";
import { useTheme } from "@/contexts/theme-context";

const products = [
  {
    name: "Supply Chain Management",
    description: "Optimize procurement, inventory, and vendor relationships",
    features: [
      "Inventory Control",
      "Procurement",
      "Order Management",
      "Vendor Management",
      "Warehouse Management",
    ],
    icon: Truck, // lucide-react
    category: "Operations",
  },

  {
    name: "Customer Relationship Management",
    description: "Streamline customer interactions and sales processes",
    features: [
      "Lead & Opportunity Tracking",
      "Quotations & Sales Orders",
      "Customer Support",
      "Marketing Campaigns",
      "Contact Management",
    ],
    icon: UserCheck, // lucide-react
    category: "Operations",
  },

  {
    name: "Business Intelligence",
    description: "Turn raw data into actionable insights",
    features: [
      "Dashboards",
      "KPIs & Metrics",
      "Custom Reports",
      "Predictive Analytics",
      "Data Visualization",
    ],
    icon: PieChart, // lucide-react
    category: "Analytics",
  },
  {
    name: "IoT & Smart Operations",
    description:
      "Connect devices, sensors, and machines directly with your ERP for real-time visibility and automation",
    features: [
      "Device & Sensor Integration",
      "Real-time Data Collection",
      "Predictive Maintenance",
      "Energy Monitoring",
      "Automated Alerts & Workflows",
    ],
    icon: Wifi, // lucide-react
    category: "Analytics",
  },
  {
    name: "Finance & Accounting",
    description: "Manage invoices, expenses, cash flow, and audits efficiently",
    features: [
      // "Invoice processing in 1 day",
      "GST/TDS filing with fewer errors 90%",
      // "Bank reconciliation automation",
      // "Faster monthly closing",
      "Expense tracking with visibility 30%",
      "Accurate cash flow forecasting 25%",
      "Reduced budget variance 15%",
      "Faster audit preparation 25%",
      // "Duplicate payment prevention",
      "Improved working capital efficiency 20%",
    ],
    icon: CreditCard,
    category: "Finance",
  },
  {
    name: "Sales & CRM",
    description: "Enhance customer relationships and sales performance",
    features: [
      "Lead conversion growth 25%",
      "Faster quotation turnaround 60%",
      "Shorter sales cycle 20%",
      "Faster customer response 40%",
      "Lower customer acquisition cost 15%",
      "Upsell/cross-sell ratio 15%",
      "Average deal size growth 10%",
      "Improved customer retention 12%",
      "Sales forecast accuracy 20%",
      "Better win/loss ratio 18%",
    ],
    icon: UserCheck,
    category: "Finance",
  },
  {
    name: "Purchase & Vendor Management",
    description: "Streamline procurement and vendor relationships",
    features: [
      "Shorter procurement cycle 40%",
      "Improved vendor on-time delivery 25%",
      "Faster purchase order approvals 30%",
      "Cost savings via vendor bidding 15%",
      "Reduced bill/payment mismatches 20%",
      "Higher supplier satisfaction 15%",
      "Reduced emergency purchases 30%",
      "Lower supplier rejection rate 20%",
      "Lower purchase price variance 12%",
      "contract compliance 100% ",
    ],
    icon: PackageCheck,
    category: "Manufacturing",
  },
  {
    name: "Inventory & Warehouse",
    description: "Optimize inventory, warehouse space, and stock accuracy",
    features: [
      "High stock accuracy 98%",
      "Reduced dead stock value 30%",
      "Order fulfillment accuracy 99%",
      "Better warehouse space utilization 20%",
      "Lower inventory carrying cost 15%",
      "Fewer stock-out incidents 50%",
      "Reduced shrinkage/theft 25%",
      "Improved inventory turnover 15%",
      "Accurate reorder levels 20%",
      "Cycle count variance 2%",
    ],
    icon: Archive,
    category: "Manufacturing",
  },
  {
    name: "Manufacturing",
    description: "Increase production efficiency and reduce waste",
    features: [
      // "Bill of Materials (BOM)",
      // "Work Orders",
      // "Production Planning",
      // "Shop Floor Control",
      // "Quality Management",
      "Shorter production lead time 30%",
      "Higher machine utilization 20%",
      "Reduced raw material wastage 15%",
      "Faster work order completion 25%",
      "Higher on-time delivery 18%",
      "Lower cost per unit 10%",
      "Improved labor productivity 15%",
      "Higher capacity utilization 20%",
      "Fewer rework/rejection defects 25%",
      "Reduced downtime hours 30%",
    ],
    icon: HardHat,
    category: "Manufacturing",
  },
  {
    name: "Human Resources",
    description:
      "Manage payroll, attendance, recruitment, and employee satisfaction",
    features: [
      "Faster payroll processing 70%",
      "Attendance accuracy 95%",
      "Shorter recruitment cycle 30%",
      "Lower employee turnover 10%",
      "Higher training participation 20%",
      "Improved employee satisfaction 15%",
      "Faster leave approval 50%",
      "appraisal completion 100% ",
      "Lower overtime cost 10%",
      "Faster HR service ticket resolution 40%",
    ],
    icon: Users,
    category: "HR",
  },
  {
    name: "Projects",
    description: "Plan, track, and deliver projects efficiently",
    features: [
      "Fewer project delivery delays 35%",
      "Better resource utilization 20%",
      "Lower budget variance 25%",
      "Improved timesheet accuracy 30%",
      "Higher billing accuracy 25%",
      "Better milestone achievement 15%",
      "Higher project profitability 12%",
      "Shorter project cycle 20%",
      "Improved client satisfaction 10%",
      "Faster change request handling 20%",
    ],
    icon: ClipboardList,
    category: "Projects",
  },
  {
    name: "Quality Control",
    description: "Ensure product quality and compliance with standards",
    features: [
      "Lower rejection rate 20%",
      "Fewer customer complaints 50%",
      "inspection compliance 100% ",
      "Faster NCR resolution 40%",
      "Fewer repeat defects 50%",
      "compliant quarantine stock handling 100% ",
      "quality audit success 100% ",
      "Lower supplier defect rate 20%",
      "Higher first pass yield 15%",
      "Fewer warranty claims 25%",
    ],
    icon: ShieldCheck,
    category: "Manufacturing",
  },
  {
    name: "Agriculture & IoT",
    description:
      "Leverage IoT and ERP for smarter farming, greenhouse, and agri-operations.",
    features: [
      "Less water usage & more fertilizer efficiency 40%",
      "Higher crop yield per acre 25%",
      "Faster farm-to-market logistics 20%",
      "traceability & compliance readiness 100% ",
    ],
    icon: Leaf,
    category: "IoT + Agriculture ERP",
  },
];

// Function to extract percentage and calculate metrics
const extractMetricsFromFeatures = (features: string[]) => {
  return features.map(feature => {
    // Extract percentage from feature text
    const percentageMatch = feature.match(/(\d+)%/);
    if (percentageMatch) {
      const newValue = parseInt(percentageMatch[1]);
      const oldValue = Math.round(newValue * (0.5 + Math.random() * 0.1)); // 50-60% of new value
      const improvement = Math.round(((newValue - oldValue) / oldValue) * 100);
      
      return {
        name: feature.replace(/\s*\d+%/, '').trim(),
        oldValue,
        newValue,
        improvement: Math.max(improvement, 1) // Ensure positive growth
      };
    }
    return feature; // Return as string if no percentage found
  });
};

const categories = [
  "All",
  "Finance",
  "Operations",
  "HR",
  "Analytics",
  "IoT + Agriculture ERP",
  "Manufacturing",
  "Projects",
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { theme } = useTheme();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Products
          </Badge>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-balance">
            Powerful ERP <span className="text-primary">Modules</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Comprehensive ERP modules designed to streamline every aspect of
            your business operations. Choose the modules you need or get the
            complete suite.
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
                className={`mb-2 ${
                  category === selectedCategory || theme === "dark"
                    ? "text-white"
                    : "text-black"
                }`}
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
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => {
              const IconComponent = product.icon;
              const processedFeatures = extractMetricsFromFeatures(product.features);
              const hasMetrics = processedFeatures.some(feature => typeof feature === 'object');

              return (
                <Card
                  key={`${product.category}-${index}`}
                  className="group hover:shadow-lg transition-all duration-500 border border-primary/20 hover:border-primary hover:scale-105 bg-card/50 backdrop-blur overflow-hidden relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                        <IconComponent className="h-6 w-6 text-gray-500 group-hover:text-primary transition-colors duration-500" />
                      </div>
                      <Badge
                        variant="default"
                        className="group-hover:bg-primary/20 text-white group-hover:text-primary transition-colors duration-500 "
                      >
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground transition-colors duration-500">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {hasMetrics ? (
                      <div className="space-y-4">
                        {/* Mobile: Always show all details */}
                        <div className="block md:hidden">
                          {processedFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex}>
                              {typeof feature === "object" ? (
                                <AnimatedMetric
                                  feature={feature}
                                  isHovered={true}
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

                        {/* Desktop: Hover-based display */}
                        <div className="hidden md:block relative min-h-[280px]">
                          {/* Default state - simple features list */}
                          <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                            <div className="space-y-3">
                              {processedFeatures.slice(0, 8).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-3">
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">
                                    {typeof feature === "object" ? feature.name : feature}
                                  </span>
                                </div>
                              ))}
                              {processedFeatures.length > 8 && (
                                <div className="text-xs text-muted-foreground/60 italic">
                                  +{processedFeatures.length - 8} more metrics...
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Hover state - detailed metrics with animations and scroll */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent pr-2">
                              <div className="space-y-4 pb-2">
                                {processedFeatures.map((feature, featureIndex) => (
                                  <div key={featureIndex}>
                                    {typeof feature === "object" ? (
                                      <AnimatedMetric feature={feature} isHovered={hoveredCard === index} />
                                    ) : (
                                      <div className="flex items-center space-x-3">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {processedFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {typeof feature === "string" ? feature : feature.name}
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
        </div>
      </section>

      {/* Enterprise Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Complete Enterprise Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get all modules in one integrated platform with advanced features
              and enterprise-grade security
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Why Choose Our Complete Suite?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Seamless Integration",
                    desc: "All modules work together seamlessly with shared data and workflows",
                  },
                  {
                    title: "Unified Dashboard",
                    desc: "Single dashboard to manage all aspects of your business",
                  },
                  {
                    title: "Advanced Security",
                    desc: "Enterprise-grade security with role-based access control",
                  },
                  {
                    title: "24/7 Support",
                    desc: "Dedicated support team and comprehensive documentation",
                  },
                  {
                    title: "Scalable Architecture",
                    desc: "Grows with your business from startup to enterprise",
                  },
                  {
                    title: "Custom Development",
                    desc: "Tailored solutions for your specific business needs",
                  },
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{advantage.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {advantage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Enterprise Suite
                </CardTitle>
                <CardDescription>
                  Complete ERP solution with all modules
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary mb-2">
                    Profitable Package
                  </div>

                  <div className="text-sm text-muted-foreground mt-2">
                    Complete enterprise solution
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>All {products.length} Modules</span>
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

                <Button
                  asChild
                  className="w-full bg-secondary/80 text-white"
                  size="lg"
                >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a free trial and see how our ERP modules can streamline
            your operations
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
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
  );
}
