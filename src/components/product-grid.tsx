"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  CreditCard,
  UserCheck,
  HardHat,
  Users,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { AnimatedMetric } from "@/components/animated-metric";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayRef = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [carouselApi, setCarouselApi] = useState<any>(null);

  const products = [
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

  // Hover handling functions for products
  const handleProductMouseEnter = useCallback(
    (index: number) => {
      // Pause autoplay when hovering
      autoplayRef.current.stop();

      // Clear any existing timer
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }

      // Set new timer for 0.5s
      const timer = setTimeout(() => {
        setSelectedProduct(index);
        setIsModalOpen(true);
      }, 600);

      setHoverTimer(timer);
    },
    [hoverTimer]
  );

  const handleProductMouseLeave = useCallback(() => {
    // Clear timer on mouse leave
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }

    // Resume autoplay when not hovering and modal is not open
    if (!isModalOpen) {
      autoplayRef.current.play();
    }
  }, [hoverTimer, isModalOpen]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    // Resume autoplay when modal closes
    autoplayRef.current.play();
  }, []);

  // Auto-scroll to top when modal opens and pause autoplay
  useEffect(() => {
    if (isModalOpen && modalContentRef.current) {
      modalContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
      // Pause autoplay when modal opens
      autoplayRef.current.stop();
    }
  }, [isModalOpen]);

  // Track carousel API and current slide
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect(); // Set initial slide

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <section id="products" className="py-24 px-8">
      <div className="container mx-auto max-w-[98vw]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful ERP modules to streamline every aspect of your business
          </p>
        </div>

        {/* Shadcn Carousel */}
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayRef.current]}
          setApi={setCarouselApi}
        >
          <CarouselContent className="-ml-2">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2 rounded-lg">
                      <Card
                        className="group hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary  backdrop-blur overflow-hidden relative h-[400px] cursor-pointer bg-card/50 hover:bg-card/80"
                        onMouseEnter={() => handleProductMouseEnter(index)}
                        onMouseLeave={handleProductMouseLeave}
                      >
                      <CardHeader className="pb-6 px-6 pt-6">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                            <IconComponent className="h-8 w-8 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                          </div>
                          <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                            {product.name}
                          </CardTitle>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0 px-6 pb-6">
                        <div className="space-y-3">
                          {product.features
                            .slice(0, 4)
                            .map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center space-x-3"
                              >
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                  {typeof feature === "object"
                                    ? feature.name
                                    : feature}
                                </span>
                              </div>
                            ))}
                          {product.features.length > 4 && (
                            <div className="text-xs text-muted-foreground/60 italic">
                              +{product.features.length - 4} more features...
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary bg-transparent hover:bg-primary hover:text-white"
          >
            <Link href="/products">
              Explore More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <DialogContent
          ref={modalContentRef}
          className="!w-[1200px] !max-w-[1200px] max-h-[95vh] overflow-y-auto scroll-smooth"              
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              {selectedProduct !== null && products[selectedProduct]?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedProduct !== null && (
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  {(() => {
                    const IconComponent = products[selectedProduct].icon;
                    return <IconComponent className="h-8 w-8 text-primary" />;
                  })()}
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">
                    {products[selectedProduct].description}
                  </p>
                </div>
              </div>

              {products[selectedProduct].hasMetrics && (
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">Performance Metrics</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {products[selectedProduct].features
                      .filter((feature) => typeof feature === "object")
                      .map((feature, index) => (
                        <div
                          key={index}
                          className="p-2"
                        >
                          <AnimatedMetric feature={feature} isHovered={true} />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
