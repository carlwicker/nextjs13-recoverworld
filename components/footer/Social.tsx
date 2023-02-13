import { motion } from "framer-motion";

export default function Social() {
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
    <motion.div
      className="flex flex-col"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <motion.a
        href="https://www.facebook.com/Recoverworld"
        target="_blank"
        rel="noreferrer"
        className="hover:text-red-500 transition-all duration-500 ease-out"
        variants={item}
      >
        Facebook
      </motion.a>
      <motion.a
        href="https://twitter.com/recoverworld"
        target="_blank"
        rel="noreferrer"
        className="hover:text-red-500 transition-all duration-500 ease-out"
        variants={item}
      >
        Twitter
      </motion.a>
      <motion.a
        href="https://www.instagram.com/recoverworld_family/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-red-500 transition-all duration-500 ease-out"
        variants={item}
      >
        Instgram
      </motion.a>
      <motion.a
        href="https://www.youtube.com/c/Recoverworld"
        target="_blank"
        rel="noreferrer"
        className="hover:text-red-500 transition-all duration-500 ease-out"
        variants={item}
      >
        YouTube
      </motion.a>
    </motion.div>
  );
}
