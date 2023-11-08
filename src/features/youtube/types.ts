export interface Stream {
  id: string;
  size: number;
  bitrate: number;
  extension: string;
  resolution: string;
}

export interface VideoInfo {
  id: string;
  audio: Stream[];
  video: Stream[];
}

export type VideoFormat = "MP4" | "WEBM";

export interface DownloadRequestParams {
  id: string;
  extension: string;
  audio?: string;
  video?: string;
}
