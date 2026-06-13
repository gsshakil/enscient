import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/navigation/Navbar";
import Chapter01Silence from "@/components/chapters/Chapter01Silence";
import Chapter02Question from "@/components/chapters/Chapter02Question";
import Chapter03Circles from "@/components/chapters/Chapter03Circles";
import Chapter04Forest from "@/components/chapters/Chapter04Forest";
import Chapter05Principles from "@/components/chapters/Chapter05Principles";
import Chapter06Ecosystem from "@/components/chapters/Chapter06Ecosystem";
import Chapter07Gallery from "@/components/chapters/Chapter07Gallery";
import Chapter08Impact from "@/components/chapters/Chapter08Impact";
import Chapter09Future from "@/components/chapters/Chapter09Future";
import Chapter10Invitation from "@/components/chapters/Chapter10Invitation";
import FinalScene from "@/components/chapters/FinalScene";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Chapter01Silence />
        <Chapter02Question />
        <Chapter03Circles />
        <Chapter04Forest />
        <Chapter05Principles />
        <Chapter06Ecosystem />
        <Chapter07Gallery />
        <Chapter08Impact />
        <Chapter09Future />
        <Chapter10Invitation />
        <FinalScene />
      </main>
    </SmoothScroll>
  );
}
