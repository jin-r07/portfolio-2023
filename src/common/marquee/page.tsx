import MarqueeComponent from "react-fast-marquee";
import { LuArrowDownLeft } from "react-icons/lu";

export default function Marquee() {
    return (
        <MarqueeComponent pauseOnHover className="uppercase 2xl:text-7xl xl:text-6xl text-5xl mt-20 bg-[#222222] text-white font-MADETOMMY_Regular" speed={30}>
            <p className="flex py-10">John Hang Rai <LuArrowDownLeft className="ml-10 mr-10"/></p>
            <p className="flex py-10">John Hang Rai <LuArrowDownLeft className="ml-10 mr-10"/></p>
            <p className="flex py-10">John Hang Rai <LuArrowDownLeft className="ml-10 mr-10"/></p>
            <p className="flex py-10">John Hang Rai <LuArrowDownLeft className="ml-10 mr-10"/></p>
            <p className="flex py-10">John Hang Rai <LuArrowDownLeft className="ml-10 mr-10"/></p>
            <p className="flex py-10">John Hang Rai <LuArrowDownLeft className="ml-10 mr-10"/></p>
            <p className="flex py-10">John Hang Rai <LuArrowDownLeft className="ml-10 mr-10"/></p>
        </MarqueeComponent>
    )
}
