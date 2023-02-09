import ArtistTitle from "./ArtistTitle";
import Beatport from "./Beatport";
import CatLabel from "./CatLabel";
import MP3Wav from "./MP3Wav";
import Spotify from "./Spotify";
import Tracklisting from "./TrackListing";
import { IRelease } from "@/interfaces/IRelease";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

interface IReleaseData {
  [key: string]: IRelease;
}

export default function Release({ release }: IReleaseData) {
  let { scrollYProgress } = useScroll() as any;
  let y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100 * 16])
  ) as any;

  let container = {
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
      className="w-full flex flex-col gap-20 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        initial={{ opacity: 1 }}
        style={{ x: y, rotateZ: y, scale: 2 }}
        className="bg-red-600 w-[160px] h-[160px] flex -z-50 absolute"
      ></motion.div>

      <motion.div variants={item}>
        <CatLabel label={release.label} catNum={release.catNum} />
      </motion.div>

      <motion.div variants={item} className="flex flex-col">
        <ArtistTitle artist={release.artist} title={release.title} />
      </motion.div>

      <motion.div className="" variants={item}>
        <Tracklisting trackListing={release.trackListing} />
      </motion.div>

      <motion.div
        className="flex gap-10 sm:items-center sm:flex-row flex-col"
        variants={item}
      >
        <Spotify spotify={release.trackListing[0].spotify} />
        <Beatport beatport={release.trackListing[0].beatport} />
        <MP3Wav mp3wav={release.trackListing[0].recoverworld} />
      </motion.div>

      <hr className="opacity-10" />
    </motion.div>
  );
}
