import DarkWrapper from "../../DarkWrapper"

const Features = () => {

    const features = [
        {
            // ... existing icon ...
            title: "Choose Your Country",
            desc: "Select a nation that intrigues you. Consider its current challenges, cultural context, and your familiarity or curiosity about the region."
        },
        {
            // ... existing icon ...
            title: "Identify a Problem",
            desc: "Research and pinpoint a significant issue affecting your chosen country, from climate change impacts to economic struggles or public health concerns."
        },
        {
            // ... existing icon ...
            title: "Formulate Your Idea",
            desc: "Develop an innovative, tech-driven solution to address the problem. Your approach should be practical, scalable, and sustainable for long-term impact."
        },
        {
            // ... existing icon ...
            title: "Build Your Solution",
            desc: "Create an app, service, or campaign that brings your idea to life. Focus on how your project could positively impact the country's challenges."
        },
        {
            // ... existing icon ...
            title: "Prepare to Present",
            desc: "Get ready to showcase your project to our panel of judges. Articulate the problem, your solution, and its potential impact clearly and concisely."
        },
        {
            // ... existing icon ...
            title: "Collaborate and Learn",
            desc: "Engage with fellow participants, seek advice from mentors, and develop new skills throughout the event. Hill Hacks is a growth opportunity for everyone!"
        },
    ]

    return (
        <DarkWrapper id="features">
            <div className="custom-screen text-gray-300 justify-between gap-24 lg:flex">
                <div className="max-w-xl">
                    <h2 className="text-white text-3xl font-semibold sm:text-4xl">
                        Tackle global challenges with innovative solutions
                    </h2>
                    <p className="mt-3">
                        Hill Hacks invites you to address critical issues faced by different countries. Use technology, creativity, and critical thinking to make a real difference on a global scale.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-100 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </DarkWrapper>
    )
}

export default Features