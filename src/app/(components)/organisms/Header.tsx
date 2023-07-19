"use client"
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="w-full md:w-full fixed top-0 left-0 right-0 md:shadow-lg z-20 h-20 max-h-fit md:bg-white">
      <Navbar />
    </header>
  );
}
