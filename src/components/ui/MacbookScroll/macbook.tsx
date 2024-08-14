import { MacbookScroll } from "./macbook-scroll";
import Link from "next/link";
import Image from "next/image";
import hillhacks from "../../../../public/hillhacks.svg";
export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Biggest community college hackathon in Bay Area. <br /> No kidding.
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/foothill.jpg`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return <Image src={hillhacks} alt="Hill Hacks" width={56} height={56} />;
};
