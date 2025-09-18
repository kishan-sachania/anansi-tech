"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Users, Briefcase, FolderOpen, Shield, ArrowRight, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

function useCountUp(end: number, start = 0, duration = 1000, shouldStart = false) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!shouldStart) {
      setCount(start)
      return
    }

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = start + (end - start) * easeOutQuart

      setCount(Math.floor(currentCount))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, start, duration, shouldStart])

  return count
}

function AnimatedMetric({
  feature,
  isHovered,
}: {
  feature: { name: string; oldValue: number; newValue: number; improvement: number }
  isHovered: boolean
}) {
  const oldCount = useCountUp(feature.oldValue, 0, 1500, isHovered)
  const newCount = useCountUp(feature.newValue, feature.oldValue, 2000, isHovered)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isHovered) {
      setProgress(0)
      return
    }

    const timer = setTimeout(() => {
      setProgress(feature.newValue)
    }, 500)

    return () => clearTimeout(timer)
  }, [feature.newValue, isHovered])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{feature.name}</span>
        <div className="flex items-center space-x-1 text-xs font-bold text-green-600">
          <ArrowUp className="h-3 w-3" />
          <span>+{feature.improvement}%</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Before: {oldCount}%</span>
        <span className="font-semibold text-primary">Now: {newCount}%</span>
      </div>
      <Progress value={progress} className="h-2 transition-all duration-[1800ms] ease-out" />
    </div>
  )
}

