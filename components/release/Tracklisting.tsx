interface ITrackListingItem {
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

export default function Tracklisting({ trackListing }: any) {
  console.log(trackListing);
  return (
    <div className="text-[32pt]">
      {trackListing?.map((track: any) => {
        return (
          <div key={track.artist}>
            01: {track?.artist} - {track.title} ({track.mix})
          </div>
        );
      })}
    </div>
  );
}
