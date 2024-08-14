import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import cta_image from '../../../../public/cta-img.svg'

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="overflow-hidden">
            <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
                <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
                    <h2 className=" text-3xl font-semibold sm:text-4xl">
                        A Creative Tech Marathon for All
                    </h2>
                    <p className="">
                        Hillhacks24 is an exciting, free event for tech enthusiasts of all levels. From November 15-17 at Foothill College, you'll experience inspiring speakers, helpful workshops, skilled mentors, and fun games. With themes like environment, healthcare, and VR, plus over $200,000 in prizes, it's an opportunity you won't want to miss!
                    </p>
                    <div className="pt-1">
                        <NavLink
                            href="/register"
                            className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                        >
                            Apply Now
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
                <div className="flex-none w-full md:max-w-xl">
                    <Image src={cta_image} alt="Hillhacks24 event" className='w-full shadow-lg rounded-lg border' />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA