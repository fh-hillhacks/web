import Image from 'next/image'
import freshbooks from '../../../../public/logos/freshbooks.svg'
import JNJ_Logo_New from '../../../../public/logos/JNJ_Logo_New.svg'
import sendgrid from '../../../../public/logos/sendgrid.svg'
import figma from '../../../../public/logos/figma.svg'
import auth0 from '../../../../public/logos/auth0.svg'
import notion from '../../../../public/logos/notion.svg'
import asana from '../../../../public/logos/asana.svg'
import algolia from '../../../../public/logos/algolia.svg'
import clickup from '../../../../public/logos/clickup.svg'
import TinderLogo_2017 from '../../../../public/logos/TinderLogo-2017.svg'
import De_Anza_College_logo from '../../../../public/logos/De_Anza_College_logo.svg'
import stanford from '../../../../public/logos/stanford-university-seeklogo.svg'
import SectionWrapper from '../../SectionWrapper'

const logos = [
    {
        src: stanford,
        alt: "stanford university"
    },
    {
        src: De_Anza_College_logo,
        alt: "de anza college logo"
    },
    {
        src: TinderLogo_2017,
        alt: "Tinder"
    },

    {
        src: `/logos/FC_Main_color.png`,
        alt: "foothill college logo"
    },
    {
        src: sendgrid,
        alt: "sendgrid"
    },
    {
        src: figma,
        alt: "figma"
    },
    {
        src: clickup,
        alt: "clickup"
    },
    {
        src: algolia,
        alt: "algolia"
    },
    {
        src: asana,
        alt: "asana"
    },
    {
        src: notion,
        alt: "notion"
    },
    {
        src: auth0,
        alt: "auth0"
    },
    {
        src: JNJ_Logo_New,
        alt: "Johnson & Johnson"
    },
    {
        src: freshbooks,
        alt: "freshbooks"
    },

]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-800 text-center">
                Sponsored by
            </h2>
            <div className="mt-8 flex justify-center">
                <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-8 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                    {
                        logos.map((item, idx) => (
                            <li key={idx} className='flex justify-center items-center'>
                                <Image src={item.src} alt={item.alt} width={200} height={100} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default LogoGrid