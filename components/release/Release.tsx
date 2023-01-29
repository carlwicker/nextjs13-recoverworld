"use client";

import { useEffect } from "react";
import ArtistTitle from "./ArtistTitle";
import Beatport from "./Beatport";
import CatLabel from "./CatLabel";
import MP3Wav from "./MP3Wav";
import Spotify from "./Spotify";
import Tracklisting from "./Tracklisting";

import { db } from "components/utils/Firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Release() {
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "featured"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }
    getData();
  }, []);

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
