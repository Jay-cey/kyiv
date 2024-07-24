import Link from "next/link";
import Image from "next/image";


function Navbar() {
  return (
    <nav className="border border-black sticky top-0 bg-white z-[9999]">
          <ul className="text-sm font-medium justify-between hidden lg:flex">
            <div className="flex *:border-l *:border-black *:px-9 *:py-4">
              <li>
                Shop
              </li>
              <li className="border-r border-black px-9 py-4">
                Contact
              </li>
            </div>
            <div className="flex *:border-l *:border-black *:px-9 *:py-4">
              <li>
                Sign in
              </li>
              <li>
                Cart
              </li>
            </div>
          </ul>

          <ul className="lg:hidden flex justify-between content-center items-center *:border-black">
            <li className="border-r px-4 py-5">
              <Link href="#">
                <Image src="/hamburger.png" alt="Menu" width={30} height={32}/>
              </Link>
            </li>
            <li className="border-l py-4 px-5">
              <Link href="#">
                <Image src="/cart.png" alt="Menu" width={20} height={64}/>
              </Link>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar