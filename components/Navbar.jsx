import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[40]"
          : "fixed w-full h-20 z-[40]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <p className="text-lg font-bold font-serif cursor-default text-cyan-500">
          WELCOME
        </p>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-orange-300">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-orange-300">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-orange-300">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-orange-300">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-orange-300">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          {/* Mobile Menu */}
          <div>
            <div className="flex w-full items-center justify-between">
              <p className="text-lg font-bold font-serif cursor-default">
                Welcome
              </p>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[50%] md:w[90%] py-4 cursor-default uppercase">
                Let&lsquo;s build somthing together
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&lsquo;s connect
              </p>
              <div className="flex items-center justify-evenly my-4 w-full sm:w-[80%]">
                <a
                  className="rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-110 ease-in duration-300"
                  href="https://www.linkedin.com/in/rahim-sattar-082188236/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-blue-600" size={30} />
                </a>
                <a
                  className="rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-110 ease-in duration-300"
                  href="https://github.com/Alexios10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Menu End */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
