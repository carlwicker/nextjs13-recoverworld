"use client";

import { useEffect, useState } from "react";
import { db } from "components/utils/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Release from "../release/Release";

export default function LatestReleases() {
  const [latestReleases, setLatestReleases] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      let data: any = [];
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
      {latestReleases?.map((release: any) => {
        return <Release key={release.ampsuiteId} release={release} />;
      })}
    </div>
  );
}
