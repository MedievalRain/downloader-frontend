import { Source } from "../../types";

export const getSourceFromUrl = (url: string): Source | null => {
  const domain = url.replace(/(https?:\/\/)?(www\.)?([^\/?#]+).*$/, "$3");
  switch (domain) {
    case "youtube.com":
      return "youtube";
    case "twitter.com":
    case "x.com":
      return "x";
    case "reddit.com":
      return "reddit";
    case "tiktok.com":
      return "tiktok";
    default:
      return null;
  }
};
