import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "API Gateway",
        path: "/#products",
        newTab: false,
      },
      {
        id: 12,
        title: "Webhooks & Events",
        path: "/#products",
        newTab: false,
      },
      {
        id: 13,
        title: "Developer Dashboard",
        path: "/#products",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Docs",
    path: "/docs",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
