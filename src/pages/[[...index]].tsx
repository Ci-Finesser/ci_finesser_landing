import Image from "next/image";
import { Inter } from "next/font/google";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SEO />
    </>
  );
}
