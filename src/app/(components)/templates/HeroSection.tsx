'use client';
import { Link as ScrollLink } from 'react-scroll';
import { SITE_TAG_LINE, SITE_TILE } from '@/constants';
import { Img, Typography } from '../atoms';
import { CTAButton } from '../molecules';
import { getImage } from '@/assets/images';
// import { ScrollLink } from 'react-scroll';

export default function HeroSection() {
  return (
    <section
      id="home"
      className=" w-full  hero-image bg-no-repeat bg-opacity-95 object-fit relative"
      // style={{ backgroundImage: `url(${getImage('/binary.png')}})` }/}
      style={{ backgroundImage: `url(/assets/images/logo.png)` }}
    >
      {/* <Img src="/assets/images/16x9/6.jpg" alt=''/> */}
      <div className="bg-gradient-to-r from-skin-primary  w-full min-h-screen bg-opacity-75 z-50">
        <div className="flex flex-col justify-center  items-center w-full  md:w-3/4 ">
          <Typography
            variant="h1"
            className="text-2xl md:text-7xl  md:leading-[8rem] leading-[5rem] w-full md:max-w-fit  text-center font-bold text-slate-50 md:pt-48 pt-32 px-8"
          >
            Unlocking  
            {/* {SITE_TILE} {' '} */}

            {/* <span className="text-skin-accent   ">reality </span> */}
            <span className="text-skin-accent bg-black/20 p-2 m-2">Africa&apos;s Potential </span> Trough Technology
          </Typography>
          <Typography
            variant="h2"
            className="md:text-2xl text-2xl leading-[3rem] md:leading-[3rem]  text-left ml-12 pl-4 pt-8  text-white"
          >
            {/* From concept to deployment, we follow an agile development approach,
            ensuring timely delivery and seamless communication.{' '} */}
            {SITE_TAG_LINE}
          </Typography>

          <CTAButton
            // onClick={() => alert('Hello')}
            className="
          w-60 text-slate-50 font-bold  text-2xl bg-skin-accent    md:mt-24 my-10"
          >
            <ScrollLink 
            to = {'contact'}
            duration = {500}
            offset = {-70}
            smooth= {true}
            
            >
             Get In Touch 
            </ScrollLink>
            
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
