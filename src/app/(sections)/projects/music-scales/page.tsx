"use client";
import { CIRCLE_BET, EXTRAS, IMG, MUSIC_SCALES, PROJECTS } from "@/common/assets/page";
import Magnetic from "@/common/magnetic/page";
import Transition from "@/common/transition/page";
import SecFooter from "@/components/SecFooter/page";
import Menu from "@/components/menu/page";
import Navbar from "@/components/navbar/page";
import { useContextPage } from "@/context-api/page";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MusicScales() {
  const { handleLinkClick } = useContextPage();

  const router = useRouter();

  return (
    <Transition backgroundColor="#222222">
      <section className="w-full h-full bg-[#F1F6FF] px-2 font-MADETOMMY_Regular">
        <Menu />
        <Navbar />
        <div className="flex items-center justify-between uppercase border-b border-[#222222] text-lg md:pt-0 pt-12">
          <h1 className="py-2"># PROJECT</h1>
          <h1 className="py-2">003</h1>
        </div>
        <div className="w-full h-fit text-8xl flex flex-col md:pt-20 pt-10">
          <div className="uppercase 2xl:text-8xl xl:text-7xl lg:text-6xl text-5xl">
            <h1>{MUSIC_SCALES.name}</h1>
          </div>
          <div className="flex md:flex-row flex-col justify-evenly md:pt-36 pt-12">
            <div className="md:w-60 w-full">
              <h1 className="tracking-wider text-lg uppercase border-b border-[#222222] pb-6 text-[#B9BEC6]">Role</h1>
              <p className="text-xl pt-6 md:pb-0 pb-10">{EXTRAS.task}</p>
            </div>
            <div className="md:w-60 w-full">
              <h1 className="tracking-wider text-lg uppercase border-b border-[#222222] pb-6 text-[#B9BEC6]">Attribution</h1>
              <p className="text-xl pt-6 md:pb-0 pb-10">{EXTRAS.attribution}</p>
            </div>
            <div className="md:w-60 w-full">
              <h1 className="tracking-wider text-lg uppercase border-b border-[#222222] pb-6 text-[#B9BEC6]">Year</h1>
              <p className="text-xl pt-6 md:pb-0 pb-10">{MUSIC_SCALES.year}</p>
            </div>
          </div>
        </div>
        <div className="md:py-36 py-16 relative">
          <div className="absolute md:bottom-0 bottom-72 right-0">
            <Magnetic>
              <Link href={MUSIC_SCALES.link} className="md:w-14 w-10 md:h-14 h-10 md:p-[7rem] p-[6rem] ml-32 mr-5 bg-[#5045E9] rounded-full text-white mt-10 btn drop-shadow-2xl text-xl z-[1]" target="_blank">Code repo<span className="pl-2 text-xl">&#x2197;</span></Link>
            </Magnetic>
          </div>
          <Image src={PROJECTS[2].mobileSrc} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md drop-shadow-2xl" />
        </div>
        <p className="lg:text-2xl text-xl mt-20">Music Scales (MS) or M Sharp (#) is an e-learning platform for passionate musicians, that provides basic and additional views towards music for all musicians. It can help improve your efficiency in playing musical instruments such as: Guitar & Piano. We have only focused on these two instruments as they are the most popular in current generation. Along with guitar song tutorials for any musicians who are interested in testing their capability. 
        </p>
        <div className="bg-[#48494B] w-full h-full mt-20 flex justify-center mb-32">
          <div className="xl:w-[60%] w-[90%] xl:h-[60%] h-[90%]">
            <div id="video-laptop">
              <video width="560" height="390" src={MUSIC_SCALES.video} autoPlay muted loop />
            </div>
            <div>
              <Image src={MUSIC_SCALES.pic1} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md mb-20 drop-shadow-2xl" />
              <Image src={MUSIC_SCALES.pic2} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md mb-20 drop-shadow-2xl" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between uppercase border-t border-b border-[#222222] text-lg">
          <h1 className="py-2"># NEXT PROJECT</h1>
          <h1 className="py-2">001</h1>
        </div>
        <Link href={"/projects/circle-bet"} className="w-full h-full flex justify-center text-center group">
          <div className="md:mx-52 pt-20 border-b border-[#222222] pb-[13.7rem]">
            <h2 className="text-2xl pb-10">Next Project</h2>
            <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl text-5xl group-hover:underline">{CIRCLE_BET.name}</h1>
          </div>
        </Link>
        <div className="flex items-center justify-center my-20">
          <Magnetic>
            <button className="rounded-full text-xl bg-[#5045E9] text-white px-10 pt-4 pb-4 btn drop-shadow-2xl" onClick={() => { router.push("/projects"); handleLinkClick("/projects"); }}>All works</button>
          </Magnetic>
        </div>
        <div>
          <SecFooter />
        </div>
      </section>
    </Transition>
  )
}
