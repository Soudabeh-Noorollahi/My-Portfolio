// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { projects } from "../../constants/Project";
import { FaArrowTrendUp } from "react-icons/fa6";

function Projects() {
  return (
    <div className="grid justify-center px-6 mx-auto mt-10">
      <h4 className="text-3xl w-fit border-b-2 mx-auto pb-1 mb-4 border-emerald-600 font-bold text-neutral-700">
        Recent Projects
      </h4>
      <div className="grid xl:mx-auto xl:grid-cols-3 gap-x-10 ">
        {projects.map((project) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            key={project.id}
            className="grid bg-white rounded-lg shadow-xl mb-10 xl:w-[400px] mx-auto"
          >
            <img
              className="rounded-t-lg w-[400px]  h-[240px]"
              src={project.image}
            />
            <div className="pt-2 pb-5 grid relative rounded-b-lg">
              <span className="px-2">
                <h3 className="text-xl font-bold mb-2 bg-emerald-100 w-fit px-2 rounded text-neutral-600 ">
                  {project.name}
                </h3>
              </span>
              <p className="w-fit h-15 border-neutral-400 px-2 text-neutral-600 mb-3">
                {project.desc}
              </p>
              <span className="p-2 absolute bottom-0 right-0 hover:text-red-600 ">
                <a
                  href={project.url}
                  className="flex border-b border-neutral-500 mx-2 my-1 items-center gap-2"
                >
                  <p className="text-sm text-neutral-600">View in Code</p>
                  <FaArrowTrendUp className="h-5 w-5 text-neutral-600" />
                </a>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
