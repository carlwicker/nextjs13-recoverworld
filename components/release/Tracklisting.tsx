interface ITrackListing {
  [key: string]: ITrack[];
}

interface ITrack {
  artist: string;
  beatport: string;
  itunes: string;
  mix: string;
  recoverworld: string;
  soundcloud: string;
  spotify: string;
  title: string;
  youtube: string;
}

export default function Tracklisting({ trackListing }: ITrackListing) {
  return (
    <div className="text-[32pt]">
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
