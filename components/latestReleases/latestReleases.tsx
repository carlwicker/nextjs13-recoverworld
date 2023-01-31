"use client";

import { useEffect, useState } from "react";
import { db } from "components/utils/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Release from "../release/Release";

interface IRelease {
  ampsuiteId: number;
  artist: string;
  artwork: string;
  catNum: string;
  id: string;
  label: string;
  releaseDate: number;
  title: string;
  trackListing: ITrack[];
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

export default function LatestReleases() {
  const [latestReleases, setLatestReleases] = useState<IRelease[] | null>(null);

  useEffect(() => {
    async function getData() {
      let data: any[] = [];
      const querySnapshot = await getDocs(collection(db, "featured"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setLatestReleases(data);
    }
    getData();
  }, []);

  return (
    <div className="pb-[250px]">
      {latestReleases?.map((release: IRelease) => {
        console.log(release);
        return (
          <div key={release.ampsuiteId}>
            <Release release={release} />
          </div>
        );
      })}
    </div>
  );
}
