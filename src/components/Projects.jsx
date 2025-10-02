import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="w-full min-h-screen bg-[#0B192C] text-white px-6 sm:px-12 py-20">
        <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            My <span className="text-[#FF6500]">Projects</span>
            </motion.h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
                <motion.div
                key={index}
                className="bg-[#1E3E62] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                {/* Project Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-[#FF6500]">
                    {project.title}
                    </h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, i) => (
                        <span
                        key={i}
                        className="text-sm bg-[#0B192C] px-3 py-1 rounded-md"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                    {project.live && project.live !== "#" && (
                        <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF6500] text-white px-4 py-2 rounded-md hover:bg-[#e55a00] transition"
                        >
                        Live Demo
                        </a>
                    )}
                    {project.github && project.github !== "#" && (
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#FF6500] text-[#FF6500] px-4 py-2 rounded-md hover:bg-[#FF6500] hover:text-white transition"
                        >
                        GitHub
                        </a>
                    )}
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}
