import ArtistTitle from "./ArtistTitle";
import Beatport from "./Beatport";
import CatLabel from "./CatLabel";
import MP3Wav from "./MP3Wav";
import Spotify from "./Spotify";
import Tracklisting from "./TrackListing";
import { IRelease } from "@/interfaces/IRelease";
import { motion } from "framer-motion";

interface IReleaseData {
  [key: string]: IRelease;
}

export default function Release({ release }: IReleaseData) {
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
    <>
      <motion.div
        className="py-40 w-full flex flex-col gap-20"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.div variants={item}>
          <CatLabel label={release.label} catNum={release.catNum} />
        </motion.div>

        <motion.div variants={item} className="flex flex-col gap-[6rem]">
          <ArtistTitle artist={release.artist} title={release.title} />
        </motion.div>

        <motion.div className="flex gap-10 items-center" variants={item}>
          <Spotify spotify={release.trackListing[0].spotify} />
          <Beatport beatport={release.trackListing[0].beatport} />
          <MP3Wav mp3wav={release.trackListing[0].recoverworld} />
        </motion.div>

        <motion.div className="pt-10" variants={item}>
          <Tracklisting trackListing={release.trackListing} />
        </motion.div>
        <hr className="opacity-10" />
      </motion.div>
    </>
  );
}
