import Image from "next/image";
import { Inter } from "next/font/google";
import SEO from "@/components/SEO";
import { NavBar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero";
import AnimatedCarousel from "@/components/animatedCarousel";
import { AboutUsComponent } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { WaitList } from "@/components/landing/waitlist";
import { TestimonialsComponent } from "@/components/landing/testimonials";
import { ProductsComponent } from "@/components/landing/products";
import { CallToAction } from "@/components/landing/cta";
import { Solutions } from "@/components/landing/solutions";

const images = [
  "/assets/svgs/home-carousel/openzephilin.svg",
  "/assets/svgs/home-carousel/oracle.svg",
  "/assets/svgs/home-carousel/protonet.svg",
  "/assets/svgs/home-carousel/segment.svg",
  "/assets/svgs/home-carousel/samsung.svg",
  "/assets/svgs/home-carousel/morpheus.svg",
  "/assets/svgs/home-carousel/monday.svg",
];

export default function Home() {
  return (
    <>
      <SEO />
      <main className="w-full flex flex-col bg-white">
         <HeroSection />
        {/* <div className="px-9 bg-white">
          <section className="w-full bg-gradient-to-br from-white to-white p-5 border-t">
            <h1 className="text-center text-lg text-black sm:text-xl">
              Partners growing with CI FInesser
            </h1>
          </section>
        </div> */}
        {/* <AnimatedCarousel images={images} />  */}
        <AboutUsComponent />
        <div className="bg-no-repeat bg-cover bg-center md:bg bg-white" style={{ backgroundImage: "url('assets/svgs/section.svg')" }}>
          <Solutions />
          <div className="lg:px-96 px-8 -mt-[10rem]">
            <CallToAction />
          </div>
          <ProductsComponent />
        </div>
        {/* <TestimonialsComponent /> */}
        <WaitList />
        <Footer /> 
      </main>
    </>
  );
}
