import Link from "next/link";
import { LOGO_PIC } from "@/assets/images";
import { Img } from "../atoms";
import { Logo } from "../molecules";

export default function Navbar() {
  const navLinks: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about-us" },
    { title: "Services", href: "/services" },
    { title: "Courses", href: "/courses" },
    { title: "Contact", href: "/contact" },
    { title: "Learn", href: "/learn" },
  ];

  return (
    <nav className="w-full flex h-20 flex-col md:flex-row items-center justify-between p-4 px-8 font-normal bg-white text-base">
      <Link
        href={"/"}
        className="w-40 h-20 flex justify-start items-center p-2 "
      >
        <Logo />
      </Link>

      <ul className="w-full md:w-fit flex flex-col md:flex-row items-center gap-5 md:gap-10 ">
        {navLinks.map((link, indx) => {
          if (indx === navLinks.length - 1)
            return (
              <li key={link.href} className="w-full md:w-fit">
                <button className="bg-skin-primary text-white hover:bg-skin-accent    rounded-md p-3 px-6 w-full md:w-fit">
                  {link.title}
                </button>
              </li>
            );
          if (link.title.toLocaleLowerCase().split(" ").includes("about"))
            return (
              <li key={link.href} className="w-full md:w-fit">
                <span>{link.title.split(" ")[0]}</span>
              </li>
            );

          return (
            <li key={link.href} className="w-full md:w-fit">
              <span>{link.title}</span>
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
