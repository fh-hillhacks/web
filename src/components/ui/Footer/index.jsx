import Link from "next/link"
import Newsletter from '../Newsletter'
import Brand from '../Brand'
import { IconBrandTwitter, IconBrandInstagram, IconBrandLinktree } from "@tabler/icons-react"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
]
const contact = [
    { name: IconBrandTwitter, href: "https://www.linkedin.com/company/hillhacks/" },
    { name: IconBrandInstagram, href: "https://www.instagram.com/hillhacks/" },
    { name: IconBrandLinktree, href: "https://www.facebook.com/hillhacks/" },
]

const Footer = () => (
    <footer id="contact" className="pt-32 sm:pt-44">
        <div className="custom-screen ">
            <div className="flex flex-wrap gap-y-10 items-center justify-between">
                <div className="space-y-4">
                    <Link href="/" className="inline-block">
                        <Brand />
                    </Link>
                    <h2 className=" text-lg font-semibold sm:text-2xl">Largest community college hackathon in Bay Area</h2>
                    <p className="max-w-md opacity-70">
                        Hill Hacks is a dynamic and innovative hackathon that brings together talented students from community colleges across the Bay Area. Our mission is to foster creativity, collaboration, and technological innovation among the next generation of tech leaders. Through challenging projects, inspiring workshops, and networking opportunities, we aim to empower students to tackle real-world problems and develop cutting-edge solutions.
                    </p>
                    <div className="pt-2 flex items-center gap-x-6 opacity-70">
                        {contact.map((contacts) => {
                            return (
                                <Link key={contacts.name} target="_blank" href={contacts.href} className="hover:text-gray-500 duration-150">
                                    <contacts.name size={48} />
                                </Link>
                            )
                        })}



                    </div>
                </div>
                <Newsletter />
            </div>
            <div className="mt-10 py-10 border-t flex-row-reverse items-center justify-between sm:flex">
                <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
                    {
                        navigation.map((item, idx) => (
                            <li key={idx} className="font-medium  hover:opacity-70 duration-150">
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <p className="mt-6 sm:mt-0">© 2023 Hill Hacks Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
)

export default Footer