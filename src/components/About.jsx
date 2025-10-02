import { motion } from "framer-motion";

export default function About() {
    return (
        <section
        id="about"
        className="w-full min-h-screen bg-[#1E3E62] text-white px-6 sm:px-12 py-20 flex items-center"
        >
        <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Heading */}
            <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            About <span className="text-[#FF6500]">Me</span>
            </motion.h2>

            {/* Description */}
            <motion.p
            className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            I am a passionate{" "}
            <span className="text-[#FF6500] font-semibold">
                Frontend Developer </span>
            with experience in building responsive, user-friendly websites and web
            applications. I love turning creative ideas into real-world digital
            experiences using modern technologies like React, Tailwind CSS, and
            JavaScript.
            </motion.p>

            {/* Highlights / Skills */}
            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            >
            <div className="bg-[#0B192C] p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#FF6500]">Frontend</h3>
                <p className="text-gray-300 mt-2">
                HTML5, CSS3, JavaScript, React, Tailwind
                </p>
            </div>
            <div className="bg-[#0B192C] p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#FF6500]">UI/UX</h3>
                <p className="text-gray-300 mt-2">
                Figma, Canva, Adobe XD, Responsive Design
                </p>
            </div>
            <div className="bg-[#0B192C] p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#FF6500]">
                Other Tools
                </h3>
                <p className="text-gray-300 mt-2">Git, GitHub, Bootstrap, jQuery</p>
            </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.a
            href="src/assets/Pratimas_Resume.pdf"
            download
            className="inline-block mt-10 bg-[#FF6500] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55a00] transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            Download CV
            </motion.a>
        </div>
        </section>
    );
}
