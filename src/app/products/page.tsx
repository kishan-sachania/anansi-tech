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
  BarChart3,
  Factory,
  ClipboardList,
  UserCheck,
  PieChart,
  Truck,
  Wifi,
  Leaf,
  Banknote,
  Handshake,
  ShoppingCart,
  Package,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useTheme } from "@/contexts/theme-context";


const products = [
  {
    name: "Financial Management",
    description:
      "Comprehensive financial tools for accounting, budgeting, and reporting",
    features: [
      "General Ledger",
      "Accounts Payable/Receivable",
      "Budget Planning",
      "Financial Reporting",
      "Tax Management",
    ],
    icon: BarChart3, // lucide-react
    category: "Finance",
  },
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
    name: "Human Resources",
    description: "Manage your workforce with ease and transparency",
    features: [
      "Employee Records",
      "Payroll Processing",
      "Leave & Attendance",
      "Performance Reviews",
      "Recruitment Management",
    ],
    icon: Users, // lucide-react
    category: "HR",
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
    category: "Sales & CRM",
  },
  {
    name: "Project Management",
    description: "Plan, track, and deliver projects efficiently",
    features: [
      "Task Management",
      "Gantt Charts",
      "Resource Allocation",
      "Time Tracking",
      "Collaboration Tools",
    ],
    icon: ClipboardList, // lucide-react
    category: "Projects",
  },
  {
    name: "Manufacturing",
    description: "End-to-end production management for manufacturers",
    features: [
      "Bill of Materials (BOM)",
      "Work Orders",
      "Production Planning",
      "Shop Floor Control",
      "Quality Management",
    ],
    icon: Factory, // lucide-react (or replace with Package if Factory not available)
    category: "Manufacturing",
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
    description: "Automate financial operations and improve accuracy across accounting processes.",
    features: [
      "Faster invoice processing & monthly closing",
      "Accurate GST/TDS filing & audit readiness",
      "80% less manual work in reconciliations",
      "Better cash flow forecasting & working capital efficiency",
    ],
    icon: Banknote,
    category: "ERP",
  },
  {
    name: "Sales & CRM",
    description: "Boost sales effectiveness and customer engagement with integrated CRM.",
    features: [
      "25% higher lead conversion",
      "60% faster quotation turnaround",
      "20% shorter sales cycle",
      "Improved retention & upsell opportunities",
    ],
    icon: Handshake,
    category: "ERP",
  },
  {
    name: "Purchase & Vendor Management",
    description: "Streamline procurement cycles and strengthen supplier relationships.",
    features: [
      "40% shorter procurement cycle",
      "30% faster approvals",
      "Better cost savings via bidding",
      "Higher vendor reliability & compliance",
    ],
    icon: ShoppingCart,
    category: "ERP",
  },
  {
    name: "Inventory & Warehouse",
    description: "Enhance inventory visibility and reduce stock-related losses.",
    features: [
      "98% stock accuracy",
      "30% lower dead stock value",
      "15% lower carrying costs",
      "50% fewer stock-out incidents",
    ],
    icon: Package,
    category: "ERP",
  },
  {
    name: "Manufacturing",
    description: "Optimize production efficiency and resource utilization.",
    features: [
      "30% shorter production lead time",
      "20% higher machine & labor productivity",
      "15% less raw material wastage",
      "25% fewer defects & reworks",
    ],
    icon: Factory,
    category: "ERP",
  },
  {
    name: "Human Resources",
    description: "Simplify HR management and improve workforce satisfaction.",
    features: [
      "70% faster payroll processing",
      "30% shorter recruitment cycle",
      "Higher employee satisfaction & retention",
      "50% faster leave approvals & service requests",
    ],
    icon: Users,
    category: "ERP",
  },
  {
    name: "Projects",
    description: "Deliver projects on time and within budget with complete visibility.",
    features: [
      "35% fewer delivery delays",
      "20% higher resource utilization",
      "25% reduction in budget variance",
      "More accurate timesheets & billing",
    ],
    icon: ClipboardList,
    category: "ERP",
  },
  {
    name: "Quality Control",
    description: "Ensure consistent product quality and compliance across operations.",
    features: [
      "20% lower rejection rates",
      "50% fewer complaints & repeat defects",
      "100% inspection & audit compliance",
      "Faster NCR resolution & improved FPY",
    ],
    icon: ShieldCheck,
    category: "ERP",
  },
  {
    name: "Agriculture & IoT",
    description: "Leverage IoT and ERP for smarter farming, greenhouse, and agri-operations.",
    features: [
      "40% less water usage & 15% more fertilizer efficiency",
      "25% higher crop yield per acre",
      "20% faster farm-to-market logistics",
      "100% traceability & compliance readiness",
    ],
    icon: Leaf,
    category: "IoT + Agriculture ERP",
  },  
];

const categories = [
  "All",
  "Finance",
  "Operations",
  "HR",
  "Analytics",
  "IoT + Agriculture ERP",
  "ERP",
  "Manufacturing",
  "Projects",
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
                className={`mb-2 ${category === selectedCategory || theme === "dark" ? "text-white" : "text-black"}`}
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
              return (
                <Card
                  key={`${product.category}-${index}`}
                  className="border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105  hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="group-hover:bg-white/20 group-hover:text-white transition-colors duration-500"
                      >
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-white transition-colors duration-500">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm group-hover:text-white/90 transition-colors duration-500">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-500"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 group-hover:text-white transition-colors duration-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                <CardTitle className="text-2xl font-semibold">Enterprise Suite</CardTitle>
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

                <Button asChild className="w-full bg-secondary/80 text-white" size="lg">
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
