import SectionWrapper from "../../SectionWrapper";


const faqsList = [
    {
        q: "What is Hill Hacks: Innovate for Change?",
        a: "Hill Hacks is a global hackathon where participants tackle real-world challenges faced by different countries. It's an opportunity to use technology and creativity to address critical issues and make a positive impact worldwide.",
    },
    {
        q: "When and where is Hill Hacks taking place?",
        a: "Hill Hacks is a virtual event running from Friday, November 15th at 10:30 AM to Sunday, November 17th at 6 PM. Participants can join from anywhere in the world!",
    },
    {
        q: "What kind of problems can we address?",
        a: "You can focus on a wide range of issues including environmental concerns, healthcare challenges, educational gaps, economic difficulties, social inequalities, or technological hurdles specific to your chosen country.",
    },
    {
        q: "Is there a participation fee?",
        a: "Hill Hacks is completely FREE to attend! We believe in making global problem-solving accessible to everyone with a passion for change.",
    },
    {
        q: "Are there prizes for the winners?",
        a: "Yes! We have an exciting prize pool of over $50,000 for the most innovative and impactful solutions. Prizes will be awarded across various categories.",
    },
    {
        q: "What if I'm new to hackathons or global issues?",
        a: "No worries! Hill Hacks welcomes participants of all experience levels. We provide resources, workshops, and mentors to help you learn about global challenges and develop your ideas.",
    },
    {
        q: "How do teams work for this hackathon?",
        a: "Teams can have 1 to 4 members. You can form a team beforehand or join our team-formation events at the start of the hackathon. We encourage diverse teams with varied skills and backgrounds.",
    },
    {
        q: "Where can I find more information and resources?",
        a: "Our comprehensive Hacker's Guide, Code of Conduct, and additional resources are available on our website. Check them out for detailed information on participating in Hill Hacks!",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen ">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h2 className=" text-3xl font-extrabold sm:text-4xl">
                    Frequently asked questions
                </h2>
                <p className="mt-3">
                    Everything you need to know about the product. Can't find the answer you're looking for? feel free to {" "}
                    <a
                        className='text-blue-600 hover:text-blue-400 duration-150 font-semibold whitespace-nowrap'
                        href='mailto:example@domain.com'>
                        contact us
                    </a>.
                </p>
            </div>
            <div className='mt-12'>
                <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                    {faqsList.map((item, idx) => (
                        <li
                            key={idx}
                            className="space-y-3"
                        >
                            <summary
                                className="flex items-center justify-between font-semibold">
                                {item.q}
                            </summary>
                            <p
                                dangerouslySetInnerHTML={{ __html: item.a }}
                                className='leading-relaxed opacity-60'>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs