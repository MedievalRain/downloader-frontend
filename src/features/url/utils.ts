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

export const getColorFromSource = (source: Source | null): string => {
  switch (source) {
    case "youtube":
      return "#dc2626";
    case "x":
    case "tiktok":
      return "#000000";
    case "reddit":
      return "#ff4500";
    default:
      return "#1a202c";
  }
};
