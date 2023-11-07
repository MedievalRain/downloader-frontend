interface Stream {
  id: string;
  size: number;
  bitrate: number;
  extension: string;
}
interface VideoStream extends Stream {
  resolution: string;
}

export interface VideoInfo {
  id: string;
  audio: Stream[];
  video: VideoStream[];
}
