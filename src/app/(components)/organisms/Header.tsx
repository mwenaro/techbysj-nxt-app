"use client"
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 shadow-lg z-20 h-20 bg-white">
      <Navbar />
    </header>
  );
}
