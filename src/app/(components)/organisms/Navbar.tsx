'use client';
import { Link as ScrollLink } from 'react-scroll';

import { Logo } from '../molecules';
import { Typography } from '../atoms';

const navLinks: { title: string; href: string }[] = [
  { title: 'Home', href: 'home' },
  { title: 'About us', href: 'about' },
  { title: 'Services', href: 'services' },
  { title: 'Courses', href: 'courses' },
  { title: 'Contact', href: 'contact' },
  { title: 'Gallery', href: 'gallery' },
  { title: 'Learn', href: 'learn' },
];

export default function Navbar() {
  return (
    <nav className="w-full flex h-fit md:h-20 flex-col md:flex-row items-center justify-between  pb-6 px-6 pt-0 md:p-4 md:px-8 font-normal bg-white text-base">
      <ScrollLink
        className="h-20 flex justify-start items-center p-2 w-fit"
        to={'home'}
        smooth={true}
        duration={500}
        offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
      >
        <Logo /> <Typography variant="h1">TechBySj </Typography>
      </ScrollLink>

      <ul className="w-full md:w-fit flex flex-col md:flex-row items-center gap-5 md:gap-10 bg-inherit p-4 mb-5 sm:mb-0">
        {navLinks.map((link, indx) => {
          if (indx === navLinks.length - 1)
            return (
              <li key={link.href} className="w-full md:w-fit hover:rounded-md ">
                <button className="bg-skin-primary text-white hover:bg-skin-accent    rounded-md p-3 px-6 w-full md:w-fit">
                  {link.title}
                </button>
              </li>
            );
          if (link.title.toLocaleLowerCase().split(' ').includes('about'))
            return (
              <li
                key={link.href}
                className="w-full md:w-fit hover:rounded-md hover:bg-skin-primary hover:px-6 hover:py-3"
              >
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
                >
                  <span>{link.title.split(' ')[0]}</span>
                </ScrollLink>
              </li>
            );

          return (
            <li
              key={link.href}
              className="w-full md:w-fit hover:rounded-md hover:bg-skin-primary hover:px-6 hover:py-3"
            >
              <ScrollLink
                to={link.href}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
              >
                <span>{link.title}</span>
              </ScrollLink>
            </li>
          );
        })}
      </ul>

      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
