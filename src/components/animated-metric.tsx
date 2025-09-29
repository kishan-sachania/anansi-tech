"use client";

import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

function useCountUp(
  end: number,
  start = 0,
  duration = 2500,
  shouldStart = false
) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

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

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!shouldStart || !isVisible) {
      setCount(start);
      return;
    }

    const startTime = performance.now();
    lastUpdateRef.current = 0;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Only update every 50ms for smoother, slower animation
      if (currentTime - lastUpdateRef.current < 50) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateRef.current = currentTime;
      
      // Very gentle ease-out for smooth movement
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(start + (end - start) * eased);
      
      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
  const totalDuration = 2500; // Increased from 1500ms for slower animation
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
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

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

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isHovered || !isVisible) {
      setProgress(0);
      setManualProgress(0);
      return;
    }

    const startTime = performance.now();
    lastUpdateRef.current = 0;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const ratio = Math.min(elapsed / totalDuration, 1);
      
      // Only update every 50ms for smoother, slower animation
      if (currentTime - lastUpdateRef.current < 50) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateRef.current = currentTime;
      
      // Very gentle ease-out for smooth movement
      const eased = 1 - Math.pow(1 - ratio, 3);
      
      const erpCurrent = Math.round(feature.newValue * eased);
      const manualCurrent = Math.round(feature.oldValue * eased);

      setProgress(erpCurrent);
      setManualProgress(manualCurrent);

      if (ratio < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(feature.newValue);
        setManualProgress(feature.oldValue);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [feature.newValue, feature.oldValue, isHovered, isVisible, totalDuration]);

  // Memoize the improvement display to prevent unnecessary re-renders
  const improvementDisplay = useMemo(() => (
    <div
      className={`flex items-center space-x-1 text-xs font-bold ${
        oldCount < newCount ? "text-green-500" : "text-red-500"
      }`}
    >
      {oldCount < newCount ? (
        <ArrowUp className="h-3 w-3" />
      ) : (
        <ArrowDown className="h-3 w-3" />
      )}
      <span>+{feature.improvement}%</span>
    </div>
  ), [oldCount, newCount, feature.improvement]);

  return (
    <div ref={containerRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-md font-medium text-foreground">
          {feature.name}
        </span>
        {improvementDisplay}
      </div>
      <div className="flex items-center justify-between text-sm gap-1">
        <Progress
          value={manualProgress}
          className="h-2"
          progressbarClassName="bg-muted-foreground/40"
        />
        <span className="text-muted-foreground/80 flex">
          Manual: <span ref={oldRef}>{oldCount}%</span>
        </span>
      </div>
      <div className="flex items-center justify-between text-sm gap-1">
        <Progress 
          value={progress} 
          className="h-2"
        />
        <span className="font-semibold text-primary flex">
          ERP: <span ref={newRef}>{newCount}%</span>
        </span>
      </div>
    </div>
  );
}
