import GradientWrapper from "../../GradientWrapper"
import NavLink from "../NavLink"
import { Cover } from "./cover"

const Hero = () => (
    <section>
        <GradientWrapper wrapperClassName="inset-0" className="custom-screen ">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    The ultimate hackathon experience for all skill levels at
                    <div className="m-1 p-1">

                        <Cover>
                            <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#000000] to-[#ff0000]">
                                Hill Hacks
                            </span>
                        </Cover>
                    </div>
                </h1>
                <p className="max-w-xl mx-auto">
                    Join Hillhacks24 for an inspiring weekend of coding, learning, and innovation. Free admission and over $200,000 in prizes!
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="#"
                        className="flex items-center gap-x-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                    >
                        Apply now

                    </NavLink>
                    <NavLink
                        href="#details"
                        className="flex items-center gap-x-2  "
                        scroll={false}
                    >
                        Event details
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </GradientWrapper>
    </section>
)

export default Hero