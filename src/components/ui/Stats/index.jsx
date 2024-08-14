import SectionWrapper from "../../SectionWrapper"

const stats = [
    {
        data: "190+",
        desc: "Countries represented by innovative solutions."
    },
    {
        data: "1000+",
        desc: "Participants tackling global challenges with creativity."
    },
    {
        data: "50+",
        desc: "Mentors providing guidance and expertise."
    },
    {
        data: "80%",
        desc: "Projects focused on sustainable development goals."
    },
]

const Stats = () => (
    <SectionWrapper>
        <div className="custom-screen ">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h3 className=" text-3xl font-semibold sm:text-4xl">
                    Innovate for Global Change
                </h3>
                <p className="mt-3">
                    Join Hill Hacks to address critical issues faced by countries worldwide through technology and creativity.
                </p>
            </div>
            <div className="mt-12">
                <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="sm:max-w-[15rem]">
                                <h4 className="text-4xl text-blue-600 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.desc}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default Stats