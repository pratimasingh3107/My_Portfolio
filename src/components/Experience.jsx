import { motion } from "framer-motion";
import experiences from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-[#000000] text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-[#FF6500]">Experience</span>
        </motion.h2>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#1E3E62] rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#FF6500]">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-300">{exp.duration}</p>
              <p className="mt-2 font-medium">{exp.role}</p>
              <p className="mt-2 text-gray-300">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
