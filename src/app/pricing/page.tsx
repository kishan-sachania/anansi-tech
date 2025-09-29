"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Zap, Crown, Users, User } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useTheme } from "@/contexts/theme-context";

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for individuals and small teams",
    price: 0,
    yearlyPrice: 0,
    users: 1,
    dataLimit: "1 GB",
    period: "month",
    icon: User,
    popular: false,
    features: [
      "1 user",
      "1 GB data limit",
      "Basic ERP modules",
      "Email support",
      "Basic reporting",
      "Mobile app access",
      "Standard security",
    ],
    limitations: ["Limited customization", "Basic integrations only"],
    cta: "Get Started Free",
    color: "border-border/50",
  },
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    price: 1990,
    yearlyPrice: 1590,
    users: 10,
    dataLimit: "40 GB",
    period: "month",
    icon: Users,
    popular: false,
    features: [
      "Up to 10 users",
      "40 GB data limit",
      "All ERP modules",
      "Email support",
      "Advanced reporting",
      "Mobile app access",
      "Enhanced security",
      "Daily backups",
      "API access",
    ],
    limitations: ["Limited customization", "Basic integrations only"],
    cta: "Start Free Trial",
    color: "border-border/50",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: 3270,
    yearlyPrice: 2670,
    users: 30,
    dataLimit: "60 GB",
    period: "month",
    icon: Zap,
    popular: false,
    features: [
      "Up to 30 users",
      "60 GB data limit",
      "All ERP modules",
      "Priority support",
      "Advanced reporting",
      "Mobile app access",
      "Enhanced security",
      "Daily backups",
      "API access",
      "Custom workflows",
      "Advanced integrations",
      "Training sessions",
    ],
    limitations: [],
    cta: "Start Free Trial",
    color: "border-primary/50",
  },
  {
    name: "Business",
    description: "For established businesses",
    price: 3950,
    yearlyPrice: 3450,
    users: 50,
    dataLimit: "100 GB",
    period: "month",
    icon: Star,
    popular: false,
    features: [
      "Up to 50 users",
      "100 GB data limit",
      "All ERP modules",
      "Priority support",
      "Custom reporting",
      "Mobile app access",
      "Enterprise security",
      "Real-time backups",
      "Full API access",
      "Custom workflows",
      "All integrations",
      "Dedicated training",
      "SLA guarantee",
    ],
    limitations: [],
    cta: "Start Free Trial",
    color: "border-border/50",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: 7900,
    yearlyPrice: 6900,
    users: 100,
    dataLimit: "1 TB",
    period: "month",
    icon: Crown,
    popular: true,
    features: [
      "Up to 100 users",
      "1 TB data limit",
      "All ERP modules",
      "24/7 dedicated support",
      "Custom reporting",
      "Mobile app access",
      "Enterprise security",
      "Real-time backups",
      "Full API access",
      "Custom development",
      "All integrations",
      "Dedicated training",
      "SLA guarantee",
      "Custom deployment",
      "Advanced analytics",
    ],
    limitations: [],
    cta: "Contact Sales",
    color: "border-border/50",
  },
  {
    name: "Corporate",
    description: "For large corporations",
    price: 17250,
    yearlyPrice: 12250,
    users: 250,
    dataLimit: "3 TB",
    period: "month",
    icon: Crown,
    popular: false,
    features: [
      "Up to 250 users",
      "3 TB data limit",
      "All ERP modules",
      "24/7 dedicated support",
      "Custom reporting",
      "Mobile app access",
      "Enterprise security",
      "Real-time backups",
      "Full API access",
      "Custom development",
      "All integrations",
      "Dedicated training",
      "SLA guarantee",
      "Custom deployment",
      "Advanced analytics",
      "White-label options",
    ],
    limitations: [],
    cta: "Contact Sales",
    color: "border-border/50",
  },
  {
    name: "Unlimited",
    description: "For unlimited scale",
    price: 390000,
    yearlyPrice: 290000,
    users: "Unlimited",
    dataLimit: "10 TB",
    period: "month",
    icon: Crown,
    popular: false,
    features: [
      "Unlimited users",
      "10 TB data limit",
      "All ERP modules",
      "24/7 dedicated support",
      "Custom reporting",
      "Mobile app access",
      "Enterprise security",
      "Real-time backups",
      "Full API access",
      "Custom development",
      "All integrations",
      "Dedicated training",
      "SLA guarantee",
      "Custom deployment",
      "Advanced analytics",
      "White-label options",
      "On-premise deployment",
    ],
    limitations: [],
    cta: "Contact Sales",
    color: "border-border/50",
  },
];

