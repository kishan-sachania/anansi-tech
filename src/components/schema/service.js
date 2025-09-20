import { CreditCard, BookOpen, Film, Users, Monitor, Cloud, Code, Database, Settings, Wrench, LifeBuoy, HardHat, Package, Leaf, Thermometer, Bean, Fish, ShoppingCart, Globe, PackageCheck, Heart, TestTube2, Pill, Zap, Home, Building2, MapPin, Sun, Cpu,Flas, Coffee, Tablet, FlaskConical, Truck ,Box,Wifi, Map} from "lucide-react";

export const categoryWiseServices = [
  {
    category: "core",
    cards: [
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
    ],
  },
  {
    category: "manufacturing",
    cards: [
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
    ],
  },
  {
    category: "agriculture",
    cards: [
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
    ],
  },
  {
    category: "trade",
    cards: [
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
    ],
  },
  {
    category: "healthcare",
    cards: [
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
    ],
  },
  {
    category: "infrastructure",
    cards: [
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
    ],
  },
  {
    category: "technology",
    cards: [
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
    ],
  },
  {
    category: "others",
    cards: [
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
    ],
  },
];
