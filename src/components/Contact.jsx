import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_wsif3vg", 
            "template_xsrg885", 
            form.current,
            "HbHO-SGr7QoYJbcQS" 
          )
          .then(
            () => {
              alert("✅ Message sent successfully!");
              form.current.reset();
            },
            (error) => {
              alert("❌ Failed to send message.");
              console.error(error);
            }
          );
    };

    return (
        <section
        id="contact"
        className="w-full min-h-screen bg-[#0B192C] text-white px-6 sm:px-12 py-20"
        >
        <div className="max-w-5xl mx-auto text-center">
            {/* Heading */}
            <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            Get In <span className="text-[#FF6500]">Touch</span>
            </motion.h2>

            <motion.p
            className="text-gray-300 max-w-xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            >
            Have a project in mind, or just want to say hello? Feel free to
            reach out!
            </motion.p>

            {/* Contact Info */}
            <motion.div
            className="flex justify-center gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            >
            <a
                href="mailto:pratimas.3107@gmail.com"
                className="flex items-center gap-2 bg-[#1E3E62] px-4 py-2 rounded-xl hover:bg-[#FF6500] transition"
            >
                <Mail size={20} /> Email
            </a>
            <a
                href="https://github.com/pratimasingh3107"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1E3E62] px-4 py-2 rounded-xl hover:bg-[#FF6500] transition"
            >
                <Github size={20} /> GitHub
            </a>
            <a
                href="https://www.linkedin.com/in/pratima-singh-947964278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1E3E62] px-4 py-2 rounded-xl hover:bg-[#FF6500] transition"
            >
                <Linkedin size={20} /> LinkedIn
            </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#1E3E62] rounded-xl p-6 sm:p-10 max-w-2xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            >
            <input
                type="text"
                name="name" 
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-[#FF6500]"
                required
            />
            <input
                type="email"
                name="from_email" 
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-[#FF6500]"
                required
            />
            <textarea
                name="message" 
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-[#FF6500]"
                required
            ></textarea>
            <button
                type="submit"
                className="w-full bg-[#FF6500] text-black font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
            >
                Send Message
            </button>
            </motion.form>
        </div>
        </section>
    );
    }
