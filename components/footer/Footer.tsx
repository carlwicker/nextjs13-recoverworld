import EmailWeb from "./EmailWeb";
import Social from "./Social";
import TextBlock from "./TextBlock";
import { motion } from "framer-motion";

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex w-full justify-between lg:gap-40 gap-10 lg:pt-20 pt-10 lg:pb-40 pb-20 lg:flex-row flex-col"
    >
      <motion.div className="lg:w-1/3" variants={item}>
        <EmailWeb />
      </motion.div>
      <motion.div className="lg:w-1/3" variants={item}>
        <TextBlock />
      </motion.div>
      <motion.div className="lg:w-1/3" variants={item}>
        <Social />
      </motion.div>
    </motion.div>
  );
}
