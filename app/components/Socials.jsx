import Link from "next/link";
import Image from "next/image";

function Socials() {
  return (
    <div className="flex space-x-7 md:space-x-0 md:justify-between md:w-4/5 lg:w-full mt-3">
        <Link href="#">
            <Image src="/instagram.png" alt="Instagram Link" height={16} width={20}/>
        </Link>
        <Link href="#">
            <Image src="/pinterest.png" alt="Pinterest Link" height={16} width={20}/>
        </Link>
        <Link href="#">
            <Image src="/facebook.png" alt="Facebook Link" height={16} width={12}/>
        </Link>
        <Link href="#">
            <Image src="/twitter.png" alt="Twitter Link" height={16} width={22}/>
        </Link>
        <Link href="#">
            <Image src="/telegram.png" alt="Telegram Link" height={16} width={20}/>
        </Link>
    </div>
  )
}

export default Socials