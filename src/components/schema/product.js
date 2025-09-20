import { CreditCard, UserCheck, HardHat, Users, ClipboardList, ShieldCheck } from "lucide-react";

export const products = [
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
        name: "Monthly closing time reduced",
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
    description: "Optimize production processes and quality control",
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
        oldValue: 2,
        newValue: 48,
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
    description: "Deliver projects on time with better resource management",
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
];
