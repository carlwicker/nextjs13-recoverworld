"use client";

import { useEffect, useState } from "react";
import { db } from "@/components/utils/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Release from "../release/Release";

import { IRelease } from "@/interfaces/IRelease";

export default function LatestReleases() {
  const [latestReleases, setLatestReleases] = useState<IRelease[] | null>(null);

  useEffect(() => {
    (async function getFeaturedReleases() {
      let releases: any[] = [];
      const querySnapshot = await getDocs(collection(db, "featured"));
      querySnapshot.forEach((doc) => {
        releases.push(doc.data());
      });
      setLatestReleases(releases);
    })();
  }, []);

  return (
    <div className="px-2">
      {latestReleases?.map((release: IRelease) => {
        return (
          <div key={release.ampsuiteId}>
            <Release release={release} />
          </div>
        );
      })}
    </div>
  );
}
