import Hero from "@/components/pageSpecific/home/hero";
import NoSSR from "@/hooks/NoSSR";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Line = dynamic(() => import("@/components/Line"));
// const BubbleUnderlay = dynamic(
//   () => import("@/components/custom/BubbelUnderLay")
// );

// import  BubbleUnderlay  from "@/components/custom/BubbelUnderLay";
export default function Home() {
  return (
    // make whole page with 10/12 width and center it on above medium screens
    <>
      {/* <Nav /> */}
      <main className="app xl:px-[11%] md:px-[5%] px-[2%] py-[2.5rem] flex flex-col lg:gap-20 gap-8">
        {/* paint each section */}
        <Suspense>
          <NoSSR>
            {/* main page animation */}
            <Hero />
          </NoSSR>
        </Suspense>

        {/* 
        <Line />
        <Section2 editorLink={editorLink} />
        <Line />
        <SectionFeatures editorLink={editorLink} />
        <Line />
        <SectionAbout editorLink={editorLink} />
        <Line />
        <SectionPrice />
        <Line />
        <Footer />
        <BackToTopBtn />
         */}
      </main>
    </>
  );
}
