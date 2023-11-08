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
