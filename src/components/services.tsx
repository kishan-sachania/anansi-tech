"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Cpu,
  Cloud,
  Code,
  GitBranch,
  Wrench,
  LifeBuoy,
  Database,
  Settings,
  Truck,
  Box,
  FlaskConical,
  Coffee,
  Tablet,
  HardHat,
  Package,
  Leaf,
  Thermometer,
  Bean,
  Fish,
  ShoppingCart,
  Globe,
  PackageCheck,
  Heart,
  TestTube2,
  Pill,
  Zap,
  Home,
  Building2,
  MapPin,
  Sun,
  Monitor,
  CreditCard,
  BookOpen,
  Film,
  Users,
  Map,
  Wifi,
} from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

// TypeScript interfaces
interface Service {
  title: string;
  desc: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isHovered?: boolean;
}

// Memoized ServiceCard component to prevent unnecessary re-renders
const ServiceCard = memo(({ service, index, isHovered }: ServiceCardProps) => {
  const IconComponent = service.icon;
  return (
    <Card
      key={index}
      className={`border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full ${
        isHovered 
          ? 'scale-105 shadow-2xl ring-2 ring-primary/50 bg-primary/5 z-10' 
          : 'hover:scale-102'
      }`}
    >
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <div className={`p-2 rounded-lg transition-colors duration-300 ${
            isHovered ? 'bg-primary/10' : 'bg-muted/50'
          }`}>
            <IconComponent className={`h-5 w-5 transition-colors duration-300 ${
              isHovered ? 'text-primary' : 'text-muted-foreground'
            }`} />
          </div>
          <span className={isHovered ? 'text-primary' : ''}>{service.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className={`transition-colors duration-300 flex-grow ${
          isHovered ? 'text-foreground' : 'text-muted-foreground'
        }`}>
          {service.desc}
        </p>
      </CardContent>
    </Card>
  );
});

ServiceCard.displayName = "ServiceCard";

// Services data with categories - Memoized to prevent recreation on every render
const servicesData = [
  // Core Services
  {
    title: "ERP Implementation",
    desc: "Full-scale ERP deployment with minimal disruption to your operations",
    category: "core",
    icon: Settings,
  },
  {
    title: "IoT for Agriculture",
    desc: "Smart farming solutions using IoT devices that monitor soil, climate, irrigation, and crop health in real-time, helping farmers increase yield, reduce costs, and make data-driven decisions.",
    category: "core",
    icon: Thermometer,
  },
  {
    title: "AI Integration with ERP",
    desc: "Enhancing ERP systems with AI-powered insights for smarter forecasting, demand planning, process automation, and decision making, making businesses more adaptive and efficient.",
    category: "core",
    icon: Cpu,
  },
  {
    title: "System Integration",
    desc: "Seamlessly connect your existing systems with our ERP platform",
    category: "core",
    icon: Cloud,
  },
  {
    title: "Custom Development",
    desc: "Tailored modules and features to meet your unique requirements",
    category: "core",
    icon: Code,
  },
  {
    title: "Training & Support",
    desc: "Comprehensive training programs and 24/7 technical support",
    category: "core",
    icon: LifeBuoy,
  },
  {
    title: "Data Migration",
    desc: "Secure and accurate transfer of your existing data to the new system",
    category: "core",
    icon: Database,
  },
  {
    title: "Maintenance",
    desc: "Ongoing system maintenance and updates to ensure optimal performance",
    category: "core",
    icon: Wrench,
  },

  // Manufacturing & Industrial
  {
    title: "Automotive & Auto Components",
    desc: "Streamlined ERP for auto manufacturing, supply chain, and components.",
    category: "manufacturing",
    icon: HardHat,
  },
  {
    title: "Engineering Goods & Machinery",
    desc: "End-to-end production, inventory, and project management for engineering units.",
    category: "manufacturing",
    icon: Package,
  },
  {
    title: "Chemicals, Fertilizers & Petrochemicals",
    desc: "Compliance-ready ERP with batch tracking and safety standards.",
    category: "manufacturing",
    icon: FlaskConical,
  },
  {
    title: "Textiles & Apparel",
    desc: "ERP for garments, handloom, and technical textiles with design-to-delivery flow.",
    category: "manufacturing",
    icon: Coffee,
  },
  {
    title: "Pharmaceuticals & Healthcare Products",
    desc: "Regulatory-compliant ERP for pharma, formulations, and healthcare goods.",
    category: "manufacturing",
    icon: Pill,
  },
  {
    title: "Electronics & Electrical Equipment",
    desc: "Precision production, testing, and distribution tracking for electronics.",
    category: "manufacturing",
    icon: Tablet,
  },
  {
    title: "Food & Beverages Processing",
    desc: "Batch-wise ERP for food safety, recipes, and cold chain management.",
    category: "manufacturing",
    icon: Coffee,
  },
  {
    title: "Cement, Steel & Building Materials",
    desc: "Heavy industry ERP for materials planning and distribution.",
    category: "manufacturing",
    icon: Home,
  },
  {
    title: "Plastics, Rubber & Packaging",
    desc: "Production scheduling and cost optimization for polymers and packaging.",
    category: "manufacturing",
    icon: PackageCheck,
  },

  // Agriculture & Allied
  {
    title: "Farming & Agribusiness",
    desc: "ERP for fruits, vegetables, and grains with yield planning and tracking.",
    category: "agriculture",
    icon: Leaf,
  },
  {
    title: "Food Processing & Cold Storage",
    desc: "Post-harvest management with IoT-enabled cold storage and processing ERP.",
    category: "agriculture",
    icon: Thermometer,
  },
  {
    title: "Greenhouse & Horticulture Solutions",
    desc: "IoT + ERP integration for controlled environment agriculture.",
    category: "agriculture",
    icon: Bean,
  },
  {
    title: "Fertilizers, Seeds & Pesticides",
    desc: "Supply chain ERP for agri-input companies with compliance tracking.",
    category: "agriculture",
    icon: Bean,
  },
  {
    title: "Dairy, Poultry & Fisheries",
    desc: "Farm-to-market ERP with quality testing and distribution modules.",
    category: "agriculture",
    icon: Fish,
  },

  // Trade & Retail
  {
    title: "Wholesale & Distribution",
    desc: "ERP for bulk trade, inventory, and multi-location distribution.",
    category: "trade",
    icon: Truck,
  },
  {
    title: "E-commerce & Online Retail",
    desc: "Seamless ERP integration with online storefronts and order fulfillment.",
    category: "trade",
    icon: ShoppingCart,
  },
  {
    title: "Consumer Goods (FMCG)",
    desc: "Fast-moving consumer goods ERP with real-time stock & sales tracking.",
    category: "trade",
    icon: Box,
  },
  {
    title: "Logistics & Supply Chain",
    desc: "End-to-end ERP for freight, warehousing, and distribution networks.",
    category: "trade",
    icon: Truck,
  },

  // Healthcare & Life Sciences
  {
    title: "Hospitals & Clinics",
    desc: "Healthcare ERP for patient care, billing, and medical inventory.",
    category: "healthcare",
    icon: Heart,
  },
  {
    title: "Diagnostics & Path Labs",
    desc: "Lab ERP for sample tracking, compliance, and reporting automation.",
    category: "healthcare",
    icon: TestTube2,
  },
  {
    title: "Pharmaceuticals",
    desc: "Pharma ERP with R&D, compliance, and global distribution support.",
    category: "healthcare",
    icon: Pill,
  },
  {
    title: "Medical Devices",
    desc: "ERP for precision manufacturing and regulatory compliance of devices.",
    category: "healthcare",
    icon: Tablet,
  },

  // Infrastructure & Real Estate
  {
    title: "Construction & Contractors",
    desc: "Project-based ERP with cost control, procurement, and billing.",
    category: "infrastructure",
    icon: HardHat,
  },
  {
    title: "Real Estate Developers",
    desc: "ERP for property sales, leasing, and project lifecycle management.",
    category: "infrastructure",
    icon: Building2,
  },
  {
    title: "Smart City / Urban Infrastructure",
    desc: "Large-scale infrastructure ERP with IoT and compliance integrations.",
    category: "infrastructure",
    icon: MapPin,
  },
  {
    title: "Renewable Energy & Power",
    desc: "ERP for solar, wind, and power projects with asset tracking.",
    category: "infrastructure",
    icon: Sun,
  },

  // Technology & Services
  {
    title: "IT Services & Software",
    desc: "ERP for project delivery, billing, and resource management.",
    category: "technology",
    icon: Monitor,
  },
  {
    title: "Fintech & Financial Services",
    desc: "Finance ERP with compliance, security, and automation modules.",
    category: "technology",
    icon: CreditCard,
  },
  {
    title: "Education & EdTech",
    desc: "ERP for schools, universities, and edtech platforms.",
    category: "technology",
    icon: BookOpen,
  },
  {
    title: "Media & Entertainment",
    desc: "ERP for production houses, broadcasters, and digital platforms.",
    category: "technology",
    icon: Film,
  },
  {
    title: "Professional Services",
    desc: "ERP for consulting, legal, and accounting service providers.",
    category: "technology",
    icon: Users,
  },

  // Others
  {
    title: "Tourism & Hospitality",
    desc: "ERP for hotels, resorts, and travel operators with booking systems.",
    category: "others",
    icon: Map,
  },
  {
    title: "Transport & Logistics",
    desc: "Fleet and transport ERP with real-time tracking and dispatch.",
    category: "others",
    icon: Truck,
  },
  {
    title: "Telecom & Networking",
    desc: "ERP for telecom operators, ISPs, and infrastructure providers.",
    category: "others",
    icon: Wifi,
  },
  {
    title: "Mining & Natural Resources",
    desc: "ERP for mining operations, compliance, and raw material tracking.",
    category: "others",
    icon: HardHat,
  },
];

export function Services() {
  const [servicesFilter, setServicesFilter] = useState("all");
  const [servicesPage, setServicesPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { theme } = useTheme();

  // Memoized filter and pagination logic
  const filteredServices = useMemo(
    () =>
      servicesData.filter(
        (service) =>
          servicesFilter === "all" || service.category === servicesFilter
      ),
    [servicesFilter]
  );

  const itemsPerPage = 6;
  const totalPages = useMemo(
    () => Math.ceil(filteredServices.length / itemsPerPage),
    [filteredServices.length, itemsPerPage]
  );

  const paginatedServices = useMemo(
    () => filteredServices.slice(0, servicesPage * itemsPerPage),
    [filteredServices, servicesPage, itemsPerPage]
  );

  // Memoized event handlers
  const handleFilterChange = useCallback((filter: string) => {
    setServicesFilter(filter);
    setServicesPage(1); // Reset to first page when filter changes
  }, []);

  const handleLoadMore = useCallback(() => {
    setServicesPage((prev) => prev + 1);
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredCard(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ERP services tailored to your business needs
          </p>
        </div>

        {/* Filter Segments */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { key: "all", label: "All Services" },
            { key: "core", label: "Core Services" },
            { key: "manufacturing", label: "Manufacturing" },
            { key: "agriculture", label: "Agriculture" },
            { key: "trade", label: "Trade & Retail" },
            { key: "healthcare", label: "Healthcare" },
            { key: "infrastructure", label: "Infrastructure" },
            { key: "technology", label: "Technology" },
            { key: "others", label: "Others" },
          ].map((filter) => (
            <Button
              key={filter.key}
              variant={servicesFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(filter.key)}
              className={`text-sm ${
                servicesFilter === filter.key || theme === "dark"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedServices.map((service, index) => (
              <div
                key={`${service.category}-${index}`}
                className={`transition-all duration-300 flex ${
                  hoveredCard === index 
                    ? 'z-10' 
                    : hoveredCard !== null 
                      ? 'blur-[1px]' 
                      : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <ServiceCard
                  service={service}
                  index={index}
                  isHovered={hoveredCard === index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        {servicesPage < totalPages && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View More ({filteredServices.length - paginatedServices.length}{" "}
              remaining)
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
