"use client";
import { CIRCLE_BET, EXTRAS, HEART_DISEASE_PREDICTION_WITH_CHATBOT, IMG, PROJECTS } from "@/common/assets/page";
import Magnetic from "@/common/magnetic/page";
import Transition from "@/common/transition/page";
import SecFooter from "@/components/SecFooter/page";
import Menu from "@/components/menu/page";
import Navbar from "@/components/navbar/page";
import { useContextPage } from "@/context-api/page";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CircleBet() {
  const { handleLinkClick } = useContextPage();

  const router = useRouter();

  return (
    <Transition backgroundColor="#222222">
      <section className="w-full h-full bg-[#F1F6FF] px-2 font-MADETOMMY_Regular">
        <Menu />
        <Navbar />
        <div className="flex items-center justify-between uppercase border-b border-[#222222] text-lg md:pt-0 pt-12">
          <h1 className="py-2"># PROJECT</h1>
          <h1 className="py-2">001</h1>
        </div>
        <div className="w-full h-fit text-8xl flex flex-col md:pt-20 pt-10">
          <div className="uppercase 2xl:text-8xl xl:text-7xl lg:text-6xl text-5xl">
            <h1>{CIRCLE_BET.name}</h1>
          </div>
          <div className="flex md:flex-row flex-col justify-evenly md:pt-36 pt-12">
            <div className="md:w-60 w-full">
              <h1 className="tracking-wider text-lg uppercase border-b border-[#222222] pb-6 text-[#B9BEC6]">Role</h1>
              <p className="text-xl pt-6 md:pb-0 pb-10">{EXTRAS.task}</p>
            </div>
            <div className="md:w-60 w-full">
              <h1 className="tracking-wider text-lg uppercase border-b border-[#222222] pb-6 text-[#B9BEC6]">Attribution</h1>
              <p className="text-xl pt-6 md:pb-0 pb-10">{EXTRAS.attribution2}</p>
            </div>
            <div className="md:w-60 w-full">
              <h1 className="tracking-wider text-lg uppercase border-b border-[#222222] pb-6 text-[#B9BEC6]">Year</h1>
              <p className="text-xl pt-6 md:pb-0 pb-10">{CIRCLE_BET.year}</p>
            </div>
          </div>
        </div>
        <div className="md:py-36 py-16 relative">
          <div className="absolute md:bottom-0 bottom-72 right-0">
            <Magnetic>
              <div className="cursor-not-allowed md:w-14 w-10 md:h-14 h-10 md:p-[7rem] p-[6rem] ml-32 mr-5 bg-[#48494B] rounded-full text-white mt-10 relative flex items-center justify-center whitespace-nowrap drop-shadow-2xl text-xl z-[1]">Code repo<span className="pl-2 text-xl">&#x2197;</span></div>
            </Magnetic>
          </div>
          <Image src={PROJECTS[0].mobileSrc} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md drop-shadow-2xl" />
        </div>
        <p className="lg:text-2xl text-xl mt-20">Circle Bet is an innovative betting platform designed for small groups or circles of friends to engage in friendly wagering on various events and outcomes. It provides a fun and interactive way for participants to place bets on anything from sports games to trivia nights or even personal challenges. With customizable rules and stakes, Circle Bet fosters camaraderie and healthy competition among friends, all while keeping track of bets and outcomes in a transparent and user-friendly interface. It's not just about winning or losing; it's about enhancing social interactions and adding an extra layer of excitement to group dynamics through friendly bets and shared experiences.</p>
        <div className="bg-[#283352] w-full h-full mt-20 flex justify-center mb-32">
          <div className="xl:w-[60%] w-[90%] xl:h-[60%] h-[90%]">
            <div id="video-laptop">
              <video width="560" height="390" src={CIRCLE_BET.video} autoPlay muted loop />
            </div>
            <div>
              <Image src={CIRCLE_BET.pic2} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md mb-20 drop-shadow-2xl" />
              <Image src={CIRCLE_BET.pic3} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md mb-20 drop-shadow-2xl" />
              <Image src={CIRCLE_BET.pic4} alt={IMG.alt} layout="responsive" width={0} height={0} priority unoptimized className="rounded-md mb-20 drop-shadow-2xl" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between uppercase border-t border-b border-[#222222] text-lg">
          <h1 className="py-2"># NEXT PROJECT</h1>
          <h1 className="py-2">002</h1>
        </div>
        <Link href={"/projects/heart-disease-prediction-with-chatbot"} className="w-full h-full flex justify-center text-center group">
          <div className="md:mx-52 pt-20 border-b border-[#222222] pb-[13.7rem]">
            <h2 className="text-2xl pb-10">Next Project</h2>
            <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl text-5xl group-hover:underline">{HEART_DISEASE_PREDICTION_WITH_CHATBOT.name}</h1>
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
