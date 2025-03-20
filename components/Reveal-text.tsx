"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealText;