"use client";

import Footer from "@/components/footer/Footer";
import LatestReleases from "@/components/latestReleases/latestReleases";
import TopBar from "@/components/topbar/TopBar";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
  }) as any; // only way to get .current to work in linter

  return (
    <>
      <motion.div
        style={{ scaleX: scaleX, rotateX: scaleX.current * 5000 }}
        className="bg-red-500 fixed top-0 left-0 right-0 h-[4px] origin-left -z-10"
      />
      <div className="container mx-auto text-left">
        <TopBar />

        <LatestReleases />
        <Footer />
      </div>
    </>
  );
}
