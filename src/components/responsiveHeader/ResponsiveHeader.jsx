"use client";
import Image from "next/image";
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";
import Logo from "public/darrell/Logo.svg";
import hamburger from "public/darrell/hamburger-menu.svg";
import close from "public/darrell/close.svg";
import profile from "public/darrell/profile.png";
import styles from "./responsive.module.css";

const ResponsiveHeader = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav
        className={`${styles.nav} w-full bg-[#708090] fixed top-0 left-0 right-0 z-[60]`}
      >
        <div className="justify-between px-2 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-2 md:block">
              {/* Logo */}
              <Link href="/">
                <Image src={Logo} className="max-w-[125px] md:max-w-[150px]" />
              </Link>
              {/* Hamburger Button Mobile */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  <Image
                    src={hamburger}
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.navbar} relative`}>
            <div
              className={`${styles.babi} flex-1 fixed bg-white sm:static justify-self-center pb-3 md:block md:pb-0 top-0 left-0 right-0 md:bg-transparent text-black md:text-white h-[24rem] md:h-auto ${
                navbar ? "px-5 py-16 md:p-0 block" : "hidden"
              }`}
            >
              <button
                  className="absolute top-2 left-2 p-2 md:hidden text-gray-700 rounded-md outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  <Image src={close} width={30} height={30} alt="logo" />
              </button>
              <ul className="md:h-auto items-center justify-center flex flex-col gap-2 md:flex-row">
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto md:px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771] border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto md:px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771] border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/account" onClick={() => setNavbar(!navbar)}>
                    Your Account
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto md:px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771] border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/responsivebike" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Ride
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771]  border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/responsivecar" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Car
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771]  border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Service
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771]  border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex md:flex-wrap md:justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <Image
                src={profile}
                alt="..."
                className="shadow rounded-full md:max-w-[45px] h-auto align-middle border-none"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveHeader;
