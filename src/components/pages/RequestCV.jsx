// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function RequestCV() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md  max-w-md w-full"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-violet-600 mb-4">
          Request My CV
        </h2>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          If you're interested in receiving my CV, feel free to get in touch.
          I'd be happy to send it to you by email.
        </p>
        <a
          href="mailto:s.nourollahii@gmail.com"
          className="inline-flex items-center gap-2 text-violet-500 font-medium hover:underline mb-6 text-sm sm:text-base"
        >
          <MdEmail className="text-xl" />
          s.nourollahii@gmail.com
        </a>

        <div className="mt-5">
          <Link to="/">
            <button className="w-full sm:w-auto px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 font-semibold transition text-sm sm:text-base">
              Back to Homepage
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default RequestCV;
