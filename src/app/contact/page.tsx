"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const form = useForm<ContactForm>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const { register, handleSubmit } = form;
  const onSubmit = (data: {
    name: string;
    email: string;
    company: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    console.log(data);
    form.reset();
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Ready to transform your business? Contact us today for a
            consultation and discover how our ERP solutions can help you
            succeed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  We&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name
                      </label>
                      <Input placeholder="Mihir Mehta" {...register("name")} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Mihir@company.com"
                        {...register("email")}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Company
                      </label>
                      <Input
                        placeholder="Your Company Name"
                        {...register("company")}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone
                      </label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        {...register("phone")}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        placeholder="How can we help you?"
                        {...register("subject")}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your ERP needs..."
                        className="min-h-[120px]"
                        {...register("message")}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      Send Message
                    </Button>
                  </CardContent>
                </form>
              </Form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 9081045450</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contact@erpflow.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>
                      905, RK Prime, Nana Mava Circle, 150 Feet Ring Road Rajkot
                      Gujarat 360005 India
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">OFFICE LOCATION</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-border/50">
                    <h4 className="font-medium">Headquarters</h4>
                    <p className="text-sm text-muted-foreground">
                      Rajkot Gujarat India
                    </p>
                    <p className="text-sm text-muted-foreground">
                      RK Prime, Nana Mava Circle
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation with our ERP experts to discuss your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              
            >
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
