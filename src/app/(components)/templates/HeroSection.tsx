"use client";

import { Typography } from "../atoms";
import { CTAButton } from "../molecules";
import { getImage } from "@/assets/images";

export default function HeroSection() {
  return (
    <section
      id="home"
      className=" w-full  hero-image bg-no-repeat bg-right object-fit"
      style={{ backgroundImage: `url(${getImage("/binary.png")}})` }}
    >
      <div className="bg-gradient-to-r from-skin-primary  w-full min-h-screen ">
        <div className="flex flex-col justify-center  items-center w-full  md:w-3/4 ">
          <Typography
            variant="h1"
            className="md:text-8xl text-5xl md:leading-[8rem] leading-[5rem] w-full md:max-w-fit  text-center font-bold text-slate-50 md:pt-48 pt-32 px-8"
          >
            Developing your ideas into{" "}
            <span className="text-skin-accent   ">reality </span>
          </Typography>
          <Typography
            variant="h2"
            className="md:text-2xl text-2xl leading-[3rem] md:leading-[3rem]  text-left ml-12 pl-4 pt-8  text-white"
          >
            From concept to deployment, we follow an agile development approach,
            ensuring timely delivery and seamless communication.{" "}
          </Typography>

          <CTAButton
            onClick={() => alert("Hello")}
            className="
          w-60 text-slate-50 font-bold  text-2xl bg-skin-accent    md:mt-24 my-10"
          >
            Get In Touch
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
