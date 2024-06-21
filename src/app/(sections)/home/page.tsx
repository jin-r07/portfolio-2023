import Transition from "@/common/transition/page";
import Landing from "@/components/landing/page";

export default function Home() {
    return (
        <Transition backgroundColor="#222222">
            <section className="h-full bg-[#F1F6FF] px-2 font-MADETOMMY_Regular">
                <Landing />
            </section>
        </Transition>
    )
}