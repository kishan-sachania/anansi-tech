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
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = start + (end - start) * easeOutCubic;

      setCount(Math.floor(currentCount));

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
  const { count: oldCount, ref: oldRef } = useCountUp(
    feature.oldValue,
    0,
    3000,
    isHovered
  );
  const { count: newCount, ref: newRef } = useCountUp(
    feature.newValue,
    feature.oldValue,
    4000,
    isHovered
  );
  const [progress, setProgress] = useState(0);
  const [oldProgress, setOldProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      setOldProgress(0);
      setIsLoading(false);
      return;
    }

    // Start loading effect
    setIsLoading(true);

    // Smooth progress for both old and new values
    let currentNewProgress = 0;
    let currentOldProgress = 0;
    const targetNewProgress = feature.newValue;
    const targetOldProgress = feature.oldValue;
    
    const newIncrement = Math.max(1, Math.ceil(targetNewProgress / 50));
    const oldIncrement = Math.max(1, Math.ceil(targetOldProgress / 50));
    const intervalDelay = 100;

    const progressInterval = setInterval(() => {
      // Update new progress (ERP)
      if (currentNewProgress < targetNewProgress) {
        currentNewProgress += newIncrement;
        if (currentNewProgress >= targetNewProgress) {
          currentNewProgress = targetNewProgress;
        }
        setProgress(currentNewProgress);
      }
      
      // Update old progress (Manual)
      if (currentOldProgress < targetOldProgress) {
        currentOldProgress += oldIncrement;
        if (currentOldProgress >= targetOldProgress) {
          currentOldProgress = targetOldProgress;
        }
        setOldProgress(currentOldProgress);
      }
      
      // Stop loading when both reach their targets
      if (currentNewProgress >= targetNewProgress && currentOldProgress >= targetOldProgress) {
        setIsLoading(false);
        clearInterval(progressInterval);
      }
    }, intervalDelay);

    return () => {
      clearInterval(progressInterval);
      setIsLoading(false);
    };
  }, [feature.newValue, feature.oldValue, isHovered, isVisible]);

  return (
    <div ref={containerRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
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
      <div className="flex items-center justify-between text-xs gap-2">
        <div className="flex-1 relative">
          <Progress
            value={oldProgress}
            className={`h-2 transition-all duration-300 ease-out ${
              isLoading ? 'animate-pulse' : ''
            }`}
            progressbarClassName={`${
              isLoading 
                ? 'bg-muted-foreground/40 animate-pulse' 
                : 'bg-muted-foreground/40'
            }`}
          />
        </div>
        <span className="text-muted-foreground/80 flex">
          Manual: <span ref={oldRef}>{oldCount}%</span>
        </span>
      </div>
      <div className="flex items-center justify-between text-xs gap-2">
        <div className="flex-1 relative">
          <Progress
            value={progress}
            className={`h-2 transition-all duration-300 ease-out ${
              isLoading ? 'animate-pulse' : ''
            }`}
            progressbarClassName={`${
              isLoading 
                ? 'bg-primary animate-pulse' 
                : 'bg-primary'
            }`}
          />
        </div>
        <span className="font-semibold text-primary flex">
          ERP: <span ref={newRef}>{newCount}%</span>
        </span>
      </div>
    </div>
  );
}
