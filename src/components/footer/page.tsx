"use client";
import { GoArrowDownLeft } from "react-icons/go";
import Magnetic from "@/common/magnetic/page";
import { useRouter } from "next/navigation";
import { useContextPage } from "@/context-api/page";
import Link from "next/link";
import { SOCIALS, TEXTS } from "@/common/assets/page";
import SecFooter from "../SecFooter/page";

export default function Footer() {
  const { handleLinkClick } = useContextPage();

  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between uppercase border-t border-b border-[#222222] text-lg">
        <h1 className="py-2"># Contact</h1>
        <h1 className="py-2">Say Hi</h1>
      </div>
      <p className="p-10 xl:text-4xl text-3xl md:text-center text-[#222222] md:mt-10 md:mb-10">{TEXTS.footer}</p>
      <div className="flex justify-between">
        <div className="uppercase 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl ">
          <h1>Let&apos;s Work</h1><h1 className="md:ml-[50%] md:mt-5">Together</h1>
        </div>
        <GoArrowDownLeft className="2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl " />
      </div>
      <div className="relative w-full border-t border-[#B9BEC6] md:mt-5 mt-32 text-xl">
        <div className="absolute -top-40 right-2">
          <Magnetic>
            <button className="md:w-14 w-10 md:h-14 h-10 md:p-[7rem] p-[6rem] bg-[#5045E9] rounded-full text-white mt-10 btn drop-shadow-2xl text-2xl" onClick={() => { router.push("/contact"); handleLinkClick("/contact"); }}>Get in touch</button>
          </Magnetic>
        </div>
      </div>
      <div className="md:mt-10 mt-24">
        <div className="flex md:flex-row flex-col items-center text-white xl:text-xl text-[1.15rem]">
          <Magnetic>
            <Link href={SOCIALS.email} className="drop-shadow-2xl">
              <button className="bg-[#5045E9] rounded-full px-8 py-4 -z-[1] btn">
                <span>{TEXTS.contact_email}</span>
              </button>
            </Link>
          </Magnetic>
          <Magnetic>
            <p className="md:mt-0 mt-5 md:ml-5 bg-[#5045E9] rounded-full px-8 py-4 btn drop-shadow-2xl cursor-default">{TEXTS.contact_number}</p>
          </Magnetic>
        </div>
      </div>
      <div className="pt-10">
        <SecFooter />
      </div>
    </div>
  )
}