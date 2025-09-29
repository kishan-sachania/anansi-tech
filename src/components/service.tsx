import React, { memo, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Service as ServiceInterface } from "./slideshow";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { categoryWiseServices } from "./schema/service";
import { useTheme } from "@/contexts/theme-context";

interface ServiceCardProps {
  service: ServiceInterface;
  index: number;
  isHovered?: boolean;
}

interface ServiceProps {
  activeCategory: number;
  animationPhase: string;
  //   currentCategoryCards: ServiceInterface[];
  hoveredCard: number | null;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  setActiveCategory: (category: number) => void;
  setManualSwitch: (manualSwitch: boolean) => void;
  setAnimationPhase: (animationPhase: string) => void;
}
// Memoized ServiceAccordionItem component
const ServiceAccordionItem = memo(({ service, index }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = service.icon;

  return (
    <Card className="mb-4 border-border/50 hover:shadow-lg transition-all duration-150">
      <CardHeader 
        className="cursor-pointer hover:bg-muted/30 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            <span className="text-foreground font-semibold">
              {service.title}
            </span>
          </span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </CardTitle>
      </CardHeader>
      
      {isOpen && (
        <CardContent className="pt-0">
          <p className="text-muted-foreground leading-relaxed">
            {service.desc}
          </p>
        </CardContent>
      )}
    </Card>
  );
});

ServiceAccordionItem.displayName = "ServiceAccordionItem";

// Memoized ServiceCard component for desktop
const ServiceCard = memo(({ service, index, isHovered }: ServiceCardProps) => {
  const IconComponent = service.icon;
  return (
    <Card
      key={index}
      className={`border-border/50 hover:shadow-lg transition-all duration-150 flex flex-col ${
        isHovered
          ? "scale-105 shadow-2xl ring-2 ring-primary/50 bg-primary/5 z-10"
          : "hover:scale-102"
      }`}
    >
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <div
            className={`p-2 rounded-lg transition-colors duration-150 ${
              isHovered ? "bg-primary/10" : "bg-muted/50"
            }`}
          >
            <IconComponent
              className={`h-5 w-5 transition-colors duration-150 ${
                isHovered ? "text-primary" : "text-muted-foreground"
              }`}
            />
          </div>
          <span className={isHovered ? "text-primary" : ""}>
            {service.title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p
          className={`transition-colors duration-150 flex-grow ${
            isHovered ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {service.desc}
        </p>
      </CardContent>
    </Card>
  );
});

ServiceCard.displayName = "ServiceCard";

const Service = ({
  activeCategory,
  animationPhase,
  //   currentCategoryCards,
  hoveredCard,
  handleMouseEnter,
  handleMouseLeave,
  setActiveCategory,
  setManualSwitch,
  setAnimationPhase,
}: ServiceProps) => {
  const { theme } = useTheme();

  const currentCategoryCards = categoryWiseServices[activeCategory]?.cards;

  return (
    <>
      {/* Filter Segments */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categoryWiseServices?.map((category, index) => (
          <Button
            key={category.category}
            variant={activeCategory === index ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveCategory(index);
              setManualSwitch(true);
              setAnimationPhase("in");
              setTimeout(() => setAnimationPhase("idle"), 500);
            }}
            className={`text-sm capitalize ${
              activeCategory === index || theme === "dark"
                ? "text-white"
                : "text-black"
            }`}
          >
            {category.category}
          </Button>
        ))}
      </div>
      {/* Mobile Accordion View - Only on sm screens */}
      <div className="block sm:block md:hidden mb-12">
        <div className="relative px-4">
          <div
            key={activeCategory}
            className={`space-y-4 ${
              animationPhase === "out"
                ? "animate-slide-out-left"
                : animationPhase === "in"
                ? "animate-slide-in-right"
                : ""
            }`}
          >
            {currentCategoryCards?.map(
              (service: ServiceInterface, idx: number) => (
                <ServiceAccordionItem
                  key={`${activeCategory}-${idx}`}
                  service={service}
                  index={idx}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Desktop Card View - md screens and above */}
      <div className="hidden md:block mb-12">
        <div className="relative px-8 py-4">
          <div
            key={activeCategory}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
              animationPhase === "out"
                ? "animate-slide-out-left"
                : animationPhase === "in"
                ? "animate-slide-in-right"
                : ""
            }`}
          >
            {currentCategoryCards?.map(
              (service: ServiceInterface, idx: number) => (
                <div
                  key={`${activeCategory}-${idx}`}
                  className={`transition-all duration-150 flex ${
                    hoveredCard === idx
                      ? "z-10"
                      : hoveredCard !== null
                      ? "blur-[1px]"
                      : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ServiceCard
                    service={service}
                    index={idx}
                    isHovered={hoveredCard === idx}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
