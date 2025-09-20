import type React from "react"

interface MetricFeature {
  name: string
  value: string
  change?: string
  trend?: "up" | "down" | "neutral"
}

interface AnimatedMetricProps {
  feature: MetricFeature
  isHovered: boolean
}

export const AnimatedMetric: React.FC<AnimatedMetricProps> = ({ feature, isHovered }) => {
  return (
    <div className={`transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-80"}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{feature.name}</span>
        <span className="text-sm font-bold text-primary">{feature.value}</span>
      </div>
      {feature.change && (
        <div className="text-xs text-muted-foreground mt-1">
          <span
            className={`${
              feature.trend === "up"
                ? "text-green-500"
                : feature.trend === "down"
                  ? "text-red-500"
                  : "text-muted-foreground"
            }`}
          >
            {feature.change}
          </span>
        </div>
      )}
    </div>
  )
}
