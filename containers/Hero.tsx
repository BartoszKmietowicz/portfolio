"use client"

import AnimatedText from "@/components/Animated-text"
import Button from "@/components/Button"
import { ArrowRight } from "lucide-react"

export const Hero=()=>{
    return(
         <section className="py-20">
           
                    <AnimatedText text="Hi, I'm Bartosz" className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter" />
                    <p className="mt-8 text-xl md:text-2xl max-w-2xl text-zinc-400">
                      I'm a designer and developer crafting digital experiences with a focus on minimalist aesthetics and
                      thoughtful interactions.
                    </p>
                    <div className="mt-12">
                      <Button onClick={()=>window.location.href="#Projects"}
                        className="outline outline-2  outline-zinc-800  rounded-full border-zinc-800 text-white hover:bg-teal-500 "
                      >
                        View my work <ArrowRight className=" h-4 w-4" />
                      </Button>
                     
                    </div>
                  </section>
    )
}