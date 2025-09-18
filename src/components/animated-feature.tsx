"use client";

import { CheckCircle } from "lucide-react";
import { CountUp } from "./count-up";

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

  return (
    <li
      className={`flex items-center text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-500 ${className}`}
    >
      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 group-hover:text-white transition-colors duration-500" />
      <span>
        {textBefore}
        {percentageData !== null ? (
          isHovered ? (
            <span className="font-semibold text-primary group-hover:text-white transition-colors duration-500">
              {percentageData.sign}
              <CountUp
                end={percentageData.value}
                duration={1500}
                start={0}
                suffix="%"
                className="font-semibold text-primary group-hover:text-white transition-colors duration-500"
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
    </li>
  );
}
