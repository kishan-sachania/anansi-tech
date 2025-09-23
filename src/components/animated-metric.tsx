"use client";

import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function useCountUp(
  end: number,
  start = 0,
  duration = 1000,
  shouldStart = false
) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!shouldStart || !isVisible) {
      setCount(start);
      return;
    }

    let startTime: number;
    let lastUpdateTime = 0;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      // Only update every 100ms to slow down the animation
      if (currentTime - lastUpdateTime < 100) {
        requestAnimationFrame(animate);
        return;
      }
      lastUpdateTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      // Use smaller increments for smoother progression
      const increment = Math.max(1, Math.floor((end - start) / 50)); // Divide into ~50 steps
      const steppedCount = Math.floor(currentCount / increment) * increment;

      setCount(Math.min(steppedCount, end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, start, duration, shouldStart, isVisible]);

  return { count, ref };
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
  const totalDuration = 3000;
  const { count: oldCount, ref: oldRef } = useCountUp(
    feature.oldValue,
    0,
    totalDuration,
    isHovered
  );

  const { count: newCount, ref: newRef } = useCountUp(
    feature.newValue,
    feature.oldValue,
    totalDuration,
    isHovered
  );
  const [progress, setProgress] = useState(0);
  const [manualProgress, setManualProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isHovered || !isVisible) {
      setProgress(0);
      setManualProgress(0);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const ratio = Math.min(elapsed / totalDuration, 1);

      // easeOutQuart
      const eased = 1 - Math.pow(1 - ratio, 4);
      
      // Both bars fill at the same visual speed
      const erpCurrent = feature.newValue * eased;
      const manualCurrent = feature.oldValue * eased;

      setProgress(erpCurrent);
      setManualProgress(manualCurrent);

      if (ratio < 1) requestAnimationFrame(animate);
      else {
        setProgress(feature.newValue);
        setManualProgress(feature.oldValue);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [feature.newValue, feature.oldValue, isHovered, isVisible]);

  return (
    <div ref={containerRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-md font-medium text-foreground">
          {feature.name}
        </span>
        <div
          className={`flex items-center space-x-1 text-xs font-bold ${
            oldCount < newCount ? "text-green-500" : "text-red-500"
          }`}
        >
          {oldCount < newCount ? (
            <ArrowUp className="h-3 w-3" />
          ) : (
            <ArrowDown className="h-3 w-3" />
          )}{" "}
          <span>+{feature.improvement}%</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm gap-1">
        <Progress
          value={manualProgress}
          className="h-2"
          progressbarClassName="bg-muted-foreground/40"
        />
        <span className="text-muted-foreground/80  flex">
          Manual: <span ref={oldRef}>{oldCount}%</span>
        </span>
      </div>
      <div className="flex items-center justify-between text-sm gap-1">
        <Progress 
          value={progress} 
          className="h-2"
        />
        <span className="font-semibold  text-primary flex">
          ERP: <span ref={newRef}>{newCount}%</span>
        </span>
      </div>
    </div>
  );
}
