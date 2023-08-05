export default interface TabImpl {
  children: React.ReactNode;
  active: boolean;
  onClick?(): void;
}
