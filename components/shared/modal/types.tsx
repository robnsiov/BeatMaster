export default interface ModalImpl {
  open: boolean;
  setOpen(open: boolean): void;
  children: React.ReactNode;
}

export interface UseModelImpl {
  setOpen(open: boolean): void;
  open: boolean;
}
