import { motion } from "framer-motion";

export default function EmailWeb() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView="show">
      <motion.div variants={item}>
        Email:{" "}
        <a
          href="mailto:info@recoverworld.com"
          rel="noreferrer"
          className="hover:text-red-500 transition-all duration-500 ease-out"
        >
          info@recoverworld.com
        </a>
      </motion.div>
      <motion.div variants={item}>
        Web:{" "}
        <a
          href="http://recoverworld.com"
          rel="noreferrer"
          target="_blank"
          className="hover:text-red-500 transition-all duration-500 ease-out"
        >
          http://recoverworld.com
        </a>
      </motion.div>
    </motion.div>
  );
}
