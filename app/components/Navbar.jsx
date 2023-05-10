'use client';

import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import Logo from './../../public/assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 30) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={
        shadow
          ? 'fixed bg-white w-full py-5 px-10 h-20 shadow-xl z-[100]'
          : 'fixed bg-white w-full py-5 px-10 h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2xl:px-16">
        <Image src={Logo} alt="Logo" height={80} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/#intro" onClick={handleScroll}>
              <li className="ml-10 text-sm uppercase hover:border-b">Intro</li>
            </Link>
            <Link href="/#about" onClick={handleScroll}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills" onClick={handleScroll}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects" onClick={handleScroll}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact" onClick={handleScroll}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link>
          </ul>
          <MobileNav handleNav={handleNav} />
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <MobileMenu handleNav={handleNav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
