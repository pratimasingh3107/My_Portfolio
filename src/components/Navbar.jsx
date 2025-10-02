import { Menu, X } from "lucide-react"; // icons
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="bg-[#0B192C] text-white fixed w-full top-0 left-0 shadow-md z-50">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold text-[#FF6500]">Port<span className="text-[#fff]">Folio</span></a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} className="hover:text-[#FF6500] transition-colors duration-300" >{link.name}</a>
                    </li>
                ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#1E3E62] text-white py-2">
                <ul className="flex flex-col space-y-5 p-5">
                    {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} className="block hover:text-[#FF6500] transition-colors duration-300" onClick={() => setIsOpen(false)}>
                        {link.name}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
