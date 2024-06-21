"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SOCIALS, IMG, TEXTS, LANGUAGES, WEB_TECHNOLOGIES, DATABASES, FRAMEWORKS_AND_LIBRARIES, TOOLS_AND_PLATFORMS, PROJECTS } from "@/common/assets/page";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import Menu from "../menu/page";
import Navbar from "../navbar/page";
import Magnetic from "@/common/magnetic/page";
import CustomCursor from "@/common/customCursor/page";
import Marquee from "@/common/marquee/page";
import "../../common/styles.scss";
import TimelineOverview from "../timeline/page";
import { useRouter } from "next/navigation";
import { useContextPage } from "@/context-api/page";
import Footer from "../footer/page";

export default function Landing() {
  const { handleLinkClick, textEnter, textLeave } = useContextPage();

  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollBelow = () => {
    const scrollDuration = 500;
    const targetPosition = window.innerHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const scrollStep = distance / (scrollDuration / 15);
    const scrollInterval = setInterval(function () {
      if (Math.abs(window.scrollY - startPosition) < Math.abs(distance)) {
        window.scrollBy(0, scrollStep);
      } else {
        window.scrollTo(0, startPosition + distance);
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className="w-full h-full tracking-wide">
      {/* Landing Page */}
      <div className="md:fixed top-0 left-0 md:pl-2 w-full md:h-screen h-full md:flex -z-[1] md:pt-2 pt-12 bg-[#F1F6FF] text-[#222222]">
        <div className="relative w-full h-screen flex flex-col justify-center">
          <div className="flex items-center justify-between absolute top-0 w-full border-t border-[#222222] uppercase">
            <Link href={SOCIALS.linkedIn} target="_blank" className="pseudo-text-effect" data-after="LinkedIn"><span>LinkedIn</span></Link>
            <div className="absolute top-0 left-1/2 w-[1px] bg-[#222222] md:h-60 h-52"></div>
            <Link href={SOCIALS.github} target="_blank" className="pseudo-text-effect" data-after="Github"><span>Github</span></Link>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-[#F1F6FF] py-10 z-[1]">
            <p className="2xl:text-8xl xl:text-7xl lg:text-6xl text-5xl uppercase">{TEXTS.name}</p>
            <p className="2xl:text-8xl xl:text-7xl lg:text-6xl text-5xl mt-5 uppercase">Portfolio Site.</p>
            <p className="lg:text-4xl text-3xl mt-14 text-center text-[#B9BEC6]">{TEXTS.short_info} based in Kathmandu - Nepal</p>
          </div>
          <div className="flex items-center justify-between absolute bottom-4 w-full border-b border-[#222222] uppercase">
            <Link href={SOCIALS.instagram} target="_blank" className="pseudo-text-effect" data-after="Instagram"><span>Instagram</span></Link>
            <div className="absolute bottom-0 left-1/2 w-[1px] bg-[#222222] md:h-60 h-52"></div>
            <Link href={SOCIALS.twitter} target="_blank" className="pseudo-text-effect" data-after="Twitter"><span>Twitter</span></Link>
          </div>
        </div>
        <div className="w-full h-screen md:ml-4 pb-4">
          <div className="relative md:right-2 bg-[#5045E9] flex items-center justify-center h-full">
            <p className="text-2xl text-white">Image placeholder</p>
            {/* <Image src={IMG.img} alt={IMG.alt} fill priority/> */}
            <div className="absolute top-1 right-2 w-12 h-12">
              <Image src={IMG.logo} alt={IMG.alt} sizes="12vw" fill priority />
            </div>
            <div className="absolute bottom-0 right-0 md:text-8xl text-7xl text-white cursor-pointer" onClick={scrollBelow}>
              <BsArrowDownRight />
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-[100vh] pt-2">
        <Menu />
        <Navbar />
        {/* Introduction */}
        <div className="w-full h-full mb-20">
          <div className="flex items-center justify-between uppercase border-b border-[#222222] text-lg">
            <h1 className="py-2"># Introduction</h1>
            <h1 className="py-2">Overview</h1>
          </div>
          <div className="mb-20">
            <h1 className="p-10 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl md:text-center text-[#B9BEC6] md:mt-10">Creative Freelancer &,<br />Full-Stack Developer</h1>
            <div className="text-2xl md:flex items-center justify-between">
              <div className="md:mt-10 md:px-0 px-2">
                <p className="mb-10">{TEXTS.introduction1}</p>
                <p className="mb-10">{TEXTS.introduction2}</p>
                <p>{TEXTS.introduction3}</p>
              </div>
              <Magnetic>
                <button className="w-14 h-14 p-[7rem] ml-32 mr-5 bg-[#5045E9] rounded-full text-white mt-10 btn drop-shadow-2xl" onClick={() => { router.push("/about"); handleLinkClick("/about"); }}>About me</button>
              </Magnetic>
            </div>
          </div>
          <Marquee />
        </div>

        {/* Skills */}
        <div className="w-full h-full">
          <div className="flex items-center justify-between uppercase border-t border-b border-[#222222] text-lg">
            <h1 className="py-2"># Skills</h1>
            <h1 className="py-2">Technologies</h1>
          </div>
          <h1 className="p-10 xl:text-4xl text-3xl md:text-center text-[#222222] md:mt-10 md:mb-10">{TEXTS.skills1}</h1>
          <div className="flex 2xl:flex-row flex-col items-center justify-between border-b border-[#222222]">
            <div className="2xl:text-4xl text-3xl 2xl:mb-0 mb-10 text-center:md flex items-center">Languages</div>
            <ul className="grid 2xl:grid-cols-7 md:grid-cols-3 grid-cols-2 2xl:mb-0 mb-10">
              {LANGUAGES.map((texts, i) => {
                return (
                  <li key={i} className="w-[10rem] h-[3.9rem] bg-[url('../../public/media/ticket.svg')] bg-cover bg-no-repeat flex items-center justify-center text-white text-2xl">
                    <span>{texts.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex 2xl:flex-row flex-col items-center justify-between border-b border-[#222222]">
            <div className="2xl:text-4xl text-3xl 2xl:my-0 my-10 flex items-center">Web Technologies</div>
            <ul className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:mb-0 mb-10">
              {WEB_TECHNOLOGIES.map((texts, i) => {
                return (
                  <li key={i} className="w-[10rem] h-[3.9rem] bg-[url('../../public/media/ticket.svg')] bg-cover bg-no-repeat flex items-center justify-center text-white text-2xl">
                    <span>{texts.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex 2xl:flex-row flex-col items-center justify-between border-b border-[#222222]">
            <div className="2xl:text-4xl text-3xl 2xl:my-0 my-10 flex items-center">Frameworks & Libraries</div>
            <ul className="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-2 2xl:mb-0 mb-10">
              {FRAMEWORKS_AND_LIBRARIES.map((texts, i) => {
                return (
                  <li key={i} className="w-[10rem] h-[3.9rem] bg-[url('../../public/media/ticket.svg')] bg-cover bg-no-repeat flex items-center justify-center text-white text-2xl">
                    <span>{texts.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex 2xl:flex-row flex-col items-center justify-between border-b border-[#222222]">
            <div className="2xl:text-4xl text-3xl 2xl:my-0 my-10 flex items-center">Databases</div>
            <ul className="grid grid-cols-2 2xl:mb-0 mb-10">
              {DATABASES.map((texts, i) => {
                return (
                  <li key={i} className="w-[10rem] h-[3.9rem] bg-[url('../../public/media/ticket.svg')] bg-cover bg-no-repeat flex items-center justify-center text-white text-2xl">
                    <span>{texts.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex 2xl:flex-row flex-col items-center justify-between border-b border-[#222222]">
            <div className="2xl:text-4xl text-3xl 2xl:my-0 my-10 flex items-center">Tools & Platforms</div>
            <ul className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:mb-0 mb-10">
              {TOOLS_AND_PLATFORMS.map((texts, i) => {
                return (
                  <li key={i} className="w-[10rem] h-[3.9rem] bg-[url('../../public/media/ticket.svg')] bg-cover bg-no-repeat flex items-center justify-center text-white text-2xl">
                    <span>{texts.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <h1 className="p-10 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl md:text-center text-[#B9BEC6] md:my-20">{TEXTS.skills2}</h1>
        </div>

        {/* Projects */}
        <div className="w-full h-full md:mb-20 mb-16">
          <div className="flex items-center justify-between uppercase border-t border-[#222222] text-lg">
            <h1 className="py-2"># Projects</h1>
            <h1 className="py-2">Recent Works</h1>
          </div>
          <div>
            {PROJECTS.map((project, i) => {
              return (
                <Link href={project.link} onMouseEnter={textEnter} onMouseLeave={textLeave} className="flex flex-col mb-28 cursor-pointer" key={i}>
                  <div className="relative flex md:flex-row flex-col md:p-0 px-2 items-center justify-between border-t border-[#222222]">
                    <div className="md:w-1/2 w-full h-full">
                      <p className="mt-2">0{i + 1}</p>
                      <h1 className="mt-5 2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl uppercase">{project.name}</h1>
                      <p className="mt-5 md:hidden block">{project.year}</p>
                    </div>
                    <div className="absolute top-0 left-1/2 w-[1px] bg-[#222222] h-full md:block hidden"></div>
                    <div className="md:w-1/2 w-full md:pl-10 flex flex-col">
                      <div className="md:mt-10 mt-5 text-xl flex items-center justify-between">
                        <p className="uppercase">{project.task}</p>
                        <p className="md:hidden block relative link-dark cursor-pointer">View</p>
                        <p className="md:block hidden">{project.year}</p>
                      </div>
                      <div className="mt-10 text-[1.15rem]">
                        <p>{project.summary}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-10">
                    <Image src={isMobile ? project.mobileSrc : project.src} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md" />
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="flex items-center justify-center">
            <Magnetic>
              <button className="rounded-full text-xl bg-[#5045E9] text-white px-10 pt-4 pb-4 btn drop-shadow-2xl" onClick={() => { router.push("/projects"); handleLinkClick("/projects"); }}>All works</button>
            </Magnetic>
          </div>
        </div>

        {/* Career History */}
        <div className="w-full h-full mb-20">
          <div className="flex items-center justify-between uppercase border-t border-b border-[#222222] text-lg">
            <h1 className="py-2"># Career History</h1>
            <h1 className="py-2">Journey</h1>
          </div>
          <div className="md:pt-20 pt-10 flex md:flex-row flex-col justify-between">
            <div className="md:p-10 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl md:text-center text-[#B9BEC6] md:mt-10 md:mb-0 mb-10">
              <p>{TEXTS.career_history}</p>
            </div>
            <TimelineOverview />
          </div>
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
        <CustomCursor />
      </div>
    </div>
  )
}