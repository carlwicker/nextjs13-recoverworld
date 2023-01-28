import ArtistTitle from "./ArtistTitle";
import Beatport from "./Beatport";
import CatLabel from "./CatLabel";
import MP3Wav from "./MP3Wav";
import Spotify from "./Spotify";
import Tracklisting from "./Tracklisting";

export default function Release() {
  return (
    <div className="container">
      <div className="px-5 pt-40 min-h-screen w-full flex">
        <div className="flex flex-col gap-[6rem]">
          <CatLabel />
          <ArtistTitle />

          <div className="flex gap-10 items-center">
            <Spotify />
            <Beatport />
            <MP3Wav />
          </div>

          <Tracklisting />
        </div>
      </div>
    </div>
  );
}
