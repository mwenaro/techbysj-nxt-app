import Link from "next/link";
import { LOGO_PIC } from "@/assets/images";
import { Img } from "../atoms";

export default function Navbar() {
  const navLinks: { title: string, href: string }[] = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about-us" },
    { title: "Services", href: "/services" },
    { title: "Courses", href: "/courses" },
    { title: "Contact", href: "/contact" },
    { title: "Learn", href: "/learn" },
  ];
  return (
    <nav className="w-full flex h-20 flex-col md:flex-row items-center justify-between p-4 px-8 font-normal bg-white text-base">
      <Link href={"/"} className="w-40 h-20 flex justify-start items-center bg-red-600 ">
        <Img src={LOGO_PIC} alt={"Logo Picture"} className="" />

      </Link>

      <ul className="w-full md:w-fit flex flex-col md:flex-row items-center gap-5 md:gap-10 ">
        {navLinks.map((link, indx) => {
          if (indx === navLinks.length - 1) return <li key={link.href} className="w-full md:w-fit"><button className="bg-skin-primary text-white hover:bg-skin-accent rounded-md p-3 px-6 w-full md:w-fit">{link.title}</button></li>
          if (link.title.toLocaleLowerCase().split(' ').includes('about')) return <li key={link.href} className="w-full md:w-fit">{link.title.split(' ')[0]}</li>

          return <li key={link.href} className="w-full md:w-fit">{link.title}</li>
        })}
      </ul>
    </nav>
  );
}
