export interface ChildrenT {
  id: number;
  title: string;
  to: string;
}
export type NavLinksT = {
  id: number;
  title: string;
  to: string;
  children?: ChildrenT[];
};

export type ButtonsNavBarT = {
  id: number;
  title: string;
  type: "link" | "button";
  link?: string;
  onClick?: () => void;
};
