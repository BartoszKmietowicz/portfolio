"use client"


import RevealText from "@/components/Reveal-text"

export const About = () => {
    return (
        <section id="About" className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <RevealText delay={0.1}>
                        <h2 className="text-2xl font-medium mb-6">About</h2>
                    </RevealText>
                    <p className="text-zinc-200 mb-4">
                        I'm a front and backend developer with 3 years of experience creating digital
                        products and experiences.
                    </p>
                    <p className="text-zinc-200 mb-4">
                        My approach combines strategic thinking with technical expertise to deliver solutions that are both
                        beautiful and functional.
                    </p>

                </div>
                <div>
                    <RevealText delay={0.2}>
                        <h2 className="text-2xl font-medium mb-6">Expertise</h2>
                    </RevealText>
                    <ul className="space-y-2 text-zinc-200">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                            UI/UX Design
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                            Frontend Development
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                            Backend Development
                        </li>

                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                            Motion Design
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                            Responsive Web Design
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}