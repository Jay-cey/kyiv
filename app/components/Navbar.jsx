"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-black sticky top-0 bg-white z-[9999]">
      {/* Desktop Menu */}
      <ul className="text-sm font-medium justify-between hidden lg:flex">
        <div className="flex *:border-r *:border-black">
          <li className="px-9 py-4 hover:bg-gray-100 transition-colors">
            <Link href="/category">Shop</Link>
          </li>
          <li className="px-9 py-4 hover:bg-gray-100 transition-colors">
            <Link href="/subscription">Subscription</Link>
          </li>
          <li className="px-9 py-4 hover:bg-gray-100 transition-colors">
            <Link href="/about">About Us</Link>
          </li>
        </div>
        <div className="flex *:border-l *:border-black">
          <li className="px-9 py-4 hover:bg-gray-100 transition-colors">
            <Link href="/#contact">Contact</Link>
          </li>
          <li className="px-9 py-4 hover:bg-gray-100 transition-colors cursor-pointer">
            Sign in
          </li>
          <li className="px-9 py-4 hover:bg-gray-100 transition-colors cursor-pointer">
            Cart
          </li>
        </div>
      </ul>

      {/* Mobile Bar */}
      <ul className="lg:hidden flex justify-between content-center items-center">
        <li className="border-r border-black px-4 py-4 cursor-pointer hover:bg-gray-50" onClick={toggleMenu}>
          <Image src="/hamburger.png" alt="Menu" width={30} height={32} />
        </li>
        <li className="border-l border-black py-4 px-5 cursor-pointer hover:bg-gray-50">
          <Link href="#">
            <Image src="/cart.png" alt="Cart" width={20} height={64} />
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black z-50 flex flex-col text-center font-medium">
          <Link href="/" className="py-4 border-t border-black hover:bg-gray-100" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/category" className="py-4 border-t border-black hover:bg-gray-100" onClick={toggleMenu}>
            Shop
          </Link>
          <Link href="/subscription" className="py-4 border-t border-black hover:bg-gray-100" onClick={toggleMenu}>
            Subscription
          </Link>
          <Link href="/about" className="py-4 border-t border-black hover:bg-gray-100" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/#contact" className="py-4 border-t border-black hover:bg-gray-100" onClick={toggleMenu}>
            Contact
          </Link>
          <div className="py-4 border-t border-black hover:bg-gray-100 cursor-pointer" onClick={toggleMenu}>
            Sign in
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;