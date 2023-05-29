import Link from "next/link";
import { LOGO_PIC } from "@/assets/images";
import { Img } from "../atoms";

export default function Navbar() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about-us" },
    { title: "Services", href: "/services" },
    { title: "Courses", href: "/courses" },
    { title: "Contact", href: "/contact" },
    { title: "Learn", href: "/learn" },
  ];
  return (
    <nav className="w-full flex bg-white flex-col md:flex-row items-center justify-between p-4 px-8 font-light">
      <Link href={"/"} className="w-40 h-20">
        <Img src={LOGO_PIC} alt={"Logo Picture"} className="" />

      </Link>

      <ul className="w-full md:w-fit flex flex-col md:flex-row items-center gap-10 text-xl">
        {navLinks.map((link, indx) => {
          if (indx === navLinks.length - 1) return <li key={link.href} className="w-full md:w-fit"><button className="bg-skin-primary text-white hover:bg-skin-accent rounded-md p-3 px-6 w-full md:w-fit">{link.title}</button></li>
          return <li key={link.href} className="w-full md:w-fit">{link.title}</li>
        })}
      </ul>
    </nav>
  );
}
