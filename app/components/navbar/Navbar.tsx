'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { useState } from 'react';

export const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="bg-gray-300 text-black p-4 sm:p-6 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <div className="hidden md:flex">
            <Link href="/" className="mx-2 hover:text-gray-500">
              Home
            </Link>
            <Link href="/bestoffers" className="mx-2 hover:text-gray-500">
              Best Offers
            </Link>
            <Link href="/categories" className="mx-2 hover:text-gray-500">
              Categories
            </Link>
            <Link href="/blog" className="mx-2 hover:text-gray-500">
              Blog
            </Link>
            <Link href="/how-to-use" className="mx-2 hover:text-gray-500">
              How to Use
            </Link>
            <Link
              href="/subscribe-newsletter"
              className="mx-2 hover:text-gray-500"
            >
              Newsletter Subscription
            </Link>
          </div>
          {/*Mobile menu*/}
          <div className="md:hidden flex items-center">
            <button onClick={()=>{
                setIsOpen(!isOpen);
            }}>

                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>
          </div>
        </div>
      </nav>
    );
};