const products = [
  {
    title: "Finance & Accounting",
    description: "Streamline your financial operations with automated processes",
    icon: TrendingUp,
    features: [
      { name: "Invoice processing time", oldValue: 7, newValue: 1, improvement: 85 },
      { name: "GST/TDS filing accuracy", oldValue: 75, newValue: 98, improvement: 23 },
      { name: "Bank reconciliation speed", oldValue: 40, newValue: 90, improvement: 50 },
      { name: "Monthly closing time", oldValue: 15, newValue: 3, improvement: 80 },
      { name: "Expense tracking visibility", oldValue: 30, newValue: 95, improvement: 65 },
      { name: "Financial reporting speed", oldValue: 25, newValue: 85, improvement: 60 },
      { name: "Audit preparation time", oldValue: 60, newValue: 20, improvement: 67 },
    ],
    color: "from-blue-500 to-cyan-500",
    hasMetrics: true,
  },
  {
    title: "Sales & CRM",
    description: "Boost your sales performance with intelligent customer management",
    icon: TrendingUp,
    features: [
      { name: "Lead conversion growth", oldValue: 15, newValue: 43, improvement: 28 },
      { name: "Faster quotation turnaround", oldValue: 20, newValue: 80, improvement: 60 },
      { name: "Shorter sales cycle", oldValue: 45, newValue: 65, improvement: 20 },
      { name: "Faster customer response", oldValue: 30, newValue: 75, improvement: 45 },
      { name: "Lower customer acquisition cost", oldValue: 70, newValue: 85, improvement: 15 },
      { name: "Customer satisfaction rate", oldValue: 60, newValue: 92, improvement: 32 },
      { name: "Sales team productivity", oldValue: 35, newValue: 78, improvement: 43 },
    ],
    color: "from-purple-500 to-pink-500",
    hasMetrics: true,
  },
  {
    title: "Manufacturing",
    description: "Optimize production processes and quality control",
    icon: Briefcase,
    features: [
      { name: "Production efficiency", oldValue: 65, newValue: 88, improvement: 23 },
      { name: "Work order completion", oldValue: 70, newValue: 95, improvement: 25 },
      { name: "Production planning accuracy", oldValue: 55, newValue: 85, improvement: 30 },
      { name: "Shop floor visibility", oldValue: 40, newValue: 90, improvement: 50 },
      { name: "Quality management score", oldValue: 75, newValue: 96, improvement: 21 },
      { name: "Production lead time reduction", oldValue: 30, newValue: 75, improvement: 45 },
      { name: "Equipment utilization", oldValue: 60, newValue: 87, improvement: 27 },
    ],
    color: "from-green-500 to-emerald-500",
    hasMetrics: true,
  },
  {
    title: "Human Resources",
    description: "Manage your workforce efficiently with automated HR processes",
    icon: Users,
    features: [
      { name: "Employee record accuracy", oldValue: 70, newValue: 98, improvement: 28 },
      { name: "Appraisal completion rate", oldValue: 60, newValue: 95, improvement: 35 },
      { name: "Employee satisfaction", oldValue: 65, newValue: 88, improvement: 23 },
      { name: "Leave approval speed", oldValue: 48, newValue: 2, improvement: 96 },
      { name: "Overtime cost reduction", oldValue: 25, newValue: 75, improvement: 50 },
      { name: "Training completion rate", oldValue: 55, newValue: 89, improvement: 34 },
      { name: "HR process efficiency", oldValue: 45, newValue: 82, improvement: 37 },
    ],
    color: "from-orange-500 to-red-500",
    hasMetrics: true,
  },
  {
    title: "Projects",
    description: "Deliver projects on time with better resource management",
    icon: FolderOpen,
    features: [
      { name: "Project completion rate", oldValue: 70, newValue: 92, improvement: 22 },
      { name: "Resource allocation efficiency", oldValue: 55, newValue: 85, improvement: 30 },
      { name: "Project delivery timeline", oldValue: 60, newValue: 88, improvement: 28 },
      { name: "Resource utilization", oldValue: 65, newValue: 90, improvement: 25 },
      { name: "Budget adherence", oldValue: 75, newValue: 94, improvement: 19 },
      { name: "Team collaboration score", oldValue: 50, newValue: 86, improvement: 36 },
      { name: "Project visibility", oldValue: 40, newValue: 95, improvement: 55 },
    ],
    color: "from-indigo-500 to-purple-500",
    hasMetrics: true,
  },
  {
    title: "Quality Control",
    description: "Maintain high standards with comprehensive quality management",
    icon: Shield,
    features: [
      { name: "Rejection rate reduction", oldValue: 15, newValue: 3, improvement: 80 },
      { name: "Customer complaint reduction", oldValue: 25, newValue: 5, improvement: 80 },
      { name: "Inspection compliance", oldValue: 80, newValue: 98, improvement: 18 },
      { name: "NCR resolution speed", oldValue: 40, newValue: 85, improvement: 45 },
      { name: "Defect prevention", oldValue: 60, newValue: 92, improvement: 32 },
      { name: "Quality audit scores", oldValue: 75, newValue: 96, improvement: 21 },
      { name: "Process standardization", oldValue: 55, newValue: 89, improvement: 34 },
    ],
    color: "from-teal-500 to-blue-500",
    hasMetrics: true,
  },
]

export function ProductsSection() {
  const [hoveredProductIndex, setHoveredProductIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-balance mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Powerful ERP modules to streamline every aspect of your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon

            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-500 border-0 bg-card/50 backdrop-blur overflow-hidden relative"
                onMouseEnter={() => setHoveredProductIndex(index)}
                onMouseLeave={() => setHoveredProductIndex(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${product.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Module
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {product.hasMetrics ? (
                    <div className="relative min-h-[280px]">
                      {/* Default state - simple features list */}
                      <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <div className="space-y-3">
                          {product.features.slice(0, 5).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {typeof feature === "object" ? feature.name : feature}
                              </span>
                            </div>
                          ))}
                          {product.features.length > 5 && (
                            <div className="text-xs text-muted-foreground/60 italic">
                              +{product.features.length - 5} more metrics...
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Hover state - detailed metrics with animations and scroll */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent pr-2">
                          <div className="space-y-4 pb-2">
                            {product.features.map((feature, featureIndex) => (
                              <div key={featureIndex}>
                                {typeof feature === "object" ? (
                                  <AnimatedMetric feature={feature} isHovered={hoveredProductIndex === index} />
                                ) : (
                                  <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
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
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="group">
            Explore More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
