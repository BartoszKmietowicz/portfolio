"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Server, FileJson, Database, Globe, Palette, Layers, GitBranch, Braces } from "lucide-react"
import RevealText from "@/components/Reveal-text"
interface Technology {
  name: string
  color: string
  icon: React.ReactNode
}

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const technologies: Technology[] = [
    {
      name: "React",
      color: "#61DAFB",
      icon: <Code2 size={24} />,
    },
    {
      name: "Next.js",
      color: "#FFFFFF",
      icon: <Braces size={24} />,
    },
    {
      name: "Node.js",
      color: "#339933",
      icon: <Server size={24} />,
    },
    {
      name: "SCSS",
      color: "#CC6699",
      icon: <Palette size={24} />,
    },
    {
      name: "Spring",
      color: "#6DB33F",
      icon: <Layers size={24} />,
    },
    {
      name: "Prisma",
      color: "#2D3748",
      icon: <Database size={24} />,
    },
    {
      name: "MSSQL",
      color: "#CC2927",
      icon: <Database size={24} />,
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: <FileJson size={24} />,
    },
    {
      name: "HTML5",
      color: "#E34F26",
      icon: <Globe size={24} />,
    },
    {
      name: "CSS3",
      color: "#1572B6",
      icon: <Palette size={24} />,
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      icon: <Braces size={24} />,
    },
    {
      name: "Git",
      color: "#F05032",
      icon: <GitBranch size={24} />,
    },
    {
      name: "MongoDB",
      color: "#47A248",
      icon: <Database size={24} />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="py-20">
      <RevealText delay={0.1}>
        <h2 className="text-2xl font-medium mb-12">Tech Stack</h2>
      </RevealText>
      <div ref={ref}>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="text-sm text-zinc-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  )
}

