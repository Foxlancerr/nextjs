export default interface IButton {
  type?: "reset" | "submit" | "button";
  className?: string;
  value: string;
  onClick?: () => void;
}
