"use client";

import { Progress } from "@/components/ui/progress";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

function useCountUp(end: number, start = 0, duration = 1000, shouldStart = false) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) {
      setCount(start);
      return;
    }

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      setCount(Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, start, duration, shouldStart]);

  return count;
}

interface AnimatedMetricProps {
  feature: {
    name: string;
    oldValue: number;
    newValue: number;
    improvement: number;
  };
  isHovered: boolean;
}

export function AnimatedMetric({ feature, isHovered }: AnimatedMetricProps) {
  const oldCount = useCountUp(feature.oldValue, 0, 1500, isHovered);
  const newCount = useCountUp(feature.newValue, feature.oldValue, 2000, isHovered);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setProgress(0);
      return;
    }

    const timer = setTimeout(() => {
      setProgress(feature.newValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [feature.newValue, isHovered]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{feature.name}</span>
        <div className="flex items-center space-x-1 text-xs font-bold text-green-300">
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
  );
}
