import { SOCIALS } from '@/common/assets/page';
import Link from 'next/link';
import React from 'react'
import { GoArrowUp } from 'react-icons/go';

export default function SecFooter() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  const scrollToTop = () => {
    const scrollDuration = 1500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className="w-full h-full bg-[#222222] text-white flex md:flex-row flex-col items-center justify-between md:px-10 mb-2 py-5 rounded-md uppercase">
      <p className="md:mb-0 mb-10 cursor-default">&copy; {getCurrentYear()}</p>
      <div className="flex md:flex-row flex-col items-center md:gap-10 gap-1">
        <Link href={SOCIALS.linkedIn} className="relative link" target="_blank">LinkedIn</Link>
        <Link href={SOCIALS.github} className="relative link" target="_blank">Github</Link>
        <Link href={SOCIALS.instagram} className="relative link" target="_blank">Instagram</Link>
        <Link href={SOCIALS.twitter} className="relative link" target="_blank">Twitter</Link>
      </div>
      <p className="md:mt-0 mt-10 flex items-center gap-3 cursor-pointer group relative link" id="top" onClick={scrollToTop}>Back to top <GoArrowUp className="text-2xl group-hover:rotate-[360deg] transition-all duration-500" /></p>
    </div>
  )
}
