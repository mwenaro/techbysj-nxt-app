import Link from "next/link";
import { Image } from "../atoms";

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
      <Link href={""}>
        {/* <Image src={""} alt={""} /> */}
        Logo
      </Link>

      <ul className="w-full md:w-fit flex flex-col md:flex-row items-center gap-10 text-xl">
        {navLinks.map((link,indx) => {
 if(indx ===navLinks.length-1) return <li key={link.href}><button className="bg-blue-900/100 text-white rounded-md p-3 px-6">{link.title}</button></li>
 return<li key={link.href}>{link.title}</li>
})}
      </ul>
    </nav>
  );
}
