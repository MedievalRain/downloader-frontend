import { useState } from "react";
import { getSizeFromStream } from "./utils";
import { VideoInfo } from "./types";

export const useDownload = (videoInfo: VideoInfo | null) => {
  const [isDownloadLoading, setIsDownloadLoading] = useState(false);
  const [pickedAudio, setPickedAudio] = useState<string | null>(null);
  const [pickedVideo, setPickedVideo] = useState<string | null>(null);
  const audioSize = getSizeFromStream(videoInfo?.audio, pickedAudio);
  const videoSize = getSizeFromStream(videoInfo?.video, pickedVideo);
  const downloadVideo = async () => {
    if (videoInfo) {
      setIsDownloadLoading(true);
      try {
        const params = { id: videoInfo.id, title: videoInfo.title, video: pickedVideo || "", audio: pickedAudio || "" };
        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/youtube/download?${new URLSearchParams(params)}`);
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = videoInfo.title;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error("Error downloading file:", error);
      } finally {
        setIsDownloadLoading(false);
      }
    }
  };

  return { isDownloadLoading, downloadVideo, setPickedAudio, setPickedVideo, audioSize, videoSize };
};
