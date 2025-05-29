import { LogOutIcon, UserIcon } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
export const ICONS_NAV = [
  {
    icons: <UserIcon className="size-5.5" />,
    href: "/auth/login",
  },
  {
    icons: <LogOutIcon className="size-5.5" />,
    href: "/auth/logout",
    logout: true,
  },
];
