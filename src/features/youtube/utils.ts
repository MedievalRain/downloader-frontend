import { Stream } from "./types";

export const getResolutionString = (width: number, height: number) => {
  return `${width}x${height}`;
};

export const getSizeFromStream = (streams: Stream[] | undefined, id: string | null): number | null => {
  let size = null;

  if (streams && id) {
    for (const stream of streams) {
      if (stream.id === id) {
        size = stream.size;
        break;
      }
    }
  }

  return size;
};

export const formatFileSize = (videosize: number | null, audiosize: number | null): string => {
  const size = (videosize || 0) + (audiosize || 0);
  if (size > 1e9) return `${(size / 1e9).toFixed(2)}GB`;
  if (size > 1e6) return `${(size / 1e6).toFixed(2)}MB`;
  return `${(size / 1e3).toFixed(2)}KB`;
};

export const formatError = (errorCode: number): string => {
  switch (errorCode) {
    case 404:
      return "Video not found";
    case 400:
      return "Bad input";
    case 500:
      return "Internal server error";
    default:
      return "Uknown error";
  }
};
