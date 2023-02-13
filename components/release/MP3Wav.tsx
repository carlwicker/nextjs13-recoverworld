interface IMp3Wav {
  mp3wav: string;
}

export default function MP3Wav({ mp3wav }: IMp3Wav) {
  return (
    <a
      href={mp3wav}
      target="_blank"
      rel="noreferrer"
      className="uppercase font-black text-xl hover:text-red-600 transition duration-500 ease-out cursor-pointer"
    >
      MP3/Wav
    </a>
  );
}
