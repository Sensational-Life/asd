import { getLoggedInUserData } from "../assets/storage";

export const ResourcesMenuItems = [
  {
    title: "Timetables",
    ...(getLoggedInUserData()? { path: "/resources/timetables" }:{ path:"/NotFound" }),
    cName: "dropdown-link",
  },

  {
    title: "Edutainment",
    path: "/edutainment",
    cName: "dropdown-link",
  },
  {
    title: "Advice",
    path: "/resources/advice",
    cName: "dropdown-link",
  },
  {
    title: "Useful Links",
    path: "/links",
    cName: "dropdown-link",
  },

	{
		title: "Referrals",
		path: "/resources/self-referral-pathway",
		cName: "dropdown-link",
	},

];
