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
      className=" w-full  hero-image bg-no-repeat bg-opacity-95 object-fit relative mt-50 md:mt-10"
      // style={{ backgroundImage: `url(${getImage('/binary.png')}})` }/}
      style={{ backgroundImage: `url(/assets/images/logo.png)` }}
    >
      {/* <Img src="/assets/images/16x9/6.jpg" alt=''/> */}
      <div className="bg-gradient-to-r from-skin-primary  w-full min-h-screen bg-opacity-75 z-50">
        <div className="flex flex-col justify-center  items-center w-full  md:w-1/2 ">
          <Typography
            variant="h1"
            className="text-2xl md:text-6xl   w-full md:max-w-fit font-bold text-slate-50 md:pt-20 mt-20 px-8"
          >
            <p className="w-full p-2">Unlocking</p>
            {/* {SITE_TILE} {' '} */}

            {/* <span className="text-skin-accent   ">reality </span> */}
            <p className="text-skin-accent bg-black/20 w-full p-2">
              Africa&apos;s Potential{' '}
            </p>
            <p className='w-full p-2'>Through Technology</p>
          </Typography>
          

          <CTAButton
            // onClick={() => alert('Hello')}
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
    </section>
  );
}
