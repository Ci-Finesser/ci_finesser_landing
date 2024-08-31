import Image from "next/image";
import { Inter } from "next/font/google";
import SEO from "@/components/SEO";
import { NavBar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero";
import AnimatedCarousel from "@/components/animatedCarousel";

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
      <main className="h-screen w-full">
        <HeroSection />
        <section className="w-full bg-gradient-to-br from-white to-white p-5 border-t ">
          <h1 className="text-center text-lg text-black sm:text-xl">
            Partners growing with CI FInesser
          </h1>
        </section>
        <AnimatedCarousel images={images} />
      </main>
    </>
  );
}
