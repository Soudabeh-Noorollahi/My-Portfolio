// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";


function RequestCV() {
  return (
    <div className="flex items-center justify-center h-[70vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center bg-white p-8 rounded-lg shadow-md max-w-md"
      >
        <h2 className="text-2xl font-bold text-violet-700 mb-4">Request My CV</h2>
        <p className="text-gray-700 mb-3">
         If you're interested in receiving my CV, feel free to get in touch. I'd be happy to send it to you by email.
        </p>
        <a
          href="mailto:s.nourollahii@gmail.com"
          className="inline-flex items-center gap-2 text-violet-600 font-medium hover:underline"
        >
          <MdEmail className="text-xl" />
          s.nourollahii@gmail.com
        </a>
      </motion.div>
    </div>
  );
}

export default RequestCV;
