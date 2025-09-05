"use client"

import { motion } from "framer-motion"

interface BlurBubbleProps {
  size: number
  color: string
  delay: number
  duration: number
  initialX: string | number
  initialY: string | number
}

function BlurBubble({ size, color, delay, duration, initialX, initialY }: BlurBubbleProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-none opacity-100"
      style={{
        width: size,
        height: size,
        background: color,
        left: initialX,
        top: initialY,
        zIndex: 5,
      }}
      animate={{
        x: [0, 200, -150, 100, 0],
        y: [0, -150, 200, -100, 0],
        scale: [1, 1.5, 0.8, 1.2, 1],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function BlurBubbles() {
  // Remove the mounting check for now to test
  console.log("BlurBubbles rendering")

  // Very bright, highly visible colors using your theme
  const colors = [
    "radial-gradient(circle, hsl(var(--primary) / 1) 0%, hsl(var(--primary) / 0.6) 30%, hsl(var(--primary) / 0.3) 60%, transparent 80%)",
    "radial-gradient(circle, hsl(var(--secondary) / 0.9) 0%, hsl(var(--secondary) / 0.5) 30%, hsl(var(--secondary) / 0.2) 60%, transparent 80%)",
    "radial-gradient(circle, hsl(var(--accent) / 0.8) 0%, hsl(var(--accent) / 0.4) 30%, hsl(var(--accent) / 0.2) 60%, transparent 80%)",
    "radial-gradient(circle, hsl(var(--muted-foreground) / 0.7) 0%, hsl(var(--muted-foreground) / 0.3) 30%, hsl(var(--muted-foreground) / 0.1) 60%, transparent 80%)",
  ]

  const bubbles = [
    {
      size: 400,
      color: colors[0],
      delay: 0,
      duration: 15,
      initialX: "15%",
      initialY: "25%",
    },
    {
      size: 350,
      color: colors[1],
      delay: 3,
      duration: 18,
      initialX: "75%",
      initialY: "20%",
    },
    {
      size: 500,
      color: colors[2],
      delay: 6,
      duration: 20,
      initialX: "50%",
      initialY: "60%",
    },
    {
      size: 300,
      color: colors[3],
      delay: 2,
      duration: 16,
      initialX: "25%",
      initialY: "75%",
    },
    {
      size: 450,
      color: colors[0],
      delay: 4,
      duration: 22,
      initialX: "85%",
      initialY: "80%",
    },
    {
      size: 320,
      color: colors[1],
      delay: 8,
      duration: 14,
      initialX: "5%",
      initialY: "50%",
    },
    {
      size: 380,
      color: colors[2],
      delay: 1,
      duration: 17,
      initialX: "95%",
      initialY: "45%",
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Test bubble to ensure visibility */}
      <div 
        className="absolute w-32 h-32 bg-red-500 rounded-full opacity-80 z-50"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      />
      <div 
        className="absolute w-20 h-20 bg-blue-500 rounded-full opacity-80 z-50"
        style={{ left: '20%', top: '20%' }}
      />
      <div 
        className="absolute w-20 h-20 bg-green-500 rounded-full opacity-80 z-50"
        style={{ left: '80%', top: '80%' }}
      />
      
      {/* Define a roaming area with boundaries */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-10">
        {bubbles.map((bubble, index) => (
          <BlurBubble
            key={index}
            size={bubble.size}
            color={bubble.color}
            delay={bubble.delay}
            duration={bubble.duration}
            initialX={bubble.initialX}
            initialY={bubble.initialY}
          />
        ))}
      </div>
    </div>
  )
}
