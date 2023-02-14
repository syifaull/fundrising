import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../components/button";
import Gambar1 from "../public/gambar2.jpg";
import Logo1 from "../public/Group 1.png";
import Logo2 from "../public/Group 2.png";
import Logo3 from "../public/Group 3.png";
import Logo from "../public/Logo-Char.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charitee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* home section */}
      <div className="w-full min-h-min">
        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center">
              <div className="w-36">
                <Image alt="Logo" src={Logo} />
              </div>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 bg-[#DFBA47]rounded md:bg-transparent md:hover:text-[#DFBA47] md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#DFBA47] md:p-0 "
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#DFBA47] md:p-0 "
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex w-full">
          <div className="w-1/2 pl-20 pt-32">
            <p className="font-sol text-4xl">Safe Our World,</p>
            <p className="font-sol text-4xl">Be Kind to Others</p>
            <p className="pt-2 pb-10">Let&apos;s be part of changes</p>
            <Link href="/form">
              <Button text="Donate Now!" />
            </Link>
          </div>
          <div className="w-1/2 h-full bg-[#D3B1A7]">
            <div className="w-full pr-20 py-20 ">
              <Image
                alt="Gambar 1"
                src={Gambar1}
                className="rounded-r-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* blue section */}
      <div className="w-full h-52 bg-[#8CBEA3]">
        <div className="grid grid-cols-3 pt-12">
          <div className="flex justify-center">
            <div>
              <Image src={Logo1} alt={"logo - grup - 1"} />
            </div>
            <div className="pl-3 pt-4">
              <p className="font-sol text-3xl">200+</p>
              <p className="text-lg">Donations Received</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src={Logo2} alt={"logo - grup - 2"} />
            </div>
            <div className="pl-3 pt-4">
              <p className="font-sol text-3xl">10+</p>
              <p className="text-lg">Active Campaign</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src={Logo3} alt={"logo - grup - 3"} />
            </div>
            <div className="pl-3 pt-4">
              <p className="font-sol text-3xl">$60k</p>
              <p className="text-lg">Money Donated</p>
            </div>
          </div>
        </div>
      </div>
      {/* our story */}
      <div className="w-full px-20 py-28 grid grid-cols-2">
        <div>
          <p className="font-sol text-3xl">Our Story</p>
          <p className="pt-10 pr-20 pb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p className="font-sol text-2xl">
            Save the <span className="text-[#CB654F]">Others</span>,
          </p>
          <p className="font-sol text-2xl">
            Save The <span className="text-[#CB654F]">World</span>.
          </p>
        </div>
        <div className="py-20 bg-[#DFBA47] ">
          <div className="w-1/2 ">
            <Image
              alt="Gambar 1"
              src={Gambar1}
              className="rounded-xl"
              priority
            />
          </div>
          <div className="w-1/2 pt-3">
            <Image
              alt="Gambar 1"
              src={Gambar1}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
