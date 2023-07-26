export interface MusicApiImpl {
  cover: string;
  src: string;
  slug: string;
  artist: string;
  name: string;
  details: Array<[string, string]>;
}
type MusicsApiImpl = Array<MusicApiImpl>;
export default MusicsApiImpl;
