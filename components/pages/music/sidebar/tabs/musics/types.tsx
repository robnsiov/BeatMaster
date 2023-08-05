export default interface MusicsImpl extends UseMusicsImpl {
  toggleOpen(): void;
}

export interface UseMusicsImpl {
  isPlaylist?: boolean;
}
