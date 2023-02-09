import { ITrack } from "@/interfaces/ITrack";

interface ITrackListing {
  [key: string]: ITrack[];
}

export default function Tracklisting({ trackListing }: ITrackListing) {
  return (
    <div className="lg:text-3xl text-sm w-full">
      {trackListing?.map((track: ITrack, idx: number) => {
        return (
          <div key={idx}>
            {idx >= 9 ? idx + 1 : `0${idx + 1}`}: {track?.artist} -{" "}
            {track.title} ({track.mix})
          </div>
        );
      })}
    </div>
  );
}
