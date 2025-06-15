// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    id: 1,
    icon: <MdEmail />,
    url: "mailto:s.nourollahii@gmail.com",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/Soudabeh-Noorollahi",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/soudabeh-noorollahi",
  },
  {
    id: 4,
    icon: <FaTelegram />,
    url: "https://t.me/Soudabehnrl",
  },
];

function Footer() {
  return (
    <motion.footer
      className="w-full mt-20 py-8 bg-gradient-to-t from-sky-100 flex flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex gap-5 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-violet-600 bg-white rounded-full p-3 shadow-sm hover:shadow-md transition-all"
          >
            <i className="text-xl">{link.icon}</i>
          </a>
        ))}
      </motion.div>
      <div className="w-1/2 h-px bg-gray-300 my-4" />
      <a href="#" className="mx-auto mb-10 mt-4 text-zinc-500">
        Developed by{" "}
        <strong className="text-violet-600 ">Soudabeh Noorollahi</strong> |{" "}
        {new Date().getFullYear()}
      </a>
    </motion.footer>
  );
}

export default Footer;
