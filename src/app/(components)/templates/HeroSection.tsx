'use client';
import { Link as ScrollLink } from 'react-scroll';
import { SITE_TAG_LINE, SITE_TILE } from '@/constants';
import { Img, Typography } from '../atoms';
import { CTAButton } from '../molecules';
import { getImage } from '@/assets/images';
import { BannerImage } from '../organisms';
// import { ScrollLink } from 'react-scroll';

export default function HeroSection() {
  return (
    <section
      id="home"
      className=" w-full  mt-50 md:mt-10 h-screen  "
      
    >
      {/* <BannerImage imageSrc="/assets/images/16x9/6.jpg" className=""> */}
      <BannerImage imageSrc="/assets/images/hero_image.jpeg" className="">
        <div className="bg-gradient-to-r from-skin-primary  w-full h-full bg-transparent z-50">
          <div className="flex flex-col justify-center  items-center w-full  md:w-1/2 ">
            <Typography
              variant="h1"
              className="text-xl md:text-6xl   w-full md:max-w-fit font-bold text-slate-50 md:pt-20 mt-20 px-8"
            >
              <p className="w-full p-2">Unlocking</p>

              <p className="text-skin-accent bg-black/20 w-full p-2">
                Africa&apos;s Potential{' '}
              </p>
              <p className="w-full p-2">Through Technology</p>
            </Typography>

            <CTAButton
              className="
          w-60 text-slate-50 font-bold  text-2xl hover:bg-skin-accent     md:mt-10 my-10"
            >
              <ScrollLink
                to={'contact'}
                duration={500}
                offset={-70}
                smooth={true}
              >
                Get In Touch
              </ScrollLink>
            </CTAButton>
          </div>
        </div>
      </BannerImage>
    </section>
  );
}
