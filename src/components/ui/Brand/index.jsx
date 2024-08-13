import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/hillhacks.svg"
        alt="Hill Hacks logo"
        {...props}
        width={86}
        height={48}
        priority
    />
)
export default Brand