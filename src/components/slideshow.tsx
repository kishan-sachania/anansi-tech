"use client";

import React, { useState, useMemo, useCallback, memo, useEffect } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Service from "./service";
import Product from "./product";

// TypeScript interfaces
export interface Service {
  title: string;
  desc: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

type SlideshowProps<T> = {
  itemList: T[];
  product?: boolean;
  renderItem: (item: T, index: number) => React.ReactNode; // render function
  title: string;
  description: string;
};

// Services data with categories - Memoized to prevent recreation on every render
// const servicesData = [
//   // Core Services
//   {
//     title: "ERP Implementation",
//     desc: "Full-scale ERP deployment with minimal disruption to your operations",
//     category: "core",
//     icon: Settings,
//   },
//   {
//     title: "IoT for Agriculture",
//     desc: "Smart farming solutions using IoT devices that monitor soil, climate, irrigation, and crop health in real-time, helping farmers increase yield, reduce costs, and make data-driven decisions.",
//     category: "core",
//     icon: Thermometer,
//   },
//   {
//     title: "AI Integration with ERP",
//     desc: "Enhancing ERP systems with AI-powered insights for smarter forecasting, demand planning, process automation, and decision making, making businesses more adaptive and efficient.",
//     category: "core",
//     icon: Cpu,
//   },
//   {
//     title: "System Integration",
//     desc: "Seamlessly connect your existing systems with our ERP platform",
//     category: "core",
//     icon: Cloud,
//   },
//   {
//     title: "Custom Development",
//     desc: "Tailored modules and features to meet your unique requirements",
//     category: "core",
//     icon: Code,
//   },
//   {
//     title: "Training & Support",
//     desc: "Comprehensive training programs and 24/7 technical support",
//     category: "core",
//     icon: LifeBuoy,
//   },
//   {
//     title: "Data Migration",
//     desc: "Secure and accurate transfer of your existing data to the new system",
//     category: "core",
//     icon: Database,
//   },
//   {
//     title: "Maintenance",
//     desc: "Ongoing system maintenance and updates to ensure optimal performance",
//     category: "core",
//     icon: Wrench,
//   },

//   // Manufacturing & Industrial
//   {
//     title: "Automotive & Auto Components",
//     desc: "Streamlined ERP for auto manufacturing, supply chain, and components.",
//     category: "manufacturing",
//     icon: HardHat,
//   },
//   {
//     title: "Engineering Goods & Machinery",
//     desc: "End-to-end production, inventory, and project management for engineering units.",
//     category: "manufacturing",
//     icon: Package,
//   },
//   {
//     title: "Chemicals, Fertilizers & Petrochemicals",
//     desc: "Compliance-ready ERP with batch tracking and safety standards.",
//     category: "manufacturing",
//     icon: FlaskConical,
//   },
//   {
//     title: "Textiles & Apparel",
//     desc: "ERP for garments, handloom, and technical textiles with design-to-delivery flow.",
//     category: "manufacturing",
//     icon: Coffee,
//   },
//   {
//     title: "Pharmaceuticals & Healthcare Products",
//     desc: "Regulatory-compliant ERP for pharma, formulations, and healthcare goods.",
//     category: "manufacturing",
//     icon: Pill,
//   },
//   {
//     title: "Electronics & Electrical Equipment",
//     desc: "Precision production, testing, and distribution tracking for electronics.",
//     category: "manufacturing",
//     icon: Tablet,
//   },
//   {
//     title: "Food & Beverages Processing",
//     desc: "Batch-wise ERP for food safety, recipes, and cold chain management.",
//     category: "manufacturing",
//     icon: Coffee,
//   },
//   {
//     title: "Cement, Steel & Building Materials",
//     desc: "Heavy industry ERP for materials planning and distribution.",
//     category: "manufacturing",
//     icon: Home,
//   },
//   {
//     title: "Plastics, Rubber & Packaging",
//     desc: "Production scheduling and cost optimization for polymers and packaging.",
//     category: "manufacturing",
//     icon: PackageCheck,
//   },

//   // Agriculture & Allied
//   {
//     title: "Farming & Agribusiness",
//     desc: "ERP for fruits, vegetables, and grains with yield planning and tracking.",
//     category: "agriculture",
//     icon: Leaf,
//   },
//   {
//     title: "Food Processing & Cold Storage",
//     desc: "Post-harvest management with IoT-enabled cold storage and processing ERP.",
//     category: "agriculture",
//     icon: Thermometer,
//   },
//   {
//     title: "Greenhouse & Horticulture Solutions",
//     desc: "IoT + ERP integration for controlled environment agriculture.",
//     category: "agriculture",
//     icon: Bean,
//   },
//   {
//     title: "Fertilizers, Seeds & Pesticides",
//     desc: "Supply chain ERP for agri-input companies with compliance tracking.",
//     category: "agriculture",
//     icon: Bean,
//   },
//   {
//     title: "Dairy, Poultry & Fisheries",
//     desc: "Farm-to-market ERP with quality testing and distribution modules.",
//     category: "agriculture",
//     icon: Fish,
//   },

//   // Trade & Retail
//   {
//     title: "Wholesale & Distribution",
//     desc: "ERP for bulk trade, inventory, and multi-location distribution.",
//     category: "trade",
//     icon: Truck,
//   },
//   {
//     title: "E-commerce & Online Retail",
//     desc: "Seamless ERP integration with online storefronts and order fulfillment.",
//     category: "trade",
//     icon: ShoppingCart,
//   },
//   {
//     title: "Consumer Goods (FMCG)",
//     desc: "Fast-moving consumer goods ERP with real-time stock & sales tracking.",
//     category: "trade",
//     icon: Box,
//   },
//   {
//     title: "Logistics & Supply Chain",
//     desc: "End-to-end ERP for freight, warehousing, and distribution networks.",
//     category: "trade",
//     icon: Truck,
//   },

//   // Healthcare & Life Sciences
//   {
//     title: "Hospitals & Clinics",
//     desc: "Healthcare ERP for patient care, billing, and medical inventory.",
//     category: "healthcare",
//     icon: Heart,
//   },
//   {
//     title: "Diagnostics & Path Labs",
//     desc: "Lab ERP for sample tracking, compliance, and reporting automation.",
//     category: "healthcare",
//     icon: TestTube2,
//   },
//   {
//     title: "Pharmaceuticals",
//     desc: "Pharma ERP with R&D, compliance, and global distribution support.",
//     category: "healthcare",
//     icon: Pill,
//   },
//   {
//     title: "Medical Devices",
//     desc: "ERP for precision manufacturing and regulatory compliance of devices.",
//     category: "healthcare",
//     icon: Tablet,
//   },

//   // Infrastructure & Real Estate
//   {
//     title: "Construction & Contractors",
//     desc: "Project-based ERP with cost control, procurement, and billing.",
//     category: "infrastructure",
//     icon: HardHat,
//   },
//   {
//     title: "Real Estate Developers",
//     desc: "ERP for property sales, leasing, and project lifecycle management.",
//     category: "infrastructure",
//     icon: Building2,
//   },
//   {
//     title: "Smart City / Urban Infrastructure",
//     desc: "Large-scale infrastructure ERP with IoT and compliance integrations.",
//     category: "infrastructure",
//     icon: MapPin,
//   },
//   {
//     title: "Renewable Energy & Power",
//     desc: "ERP for solar, wind, and power projects with asset tracking.",
//     category: "infrastructure",
//     icon: Sun,
//   },

//   // Technology & Services
//   {
//     title: "IT Services & Software",
//     desc: "ERP for project delivery, billing, and resource management.",
//     category: "technology",
//     icon: Monitor,
//   },
//   {
//     title: "Fintech & Financial Services",
//     desc: "Finance ERP with compliance, security, and automation modules.",
//     category: "technology",
//     icon: CreditCard,
//   },
//   {
//     title: "Education & EdTech",
//     desc: "ERP for schools, universities, and edtech platforms.",
//     category: "technology",
//     icon: BookOpen,
//   },
//   {
//     title: "Media & Entertainment",
//     desc: "ERP for production houses, broadcasters, and digital platforms.",
//     category: "technology",
//     icon: Film,
//   },
//   {
//     title: "Professional Services",
//     desc: "ERP for consulting, legal, and accounting service providers.",
//     category: "technology",
//     icon: Users,
//   },

//   // Others
//   {
//     title: "Tourism & Hospitality",
//     desc: "ERP for hotels, resorts, and travel operators with booking systems.",
//     category: "others",
//     icon: Map,
//   },
//   {
//     title: "Transport & Logistics",
//     desc: "Fleet and transport ERP with real-time tracking and dispatch.",
//     category: "others",
//     icon: Truck,
//   },
//   {
//     title: "Telecom & Networking",
//     desc: "ERP for telecom operators, ISPs, and infrastructure providers.",
//     category: "others",
//     icon: Wifi,
//   },
//   {
//     title: "Mining & Natural Resources",
//     desc: "ERP for mining operations, compliance, and raw material tracking.",
//     category: "others",
//     icon: HardHat,
//   },
// ];

export function Slideshow<T>({ itemList, product = false, title, description }: SlideshowProps<T>) {
  const [servicesFilter, setServicesFilter] = useState("all");
  const [servicesPage, setServicesPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationPhase, setAnimationPhase] = useState("idle"); // 'idle', 'out', 'in'
  const [isPaused, setIsPaused] = useState(false);
  const [manualSwitch, setManualSwitch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Get current category cards
  // const currentCategoryCards = itemList[activeCategory];

  // Track screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check initial screen size
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-advance logic - disabled on mobile/small screens
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    // Only start auto-advance on desktop screens when not paused or manually switched
    if (!isPaused && !manualSwitch && !isMobile) {
      timer = setInterval(() => {
        // Double-check screen size before advancing
        if (window.innerWidth < 640) return;

        // Start slide out animation
        setAnimationPhase("out");

        setTimeout(() => {
          // Change to next category
          setActiveCategory((prev) => (prev + 1) % itemList?.length);

          // Start slide in animation
          setAnimationPhase("in");

          setTimeout(() => {
            // Reset to idle state
            setAnimationPhase("idle");
          }, 500);
        }, 500);
      }, 4000); // 4 sec per category
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [activeCategory, isPaused, manualSwitch, isMobile]);

  // Reset manual switch flag after delay
  useEffect(() => {
    if (manualSwitch) {
      const timer = setTimeout(() => {
        setManualSwitch(false);
      }, 6000); // Resume auto-advance after 6 seconds
      return () => clearTimeout(timer);
    }
  }, [manualSwitch]);

  // // Memoized filter and pagination logic
  // const filteredServices = useMemo(
  //   () =>
  //     servicesData.filter(
  //       (service) =>
  //         servicesFilter === "all" || service.category === servicesFilter
  //     ),
  //   [servicesFilter]
  // );

  // const itemsPerPage = 6;
  // const totalPages = useMemo(
  //   () => Math.ceil(filteredServices.length / itemsPerPage),
  //   [filteredServices.length, itemsPerPage]
  // );

  // const paginatedServices = useMemo(
  //   () => filteredServices.slice(0, servicesPage * itemsPerPage),
  //   [filteredServices, servicesPage, itemsPerPage]
  // );

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
    setIsPaused(true); // Pause sliding on hover
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
    setIsPaused(false); // Resume sliding when hover ends
  }, []);

  return (
    <section id="services" className="pb-16 px-6">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        {!product ? (
          <div className="relative overflow-hidden h-[780px]">
            <Service
              activeCategory={activeCategory}
              animationPhase={animationPhase}
              // currentCategoryCards={currentCategoryCards}
              hoveredCard={hoveredCard}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              setActiveCategory={setActiveCategory}
              setManualSwitch={setManualSwitch}
              setAnimationPhase={setAnimationPhase}
            />
          </div>
        ) : (
          <Product 
            activeCategory={activeCategory}
            animationPhase={animationPhase}
            hoveredCard={hoveredCard}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            setActiveCategory={setActiveCategory}
            setManualSwitch={setManualSwitch}
            setAnimationPhase={setAnimationPhase}
          />
        )}

        {/* View More Button */}
        {/* {servicesPage < totalPages && (
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
        )} */}
      </div>
    </section>
  );
}
