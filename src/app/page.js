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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Building2,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ERPCompanyWebsite() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Enterprise Resource Planning Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance font-heading">
            Your business deserves more than tools
            <span className="text-primary"> it deserves a partner.</span>
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
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section id="solutions" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              What We Solve as ERP
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our ERP solutions address the core challenges businesses face in
              today&apos;s competitive landscape
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Fragmented Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unify all your business data in one centralized platform for
                  better decision-making and insights.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Manual Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automate repetitive tasks and workflows to increase efficiency
                  and reduce human error.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Compliance Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensure regulatory compliance with built-in controls and
                  automated reporting features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ERP Implementation",
                desc: "Full-scale ERP deployment with minimal disruption to your operations",
              },
              {
                title: "System Integration",
                desc: "Seamlessly connect your existing systems with our ERP platform",
              },
              {
                title: "Custom Development",
                desc: "Tailored modules and features to meet your unique requirements",
              },
              {
                title: "Training & Support",
                desc: "Comprehensive training programs and 24/7 technical support",
              },
              {
                title: "Data Migration",
                desc: "Secure and accurate transfer of your existing data to the new system",
              },
              {
                title: "Maintenance",
                desc: "Ongoing system maintenance and updates to ensure optimal performance",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
            ].map((industry, index) => (
              <Card
                key={index}
                className="text-center p-6 border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <h3 className="font-semibold">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful ERP modules to streamline every aspect of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Financial Management",
                features: ["Accounting", "Budgeting", "Financial Reporting"],
              },
              {
                name: "Supply Chain",
                features: ["Inventory", "Procurement", "Vendor Management"],
              },
              {
                name: "Human Resources",
                features: [
                  "Payroll",
                  "Employee Records",
                  "Performance Management",
                ],
              },
              {
                name: "Customer Management",
                features: ["CRM", "Sales Tracking", "Customer Support"],
              },
              {
                name: "Project Management",
                features: [
                  "Task Tracking",
                  "Resource Planning",
                  "Time Management",
                ],
              },
              {
                name: "Business Intelligence",
                features: ["Analytics", "Dashboards", "Reporting"],
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ERPFlow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                    <CheckCircle className="h-5 w-5 text-secondary" />
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
                    <CheckCircle className="h-5 w-5 text-secondary" />
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
      <section id="faq" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our ERP solutions
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                How long does ERP implementation take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Implementation time varies based on company size and complexity,
                but typically ranges from 3-6 months for small to medium
                businesses and 6-12 months for larger enterprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Is training included in the package?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provide comprehensive training for all users, including
                administrators and end-users. Training includes online sessions,
                documentation, and ongoing support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Can the system integrate with existing software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Our ERP solution offers robust integration
                capabilities with popular business applications, accounting
                software, and third-party systems through APIs and connectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-card border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                What kind of support do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer 24/7 technical support, regular system updates,
                maintenance, and dedicated customer success managers to ensure
                your ERP system runs smoothly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
