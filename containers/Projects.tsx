"use client"

import RevealText from "@/components/Reveal-text"
import Project from "@/components/Project";

export const Projects = () => {
  return (

    <section id="Projects" className="py-20">
      <RevealText delay={0.1}>
        <h2 className="text-2xl font-medium mb-12">Selected Projects</h2>
      </RevealText>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Project
          title="Taskzilla"
          description="Task management application, that allows users to create and manage workspaces, projects, tasks and columns."
          tags={["Socket.io", "Next", "Typescript", "PostgreSQL", "Prisma", "Jest"]}
          image="/taskzilla.png"
          link="https://github.com/SmgTR/Taskzilla"
        />
        <Project
          title="Corazon"
          description="Simple landing page for a wellbeing company"
          tags={["React", "SCSS"]}
          image="/corazon.png"
          link="https://corazon.net.pl/"
        />
        <Project
          title="Fuel Cost Calculator"
          description="Web page to calculate fuel cost after a trip, using Puppeteer to scrape data from AutoCentrum"
          tags={["Next", "Typescript", "Puppeteer", "TailwindCSS"]}
          image="/fuelCost.png"
          link="https://github.com/BartoszKmietowicz/fuel-cost-calculator"
        />
        <Project
          title="Shop"
          description="Web shop created using Node and Express, using Stripe for payments,with authentication and authorization"
          tags={["Node", "Express", "MongoDB", "Stripe", "Ejs"]}
          image="/shop.png"
          link="https://github.com/BartoszKmietowicz/node"
        />
      </div>
    </section>
//  <section className="py-20">
//             <RevealText delay={0.1}>
//               <h2 className="text-2xl font-medium mb-12">Selected Projects</h2>
//             </RevealText>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Project
//                 title="Digital Experience"
//                 description="A minimalist e-commerce platform focused on user experience"
//                 tags={["UI/UX", "Development"]}
//                 image="/placeholder.svg?height=400&width=600"
//                 link="#"
//               />
//               <Project
//                 title="Brand Identity"
//                 description="Complete rebrand for a tech startup entering a new market"
//                 tags={["Branding", "Strategy"]}
//                 image="/placeholder.svg?height=400&width=600"
//                 link="#"
//               />
//               <Project
//                 title="Mobile Application"
//                 description="Intuitive mobile app for productivity and task management"
//                 tags={["Mobile", "UI/UX"]}
//                 image="/placeholder.svg?height=400&width=600"
//                 link="#"
//               />
//               <Project
//                 title="Web Platform"
//                 description="Scalable web platform with custom CMS integration"
//                 tags={["Development", "Architecture"]}
//                 image="/placeholder.svg?height=400&width=600"

//                 link="#"
//               />
//             </div>
//           </section>

  )
}
