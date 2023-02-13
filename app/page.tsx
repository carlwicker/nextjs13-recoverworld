"use client";

import Footer from "@/components/footer/Footer";
import LatestReleases from "@/components/latestReleases/latestReleases";
import TopBar from "@/components/topbar/TopBar";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
  });

  return (
    <>
      <motion.div
        style={{ scaleX: scaleX }}
        className="bg-red-500 fixed top-0 left-0 right-0 h-[4px] origin-left -z-10 "
      />
      <div className="container mx-auto text-left px-2 ">
        <TopBar />

        <LatestReleases />
        <Footer />
      </div>
    </>
  );
}
