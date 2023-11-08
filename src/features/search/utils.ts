import { Source } from "../../types";

export const getSourceFromUrl = (url: string): Source | null => {
  const domain = url.toLowerCase().replace(/(https?:\/\/)?(www\.)?([^/?#]+).*$/, "$3");
  switch (domain) {
    case "youtube.com":
      return "youtube";
    default:
      return null;
  }
};

export const getColorFromSource = (source: Source | null): string => {
  switch (source) {
    case "youtube":
      return "#dc2626";
    default:
      return "#1a202c";
  }
};
// case "x":
//   case "tiktok":
//     return "#000000";
//   case "reddit":
//     return "#ff4500";
