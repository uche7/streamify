import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import HomeIcon from "@/assets/images/dashboard/chart-icon.svg";
import MusicIcon from "@/assets/images/dashboard/music.svg";
import MessageIcon from "@/assets/images/dashboard/chat-icon.svg";
import BellIcon from "@/assets/images/dashboard/bell-icon.svg";
import ProfileIcon from "@/assets/images/dashboard/profile-icon.svg";


export const dashboardSidebar = (Router: AppRouterInstance) => [
  {
    Icon: HomeIcon,
    text: "Overview",
    route: () => Router.push("/"),
  },
  {
    Icon: MusicIcon,
    text: "Songs",
    route: () => Router.push("/songs"),
  },
];

export const navigationIcons = (Router: AppRouterInstance) => [
  {
    Icon: MessageIcon,
    alt: "Message Icon",
    route: () => Router.push(""),
  },
  {
    Icon: BellIcon,
    alt: "Notification Icon",
    route: () => Router.push(""),
  },
  {
    Icon: ProfileIcon,
    alt: "Profile_Pic Icon",
    route: () => Router.push(""),
  },
];
