import { ITrack } from "./ITrack";

export interface IRelease {
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
