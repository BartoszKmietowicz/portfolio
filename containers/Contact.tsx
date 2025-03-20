"use client"


import RevealText from "../components/Reveal-text";
import Link from "next/link";

import {Github,Phone,Mail, Linkedin} from "lucide-react"
export const Contact = () => {
  return (

    <section id="Contact" className="py-20 flex flex-col items-start gap-8">
      <RevealText delay={0.1}>
        <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
      </RevealText>
      <p className="text-zinc-200 max-w-2xl mb-8">
        Interested in working together? Feel free to reach out to discuss your project or just say hello.
      </p>
      <Link href="mailto:hello@example.com" className="flex gap-4 text-xl hover:text-teal-500 transition-colors">
        <Mail/>bartosz.kmcz@gmail.com
      </Link>
      <Link href="tel:501185873" className="flex gap-4 text-xl hover:text-teal-500 transition-colors">
        <Phone/>+48 501 185 873
      </Link>
      <Link href="github.com/BartoszKmietowicz" className="flex gap-4 text-xl hover:text-teal-500 transition-colors">
        <Github/>Github
      </Link>
      <Link href="https://www.linkedin.com/in/bartosz-kmietowicz-135074255/" className="flex gap-4 text-xl hover:text-teal-500 transition-colors">
        <Linkedin/> LinkedIn
      </Link>
    </section>

  )
}