const addOns = [
  {
    name: "Additional Users",
    description: "Add more users to your plan",
    price: 15,
    period: "per user/month",
    icon: Users,
  },
  {
    name: "Extra Storage",
    description: "Additional cloud storage space",
    price: 5,
    period: "per 10GB/month",
    icon: Star,
  },
  {
    name: "Custom Development",
    description: "Tailored features for your business",
    price: 150,
    period: "per hour",
    icon: Zap,
  },
  {
    name: "Priority Support",
    description: "Faster response times and dedicated support",
    price: 99,
    period: "per month",
    icon: Crown,
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const { theme } = useTheme();

  const toggleBillingPeriod = () => {
    setBillingPeriod((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const getDiscountedPrice = (plan: any) => {
    return billingPeriod === "yearly" ? plan.yearlyPrice : plan.price;
  };

  const getPeriodText = (period: string) => {
    return billingPeriod === "yearly" ? "year" : period;
  };

  const getSavingsPercentage = (plan: any) => {
    if (plan.price === 0) return 0;
    const savings = ((plan.price - plan.yearlyPrice) / plan.price) * 100;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pricing Plans
          </Badge>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-balance">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your business. Start
            with our free trial and upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium ${
                billingPeriod === "monthly"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={toggleBillingPeriod}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                billingPeriod === "yearly"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Yearly
            </span>
            {billingPeriod === "yearly" && (
              <Badge
                variant="secondary"
                className="ml-2 bg-green-100 text-green-800 border-green-200"
              >
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-2 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              const discountedPrice = getDiscountedPrice(plan);
              const periodText = getPeriodText(plan.period);
              const savingsPercentage = getSavingsPercentage(plan);

              return (
                <Card
                  key={plan.name}
                  className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full ${
                    plan.popular
                      ? "border-primary shadow-lg ring-2 ring-primary/20"
                      : plan.color
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {billingPeriod === "yearly" && savingsPercentage > 0 && (
                    <div className="absolute -top-4 right-4">
                      <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
                        Save {savingsPercentage}%
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold">
                        {plan.price === 0
                          ? "Free"
                          : `₹${discountedPrice.toLocaleString()}`}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {plan.price === 0 ? "Forever" : `/${periodText}`}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {plan.users} users • {plan.dataLimit} data
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <Button
                      className={`w-full mt-auto ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-white"
                          : "bg-secondary hover:bg-secondary/90 text-white"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      {/* <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your plan with these optional add-ons to meet your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <Card key={addon.name} className="border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {addon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center flex flex-col flex-grow">
                    <div className="text-2xl font-bold text-primary mb-4">
                      ₹{addon.price}
                      <span className="text-sm text-muted-foreground font-normal">
                        /{addon.period}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-white bg-primary hover:bg-primary/90 hover:text-white border-primary">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Terms and Conditions Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Commercial Terms & Conditions
          </h2>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>
                      GST or others taxes extra as and when applicable.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>
                      Data limit count will be calculated on Database and User
                      files which exclude any setup files/libraries. Network
                      bandwidth will be the unmetered subject to Cloud
                      Acceptable Use Policy.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>
                      Billing start date would be the date on which first time
                      access given to the first user after installation and
                      configuration of the server.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">
                  Commercial Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      1. Price Revision
                    </h4>
                    <p>
                      Prices shall be revised annually on every year 1st of
                      April.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      2. Revision Cap
                    </h4>
                    <p>
                      Annual price revision shall not exceed 50% of the previous
                      year's price until 31st March 2027. Prices may also be
                      reduced below the previous year's level.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      3. Price Reset Impact
                    </h4>
                    <p>
                      Annual price resets will not create any retrospective or
                      differential payment liabilities on past subscription.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      4. Billing Date and Payment
                    </h4>
                    <ul className="space-y-2 ml-4">
                      <li>
                        • Invoices shall be issued at the end of each calendar
                        month (28th, 29th, 30th, or 31st as applicable).
                      </li>
                      <li>
                        • All invoices must be settled by the 5th of the
                        following month and same shall be considered as due
                        date.
                      </li>
                      <li>
                        • If payment is not received by the 5th of the following
                        month, then invoice will be marked as Overdue.
                      </li>
                      <li>
                        • Overdue invoices must be cleared by the last day of
                        the same month.
                      </li>
                      <li>
                        • If payment remains outstanding after the last day of
                        the month, the Client's access to the Services will be
                        revoked effective immediately.
                      </li>
                      <li>
                        • If the invoice remains unpaid for more than 90 days
                        from its due date, the Client's data may be permanently
                        erased from the systems, with no liability for data
                        recovery.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "Absolutely! We offer a 14-day free trial for all plans with no credit card required. You can explore all features before committing.",
              },
              {
                question: "What happens to my data if I cancel?",
                answer:
                  "Your data is safe with us. We provide a 30-day grace period after cancellation to export your data, and we'll help you with the migration process.",
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer:
                  "Yes, we provide custom development and enterprise solutions tailored to your specific needs. Contact our sales team to discuss your requirements.",
              },
              {
                question: "What support options are available?",
                answer:
                  "We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
