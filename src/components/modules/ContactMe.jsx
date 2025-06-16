// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent (mock)!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-10 xl:px-16 mt-20">
      <motion.h3
        className="text-2xl font-semibold w-fit text-neutral-700 mx-auto mb-10 border-b-2 pb-2 border-emerald-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h3>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-xl mx-auto bg-white shadow-xl rounded-lg p-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

export default ContactMe;
