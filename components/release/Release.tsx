import ArtistTitle from "./ArtistTitle";
import Beatport from "./Beatport";
import CatLabel from "./CatLabel";
import MP3Wav from "./MP3Wav";
import Spotify from "./Spotify";
import Tracklisting from "./TrackListing";

import { IRelease } from "@/interfaces/IRelease";

interface IReleaseData {
  [key: string]: IRelease;
}

export default function Release({ release }: IReleaseData) {
  return (
    <div className="container">
      <div className="px-5 py-40 w-full flex flex-col gap-[3rem]">
        <CatLabel label={release.label} catNum={release.catNum} />
        <div className="flex flex-col gap-[6rem]">
          <ArtistTitle artist={release.artist} title={release.title} />

          <div className="flex gap-10 items-center">
            <Spotify spotify={release.trackListing[0].spotify} />
            <Beatport beatport={release.trackListing[0].beatport} />
            <MP3Wav mp3wav={release.trackListing[0].recoverworld} />
          </div>

          <Tracklisting trackListing={release.trackListing} />
        </div>
      </div>
      <hr className="opacity-10" />
    </div>
  );
}
