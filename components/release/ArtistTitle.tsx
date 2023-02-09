interface IArtist {
  artist: string;
  title: string;
}

export default function ArtistTitle({ artist, title }: IArtist) {
  return (
    <div className="">
      <div className="font-bold lg:text-9xl sm:text-7xl text-5xl uppercase">
        {title}
      </div>
      <div className="lg:text-6xl sm:text-4xl text-2xl">{artist}</div>
    </div>
  );
}
