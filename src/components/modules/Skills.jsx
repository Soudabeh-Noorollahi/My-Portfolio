// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const skills = [
  { icon: FaHtml5, label: "HTML5", color: "text-orange-600" },
  { icon: FaCss3, label: "CSS3", color: "text-blue-500" },
  { icon: FaJs, label: "JavaScript", color: "text-yellow-400" },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-700" },
  { icon: FaReact, label: "React", color: "text-blue-400" },
  { icon: RiNextjsFill, label: "Next.js", color: "" },
  { icon: RiTailwindCssFill, label: "TailwindCSS", color: "text-blue-400" },
  { icon: GrGraphQl, label: "GraphQL", color: "text-pink-500" },
  { icon: SiMongodb, label: "MongoDB", color: "text-green-600" },
  { icon: FaGitAlt, label: "Git", color: "text-orange-500" },
  { icon: FaGithub, label: "GitHub", color: "" },
  { icon: FaFigma, label: "Figma", color: "text-orange-600" },
];

function Skills() {
  return (
    <div className="grid xl:px-16 px-6 mx-auto mb-10 pb-14">
      <h4 className="text-3xl w-fit px-3 font-bold xl:float-right mx-auto text-neutral-700 mt-8 border-b-2 pb-2 border-emerald-600">
        Expertise
      </h4>

      <motion.div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-3 mt-6 gap-6 mx-auto text-center">
        {skills.map(({ icon: Icon, label, color }, index) => (
          <motion.div
            key={label}
            className="flex flex-col items-center justify-center w-[90px] h-[90px] bg-gradient-to-t from-stone-100 rounded-md hover:border-b-2 hover:border-emerald-400 transition-colors cursor-pointer"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Icon className={`w-8 h-8 ${color}`} />
            <span className="text-xs mt-1 text-neutral-600 font-medium">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
