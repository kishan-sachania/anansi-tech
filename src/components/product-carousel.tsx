"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedMetric } from "@/components/animated-metric";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "./schema/product";

interface ProductCarouselProps {
  className?: string;
}

const ProductCarousel = ({ className = "" }: ProductCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const totalProducts = products.length;
  const prevIndex = (activeIndex - 1 + totalProducts) % totalProducts;
  const currentIndex = activeIndex;
  const nextIndex = (activeIndex + 1) % totalProducts;

  const prevProduct = products[prevIndex];
  const currentProduct = products[currentIndex];
  const nextProduct = products[nextIndex];

  // Auto-loop functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalProducts);
    }, 5000); // Change slide every 5 seconds for smoother experience

    return () => clearInterval(interval);
  }, [isPaused, totalProducts]);

  const handleCardClick = (index: number) => {
    setIsPaused(true);
    setActiveIndex(index);
    setTimeout(() => setIsPaused(false), 8000); // Longer pause for smoother experience
  };

  return (
    <section id="products" className={`pb-10 px-4 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Powerful ERP modules to streamline every aspect of your business</p>
        </div>

        <div className="relative">
          {/* 3-Card Layout */}
          <div className="flex items-center justify-center w-full gap-4">
          {/* Previous Card - Left Side */}
          <div
            className={`transition-all duration-700 ease-out ${
              hoveredProduct === currentIndex ? "w-0 opacity-0 scale-75" : "w-1/4 opacity-60 scale-90"
            }`}
          >
            <Card
              className="group h-[350px] transition-all duration-700 ease-out border border-primary/10 bg-card/30 backdrop-blur overflow-hidden relative cursor-pointer hover:border-primary/20 hover:scale-95"
              onClick={() => handleCardClick(prevIndex)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <prevProduct.icon className="h-6 w-6 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{prevProduct?.name}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {prevProduct?.description}
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Current Card - Center (Main) */}
          <div
            className={`transition-all duration-700 ease-out ${
              hoveredProduct === currentIndex ? "w-full scale-105" : "w-1/2 scale-100"
            }`}
          >
            <Card
              key={currentIndex}
              className="group h-[350px] hover:h-[600px] hover:shadow-2xl transition-all duration-700 ease-out border border-primary/20 hover:border-primary hover:scale-105 bg-card/50 backdrop-blur overflow-hidden relative"
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredProduct(currentIndex);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredProduct(null);
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-700 ease-out">
                    <currentProduct.icon className="h-6 w-6 text-gray-500 group-hover:text-primary transition-all duration-700 ease-out" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-all duration-700 ease-out">
                    {currentProduct?.name}
                  </CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{currentProduct?.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                {currentProduct?.hasMetrics ? (
                  <div className="space-y-4">
                    {/* Mobile: Always show all details */}
                    <div className="block md:hidden">
                      {currentProduct?.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>
                          {typeof feature === "object" ? (
                            <AnimatedMetric feature={feature} isHovered={true} />
                          ) : (
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                      {/* Desktop: Hover-based display */}
                      <div className="hidden md:block relative min-h-[280px]">
                        {/* Default state - simple features list */}
                        <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-all duration-500 ease-out">
                        <div className="space-y-3">
                          {currentProduct?.features.slice(0, 5).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {typeof feature === "object" ? feature.name : feature}
                              </span>
                            </div>
                          ))}
                          {currentProduct?.features.length > 5 && (
                            <div className="text-xs text-muted-foreground/60 italic">
                              +{currentProduct.features.length - 5} more metrics...
                            </div>
                          )}
                        </div>
                      </div>

                        {/* Hover state - detailed metrics with animations and scroll */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                        <div className="overflow-hidden pr-2">
                          <div className="space-y-4 pb-2">
                            {currentProduct?.features.map((feature, featureIndex) => (
                              <div key={featureIndex}>
                                {typeof feature === "object" ? (
                                  <AnimatedMetric feature={feature} isHovered={hoveredProduct === currentIndex} />
                                ) : (
                                  <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {currentProduct?.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {typeof feature === "string" ? feature : feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Next Card - Right Side */}
          <div
            className={`transition-all duration-700 ease-out ${
              hoveredProduct === currentIndex ? "w-0 opacity-0 scale-75" : "w-1/4 opacity-60 scale-90"
            }`}
          >
            <Card
              className="group h-[350px] transition-all duration-700 ease-out border border-primary/10 bg-card/30 backdrop-blur overflow-hidden relative cursor-pointer hover:border-primary/20 hover:scale-95"
              onClick={() => handleCardClick(nextIndex)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <nextProduct.icon className="h-6 w-6 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{nextProduct?.name}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {nextProduct?.description}
                </p>
              </CardHeader>
            </Card>
          </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-out hover:scale-125 ${
                index === activeIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-500 ease-out hover:scale-105"
          >
            <Link href="/products">
              Explore More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
