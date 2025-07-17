// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Introduction() {
  return (
    <div className="flex flex-col-reverse xl:flex-row md:items-center mt-12 xl:px-16 items-center py-6 justify-between bg-gradient-to-b from-stone-200">
      <div className="xl:w-screen lg:w-screen md:w-screen px-5 mb-2 xl:px-0">
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="font-semibold text-lg flex items-center gap-1"
        >
          <FaStar className="text-yellow-500" />
          <h1 className="text-neutral-700">Here’s my story</h1>
        </motion.div>
        <motion.p
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="text-2xl font-semibold mt-2 mb-1 text-neutral-700"
        >
          I am <strong className="text-emerald-600">Soudabeh</strong>,{" "}
        </motion.p>
        <motion.p
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="text-xl font-semibold mb-3 "
        >
          Software Engineer | Web Developer{" "}
        </motion.p>
        <motion.p
          variants={container(0.6)}
          initial="hidden"
          animate="visible"
          className="text-lg  text-neutral-600 text-justify"
        >
          I’ve been learning by building one step at a time. This space is where
          I share what I’ve tried, what I’ve learned, and what I’ve been working
          on. Thanks for your attention.
        </motion.p>
      </div>

      <motion.ul className="flex float-left px-5 mb-4 pb-2 gap-4 text-center justify-center items-center">
        <motion.li variants={container(1.1)} initial="hidden" animate="visible">
          <a
            href="https://github.com/Soudabeh-Noorollahi"
            target="_blank"
            className="h-6 w-6 text-neutral-700 hover:text-black"
          >
            <FaGithub className="h-6 w-6 text-emerald-700 hover:text-neutral-600" />
          </a>
        </motion.li>

        <motion.li variants={container(1)} initial="hidden" animate="visible">
          <a
            href="https://www.linkedin.com/in/soudabeh-noorollahi/"
            target="_blank"
          >
            <FaLinkedin className="h-6 w-6 text-emerald-700 hover:text-neutral-600" />
          </a>
        </motion.li>

        <motion.li variants={container(0.7)} initial="hidden" animate="visible">
          <a href="mailto:s.nourollahii@gmail.com" target="_blank">
            <MdEmail className="h-6 w-6 text-emerald-700 hover:text-neutral-600" />
          </a>
        </motion.li>

        <motion.li variants={container(0.8)} initial="hidden" animate="visible">
          <a href="https://t.me/Soudabehnrl" target="_blank">
            <FaTelegram className="h-6 w-6 text-emerald-700 hover:text-neutral-600" />
          </a>
        </motion.li>
      </motion.ul>

      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        src="static/images/profile.png"
        alt="Soudabeh Profile"
        className="w-40 md:w-60 xl:w-[320px] rounded-full object-cover shadow-md mt-6 mb-10 px-3 mx-auto"
      />
    </div>
  );
}

export default Introduction;
