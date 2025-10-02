import { motion } from "framer-motion";
import skillsData from "../data/skills";

export default function Skills() {
    return (
        <section
        id="skills"
        className="w-full min-h-screen bg-[#0B192C] text-white px-6 sm:px-12 py-20"
        >
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">My Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => {
                const Icon = skill.icon;
                return (
                <motion.div
                    key={index}
                    className="bg-[#112240] p-5 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="w-16 h-16 flex items-center justify-center mb-3 text-blue-400">
                    <Icon size={40} />
                    </div>
                    <p className="text-center">{skill.name}</p>
                </motion.div>
                );
            })}
            </div>
        </div>
        </section>
    );
}
