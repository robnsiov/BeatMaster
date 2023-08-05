import { MusicApiImpl } from "@/types/music";

export default interface MusicItemImpl {
  music: MusicApiImpl;
  onClick?(): void;
}
