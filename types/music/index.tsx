export interface MusicApiImpl {
  cover: string;
  src: string;
  slug: string;
  artists: Array<string>;
  name: string;
  details: { [key: string]: string };
  color: string;
  subtitles:
    | Array<{ start: number; end: number; subtitle: string }>
    | undefined;
}
type MusicsApiImpl = Array<MusicApiImpl>;
export default MusicsApiImpl;
