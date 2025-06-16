
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
    <footer className="w-full mt-20 py-8 bg-gradient-to-t from-stone-200 flex flex-col items-center">
      <div
        className="flex gap-5 mb-4"
   
      >
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-emerald-600 bg-white rounded-full p-3 shadow-sm hover:shadow-md transition-all"
          >
            <i className="text-xl">{link.icon}</i>
          </a>
        ))}
      </div>
      <div className="w-1/2 h-px bg-gray-300 my-4" />
      <a href="#" className="mx-auto mb-10 mt-4 text-zinc-700">
        Developed by{" "}
        <strong className="text-emerald-600  font-bold"  >Soudabeh Noorollahi</strong> |{" "}
        {new Date().getFullYear()}
      </a>
    </footer>
  );
}

export default Footer;
