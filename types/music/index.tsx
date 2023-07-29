export interface MusicApiImpl {
  cover: string;
  src: string;
  slug: string;
  artist: string;
  name: string;
  details: Array<[string, string]>;
  color: string;
  subtitles:
    | Array<{ start: number; end: number; subtitle: string }>
    | undefined;
}
type MusicsApiImpl = Array<MusicApiImpl>;
export default MusicsApiImpl;
