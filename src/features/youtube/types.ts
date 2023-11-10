export interface Stream {
  id: string;
  size: number;
  bitrate: number;
  extension: string;
  resolution: string;
}

export interface VideoInfo {
  title: string;
  id: string;
  audio: Stream[];
  video: Stream[];
}

export type ResponseErrorType = "NOT_FOUND" | "INTERNAL";

export interface DownloadData {
  pickedAudio: string | null;
  pickedVideo: string | null;
  id: string;
  title: string;
}
