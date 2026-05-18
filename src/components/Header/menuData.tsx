import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    path: "/products",
    newTab: false,
  },
  {
    id: 2,
    title: "Partners",
    path: "/partners",
    newTab: false
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  // Docs and Contact removed from header menu per request
];
export default menuData;
