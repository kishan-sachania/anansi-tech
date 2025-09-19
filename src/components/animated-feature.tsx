"use client";

import { CheckCircle } from "lucide-react";
import { CountUp } from "./count-up";
import { useState, useEffect, useRef } from "react";

interface AnimatedFeatureProps {
  feature: string;
  isHovered?: boolean;
  className?: string;
}

export function AnimatedFeature({ 
  feature, 
  isHovered = false, 
  className = "" 
}: AnimatedFeatureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLLIElement>(null);

  // Extract percentage and sign from feature text
  const extractPercentageAndSign = (text: string) => {
    const percentageMatch = text.match(/([+-]?)(\d+)%/);
    if (percentageMatch) {
      return {
        sign: percentageMatch[1] || '',
        value: parseInt(percentageMatch[2])
      };
    }
    return null;
  };

  // Extract the text before the percentage
  const extractTextBeforePercentage = (text: string) => {
    const percentageMatch = text.match(/([+-]?)(\d+)%/);
    if (percentageMatch) {
      return text.substring(0, text.indexOf(percentageMatch[0]));
    }
    return text;
  };

  // Extract the text after the percentage
  const extractTextAfterPercentage = (text: string) => {
    const percentageMatch = text.match(/([+-]?)(\d+)%/);
    if (percentageMatch) {
      return text.substring(text.indexOf(percentageMatch[0]) + percentageMatch[0].length);
    }
    return "";
  };

  const percentageData = extractPercentageAndSign(feature);
  const textBefore = extractTextBeforePercentage(feature);
  const textAfter = extractTextAfterPercentage(feature);

  // Calculate default value as 50-70% of the dynamic value
  const getDefaultValue = () => {
    if (percentageData) {
      const minPercent = 0.5; // 50%
      const maxPercent = 0.7; // 70%
      const randomFactor = minPercent + Math.random() * (maxPercent - minPercent);
      return Math.round(percentageData.value * randomFactor);
    }
    return 60; // fallback if no percentage data
  };
  
  const defaultValue = getDefaultValue();

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
      return;
    }

    const timer = setTimeout(() => {
      if (percentageData) {
        setProgress(percentageData.value);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [isHovered, isVisible, percentageData]);

  return (
    <li
      ref={containerRef}
      className={`flex flex-col text-sm text-foreground group-hover:text-foreground transition-colors duration-500 ${className}`}
    >
      <div className="flex items-center">
        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 group-hover:text-white transition-colors duration-500" />
        <span>
          {textBefore}
          {percentageData !== null ? (
            isHovered ? (
              <span className="font-semibold text-primary group-hover:text-primary transition-colors duration-500">
                {percentageData.sign}
                <CountUp
                  end={percentageData.value}
                  duration={800}
                  start={0}
                  suffix="%"
                  className="font-semibold text-primary group-hover:text-primary transition-colors duration-500"
                />
              </span>
            ) : (
              <span className="opacity-0">
                {percentageData.sign}{percentageData.value}%
              </span>
            )
          ) : null}
          {textAfter}
        </span>
      </div>
      
      {/* Progress bars container - only show for features with percentage values */}
      {percentageData !== null && (
        <div className={`mt-1 space-y-1 transition-all duration-500 ease-in-out overflow-hidden ${
          isHovered 
            ? 'opacity-100 max-h-20' 
            : 'opacity-0 max-h-0'
        }`}>
          {/* Default progress bar (50-70% of dynamic value) */}
          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className={`bg-primary h-1 rounded-full transition-all duration-800 ease-in-out ${isHovered ? 'animate-in slide-in-from-left-2' : ''}`}
              style={{ 
                width: `${isVisible && isHovered ? defaultValue : 0}%`,
                animationDelay: isHovered ? '100ms' : '0ms',
                animationFillMode: 'forwards'
              }}
            />
          </div>
          
          {/* Dynamic progress bar based on percentage value */}
          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className={`bg-primary h-1 rounded-full transition-all duration-800 ease-in-out ${isHovered ? 'animate-in slide-in-from-left-2' : ''}`}
              style={{ 
                width: `${isVisible && isHovered ? progress : 0}%`,
                animationDelay: isHovered ? '200ms' : '0ms',
                animationFillMode: 'forwards'
              }}
            />
          </div>
        </div>
      )}
    </li>
  );
}
