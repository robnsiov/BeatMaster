export interface MusicApiImpl {
  cover: string;
  src: string;
  slug: string;
  artist: Array<string>;
  name: string;
  details: Array<{ [key: string]: string }>;
  color: string;
  subtitles:
    | Array<{ start: number; end: number; subtitle: string }>
    | undefined;
}
type MusicsApiImpl = Array<MusicApiImpl>;
export default MusicsApiImpl;
