import { motion } from "framer-motion";
import bgImg from "../assets/bg3.jpg";
import profilePic from "../assets/profile2.jpg";

export default function Hero() {
        return (
        <section id="hero" className="relative w-full min-h-screen bg-[#1E3E62] flex items-center justify-center px-4 sm:px-10 lg:px-16"
            style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
            {/* Optional shaped background overlay or decorative shape */}
            <div className="absolute inset-0 bg-black/60 overflow-hidden">
            {/* You can put an SVG or gradient overlay here if desired */}
            </div>

            <div className="relative z-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between max-w-6xl w-full py-12">
            {/* Left: Text Content */}
            <motion.div
                className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white">
                Hi, I'm <span className="text-[#FF6500]">Pratima Singh</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-xl text-gray-200 max-w-2xl">
                Frontend Developer & UI/UX Designer | Building modern and
                responsive web apps
                </p>
                <div className="mt-6">
                <a
                    href="#projects"
                    className="bg-[#FF6500] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55a00] transition"
                >
                    View Projects
                </a>
                </div>
            </motion.div>

            <motion.div
                className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {/* Decorative Shape */}
                <div className="absolute -top-10 -right-10 w-70 h-70 md:w-100 md:h-100 bg-gradient-to-tr from-[#FF6500] to-[#1E3E62] rounded-full opacity-30 blur-3xl animate-pulse"></div>

                {/* Profile Photo */}
                <img src={profilePic} alt="Profile" className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-4 border-[#FF6500] object-cover z-10"/>
            </motion.div>
            </div>
        </section>
        );
}
