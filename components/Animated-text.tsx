"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function AnimatedText({ text, className = "", delay = 500, speed = 100 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Initial delay before typing starts
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    let currentIndex = 0

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1))
        currentIndex++
        timeoutRef.current = setTimeout(typeNextChar, speed)
      } else {
        setIsTyping(false)
      }
    }

    timeoutRef.current = setTimeout(typeNextChar, speed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, speed, isTyping])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <h1 className={className}>
      {displayedText}
      <span
        className={`inline-block w-[0.05em] h-[1.1em] bg-teal-500 ml-1 -mb-[0.1em] ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
        aria-hidden="true"
      />
    </h1>
  )
}

