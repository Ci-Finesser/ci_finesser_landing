import { FC } from "react";
import { NavBar } from "./navbar";

export const HeroSection: FC = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-white bg-left" style={{ backgroundImage: "url('/assets/svgs/hero.svg')" }} >
            <NavBar />
            <section className="lex justify-center items-center h-screen">
                <h1 className="text-6xl text-center font-bold">Welcome!</h1>
            </section>
        </div>
    )
}