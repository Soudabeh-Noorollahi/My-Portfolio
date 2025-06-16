// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div
      className=" xl:flex sm:grid md:grid lg:flex md:items-center xl:px-16 px-6 items-center  justify-between"
      id="about"
    >
      <div className="grid">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-3xl w-fit border-b-2 mx-auto pb-1 mb-4 border-emerald-600 font-bold text-neutral-700">
            About Me
          </h4>
          <p className="text-xl mx-auto leading-8 text-neutral-600 text-justify ">
            I’m a software engineer with a background in computer engineering
            and over 10 years of experience solving real world problems through
            technology. My journey started in enterprise systems, but over time,
            I’ve grown passionate about modern web development and user centered
            design. I enjoy turning ideas into clean, useful software especially
            in collaborative, agile teams.
          </p>
          <p className="mb-5 text-xl leading-8 text-neutral-600 text-justify">
            These days, I spend most of my time sharpening my skills with
            JavaScript, React, and UI/UX practices. I've also been exploring
            backend tools like GraphQL and MongoDB, and building full-stack
            projects with Next.js. Along the way, I’ve developed a solid
            understanding of Agile workflows and Scrum practices, which help me
            work better in team-based environments. This portfolio is part of
            that learning path where I challenge myself, explore new tools, and
            build with curiosity.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
