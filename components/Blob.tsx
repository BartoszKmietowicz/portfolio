"use client"

import { useEffect, useRef } from "react"

export function GradientBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient
    const drawGradient = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.5,
        0,
        canvas.width * 0.8,
        canvas.height * 0.5,
        canvas.width * 0.5,
      )

      gradient.addColorStop(0, "rgba(153, 246, 228,0.8") // Light Teal
      gradient.addColorStop(0.5, "rgba(20 ,184, 166, 0.4)") // Teal
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)") // Transparent

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    drawGradient()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />
  )
}

export default GradientBlob;