"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Zap, Crown, Users } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useTheme } from "@/contexts/theme-context";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    price: 99,
    period: "month",
    icon: Users,
    popular: false,
    features: [
      "Up to 5 users",
      "Basic ERP modules",
      "Email support",
      "5GB storage",
      "Basic reporting",
      "Mobile app access",
      "Standard security",
      "Monthly backups"
    ],
    limitations: [
      "Limited customization",
      "Basic integrations only"
    ],
    cta: "Start Free Trial",
    color: "border-border/50"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: 299,
    period: "month",
    icon: Zap,
    popular: true,
    features: [
      "Up to 25 users",
      "All ERP modules",
      "Priority support",
      "50GB storage",
      "Advanced reporting",
      "Mobile app access",
      "Enhanced security",
      "Daily backups",
      "API access",
      "Custom workflows",
      "Advanced integrations",
      "Training sessions"
    ],
    limitations: [],
    cta: "Start Free Trial",
    color: "border-primary/50"
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: 799,
    period: "month",
    icon: Crown,
    popular: false,
    features: [
      "Unlimited users",
      "All ERP modules",
      "24/7 dedicated support",
      "Unlimited storage",
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
      "Advanced analytics"
    ],
    limitations: [],
    cta: "Contact Sales",
    color: "border-border/50"
  }
];

const addOns = [
  {
    name: "Additional Users",
    description: "Add more users to your plan",
    price: 15,
    period: "per user/month",
    icon: Users
  },
  {
    name: "Extra Storage",
    description: "Additional cloud storage space",
    price: 5,
    period: "per 10GB/month",
    icon: Star
  },
  {
    name: "Custom Development",
    description: "Tailored features for your business",
    price: 150,
    period: "per hour",
    icon: Zap
  },
  {
    name: "Priority Support",
    description: "Faster response times and dedicated support",
    price: 99,
    period: "per month",
    icon: Crown
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const { theme } = useTheme();

  const toggleBillingPeriod = () => {
    setBillingPeriod(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  const getDiscountedPrice = (price: number) => {
    return billingPeriod === 'yearly' ? Math.round(price * 10) : price;
  };

  const getPeriodText = (period: string) => {
    return billingPeriod === 'yearly' ? 'year' : period;
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
            Flexible pricing options designed to scale with your business. 
            Start with our free trial and upgrade as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={toggleBillingPeriod}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800 border-green-200">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              const discountedPrice = getDiscountedPrice(plan.price);
              const periodText = getPeriodText(plan.period);
              
              return (
                <Card
                  key={plan.name}
                  className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full ${
                    plan.popular 
                      ? 'border-primary shadow-lg ring-2 ring-primary/20' 
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
                  
                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold">${discountedPrice}</span>
                      <span className="text-muted-foreground">/{periodText}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="h-4 w-4 mr-3 flex-shrink-0 text-muted-foreground">×</span>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className={`w-full text-white ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary/90' 
                          : 'bg-secondary hover:bg-secondary/90'
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
                      ${addon.price}
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
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "Is there a free trial available?",
                answer: "Absolutely! We offer a 14-day free trial for all plans with no credit card required. You can explore all features before committing."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your data is safe with us. We provide a 30-day grace period after cancellation to export your data, and we'll help you with the migration process."
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer: "Yes, we provide custom development and enterprise solutions tailored to your specific needs. Contact our sales team to discuss your requirements."
              },
              {
                question: "What support options are available?",
                answer: "We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers."
              }
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses already using our ERP solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary  text-secondary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}