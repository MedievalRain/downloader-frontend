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
