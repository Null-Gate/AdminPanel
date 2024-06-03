import { BiSolidNotepad } from "react-icons/bi";
import { HiMiniHome } from "react-icons/hi2";

export const mainMenu = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: <HiMiniHome />,
    child: [
      {
        id: 1,
        name: "Info",
        path: "/dashboard/info",
      },
      {
        id: 2,
        name: "Accounts",
        path: "/dashboard/account",
      },
    ],
  },

  {
    id: 2,
    name: "List",
    path: "/list",
    icon: <BiSolidNotepad />,
    child: [
      {
        id: 1,
        name: "Pending",
        path: "/list/pending",
      },
      {
        id: 2,
        name: "Draft",
        path: "/list/draft",
      },
    ],
  },
  {
    id: 4,
    name: "Ads",
    path: "ads",
    icon: <HiMiniHome />,
  },
  {
    id: 5,
    name: "Program",
    path: "program",
    icon: <HiMiniHome />,
  },
];
