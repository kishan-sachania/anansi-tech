"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedMetric } from "@/components/animated-metric"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/components/schema/product"

interface ProductProps {
  activeCategory: number
  animationPhase: string
  hoveredCard: number | null
  handleMouseEnter: (index: number) => void
  handleMouseLeave: () => void
  setActiveCategory: (category: number) => void
  setManualSwitch: (manualSwitch: boolean) => void
  setAnimationPhase: (animationPhase: string) => void
}

const Product = ({
  activeCategory,
  animationPhase,
  hoveredCard,
  handleMouseEnter,
  handleMouseLeave,
  setActiveCategory,
  setManualSwitch,
  setAnimationPhase,
}: ProductProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const totalProducts = products.length
  const prevIndex = (activeCategory - 1 + totalProducts) % totalProducts
  const currentIndex = activeCategory
  const nextIndex = (activeCategory + 1) % totalProducts

  const prevProduct = products[prevIndex]
  const currentProduct = products[currentIndex]
  const nextProduct = products[nextIndex]

  return (
    <>
      <section id="products" className="pb-10 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-full gap-4 relative">
            {/* Previous Card - Left Side */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                hoveredProduct === currentIndex ? "w-0 opacity-0 scale-75" : "w-1/4 opacity-60 scale-90"
              }`}
            >
              <Card
                className="group h-[350px] transition-all duration-500 border border-primary/10 bg-card/30 backdrop-blur overflow-hidden relative cursor-pointer"
                onClick={() => {
                  setActiveCategory(prevIndex)
                  setManualSwitch(true)
                }}
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
              className={`transition-all duration-500 ease-in-out ${
                hoveredProduct === currentIndex ? "w-full scale-105" : "w-1/2 scale-100"
              } ${
                animationPhase === "out"
                  ? "animate-slide-out-left"
                  : animationPhase === "in"
                    ? "animate-slide-in-right"
                    : ""
              }`}
            >
              <Card
                key={currentIndex}
                className="group h-[350px] hover:h-[600px] hover:shadow-lg transition-all duration-500 border border-primary/20 hover:border-primary hover:scale-105 bg-card/50 backdrop-blur overflow-hidden relative"
                onMouseEnter={() => {
                  setHoveredProduct(currentIndex)
                  handleMouseEnter(currentIndex)
                }}
                onMouseLeave={() => {
                  setHoveredProduct(null)
                  handleMouseLeave()
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                      <currentProduct.icon className="h-6 w-6 text-gray-500 group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
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
                      <div className="hidden md:block relative min-h-[280px] ">
                        {/* Default state - simple features list */}
                        <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
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
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
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
              className={`transition-all duration-500 ease-in-out ${
                hoveredProduct === currentIndex ? "w-0 opacity-0 scale-75" : "w-1/4 opacity-60 scale-90"
              }`}
            >
              <Card
                className="group h-[350px] transition-all duration-500 border border-primary/10 bg-card/30 backdrop-blur overflow-hidden relative cursor-pointer"
                onClick={() => {
                  setActiveCategory(nextIndex)
                  setManualSwitch(true)
                }}
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

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary bg-tranhover:bg-primary  hover:text-white"
            >
              <Link href="/products">
                Explore More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
