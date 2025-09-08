"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

// TypeScript interfaces
interface Service {
  title: string;
  desc: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

// Memoized ServiceCard component to prevent unnecessary re-renders
const ServiceCard = memo(({ service, index }: ServiceCardProps) => (
  <Card
    key={index}
    className="border-border/50 hover:shadow-lg transition-shadow"
  >
    <CardHeader>
      <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{service.desc}</p>
    </CardContent>
  </Card>
));

ServiceCard.displayName = "ServiceCard";

// Services data with categories - Memoized to prevent recreation on every render
const servicesData = [
  // Core Services
  {
    title: "ERP Implementation",
    desc: "Full-scale ERP deployment with minimal disruption to your operations",
    category: "core",
  },
  {
    title: "IoT for Agriculture",
    desc: "Smart farming solutions using IoT devices that monitor soil, climate, irrigation, and crop health in real-time, helping farmers increase yield, reduce costs, and make data-driven decisions.",
    category: "core",
  },
  {
    title: "AI Integration with ERP",
    desc: "Enhancing ERP systems with AI-powered insights for smarter forecasting, demand planning, process automation, and decision making, making businesses more adaptive and efficient.",
    category: "core",
  },
  {
    title: "System Integration",
    desc: "Seamlessly connect your existing systems with our ERP platform",
    category: "core",
  },
  {
    title: "Custom Development",
    desc: "Tailored modules and features to meet your unique requirements",
    category: "core",
  },
  {
    title: "Training & Support",
    desc: "Comprehensive training programs and 24/7 technical support",
    category: "core",
  },
  {
    title: "Data Migration",
    desc: "Secure and accurate transfer of your existing data to the new system",
    category: "core",
  },
  {
    title: "Maintenance",
    desc: "Ongoing system maintenance and updates to ensure optimal performance",
    category: "core",
  },

  // Manufacturing & Industrial
  {
    title: "Automotive & Auto Components",
    desc: "Streamlined ERP for auto manufacturing, supply chain, and components.",
    category: "manufacturing",
  },
  {
    title: "Engineering Goods & Machinery",
    desc: "End-to-end production, inventory, and project management for engineering units.",
    category: "manufacturing",
  },
  {
    title: "Chemicals, Fertilizers & Petrochemicals",
    desc: "Compliance-ready ERP with batch tracking and safety standards.",
    category: "manufacturing",
  },
  {
    title: "Textiles & Apparel",
    desc: "ERP for garments, handloom, and technical textiles with design-to-delivery flow.",
    category: "manufacturing",
  },
  {
    title: "Pharmaceuticals & Healthcare Products",
    desc: "Regulatory-compliant ERP for pharma, formulations, and healthcare goods.",
    category: "manufacturing",
  },
  {
    title: "Electronics & Electrical Equipment",
    desc: "Precision production, testing, and distribution tracking for electronics.",
    category: "manufacturing",
  },
  {
    title: "Food & Beverages Processing",
    desc: "Batch-wise ERP for food safety, recipes, and cold chain management.",
    category: "manufacturing",
  },
  {
    title: "Cement, Steel & Building Materials",
    desc: "Heavy industry ERP for materials planning and distribution.",
    category: "manufacturing",
  },
  {
    title: "Plastics, Rubber & Packaging",
    desc: "Production scheduling and cost optimization for polymers and packaging.",
    category: "manufacturing",
  },

  // Agriculture & Allied
  {
    title: "Farming & Agribusiness",
    desc: "ERP for fruits, vegetables, and grains with yield planning and tracking.",
    category: "agriculture",
  },
  {
    title: "Food Processing & Cold Storage",
    desc: "Post-harvest management with IoT-enabled cold storage and processing ERP.",
    category: "agriculture",
  },
  {
    title: "Greenhouse & Horticulture Solutions",
    desc: "IoT + ERP integration for controlled environment agriculture.",
    category: "agriculture",
  },
  {
    title: "Fertilizers, Seeds & Pesticides",
    desc: "Supply chain ERP for agri-input companies with compliance tracking.",
    category: "agriculture",
  },
  {
    title: "Dairy, Poultry & Fisheries",
    desc: "Farm-to-market ERP with quality testing and distribution modules.",
    category: "agriculture",
  },

  // Trade & Retail
  {
    title: "Wholesale & Distribution",
    desc: "ERP for bulk trade, inventory, and multi-location distribution.",
    category: "trade",
  },
  {
    title: "E-commerce & Online Retail",
    desc: "Seamless ERP integration with online storefronts and order fulfillment.",
    category: "trade",
  },
  {
    title: "Consumer Goods (FMCG)",
    desc: "Fast-moving consumer goods ERP with real-time stock & sales tracking.",
    category: "trade",
  },
  {
    title: "Logistics & Supply Chain",
    desc: "End-to-end ERP for freight, warehousing, and distribution networks.",
    category: "trade",
  },

  // Healthcare & Life Sciences
  {
    title: "Hospitals & Clinics",
    desc: "Healthcare ERP for patient care, billing, and medical inventory.",
    category: "healthcare",
  },
  {
    title: "Diagnostics & Path Labs",
    desc: "Lab ERP for sample tracking, compliance, and reporting automation.",
    category: "healthcare",
  },
  {
    title: "Pharmaceuticals",
    desc: "Pharma ERP with R&D, compliance, and global distribution support.",
    category: "healthcare",
  },
  {
    title: "Medical Devices",
    desc: "ERP for precision manufacturing and regulatory compliance of devices.",
    category: "healthcare",
  },

  // Infrastructure & Real Estate
  {
    title: "Construction & Contractors",
    desc: "Project-based ERP with cost control, procurement, and billing.",
    category: "infrastructure",
  },
  {
    title: "Real Estate Developers",
    desc: "ERP for property sales, leasing, and project lifecycle management.",
    category: "infrastructure",
  },
  {
    title: "Smart City / Urban Infrastructure",
    desc: "Large-scale infrastructure ERP with IoT and compliance integrations.",
    category: "infrastructure",
  },
  {
    title: "Renewable Energy & Power",
    desc: "ERP for solar, wind, and power projects with asset tracking.",
    category: "infrastructure",
  },

  // Technology & Services
  {
    title: "IT Services & Software",
    desc: "ERP for project delivery, billing, and resource management.",
    category: "technology",
  },
  {
    title: "Fintech & Financial Services",
    desc: "Finance ERP with compliance, security, and automation modules.",
    category: "technology",
  },
  {
    title: "Education & EdTech",
    desc: "ERP for schools, universities, and edtech platforms.",
    category: "technology",
  },
  {
    title: "Media & Entertainment",
    desc: "ERP for production houses, broadcasters, and digital platforms.",
    category: "technology",
  },
  {
    title: "Professional Services",
    desc: "ERP for consulting, legal, and accounting service providers.",
    category: "technology",
  },

  // Others
  {
    title: "Tourism & Hospitality",
    desc: "ERP for hotels, resorts, and travel operators with booking systems.",
    category: "others",
  },
  {
    title: "Transport & Logistics",
    desc: "Fleet and transport ERP with real-time tracking and dispatch.",
    category: "others",
  },
  {
    title: "Telecom & Networking",
    desc: "ERP for telecom operators, ISPs, and infrastructure providers.",
    category: "others",
  },
  {
    title: "Mining & Natural Resources",
    desc: "ERP for mining operations, compliance, and raw material tracking.",
    category: "others",
  },
];

export function Services() {
  const [servicesFilter, setServicesFilter] = useState("all");
  const [servicesPage, setServicesPage] = useState(1);
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

  return (
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
              className={`text-sm ${servicesFilter === filter.key || theme === "dark" ? "text-white" : "text-black"}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedServices.map((service, index) => (
            <ServiceCard
              key={`${service.category}-${index}`}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* View More Button */}
        {servicesPage < totalPages && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View More ({filteredServices.length - paginatedServices.length} remaining)
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
