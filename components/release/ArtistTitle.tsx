interface IArtist {
  artist: string;
  title: string;
}

export default function ArtistTitle({ artist, title }: IArtist) {
  return (
    <div className="leading-none">
      <div className="font-bold text-[128pt] uppercase">{title}</div>
      <div className="text-[64pt]">{artist}</div>
    </div>
  );
}
