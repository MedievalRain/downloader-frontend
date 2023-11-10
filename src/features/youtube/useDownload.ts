import { useState } from "react";
import { DownloadData } from "./types";

export const useDownload = ({ pickedAudio, pickedVideo, id, title }: DownloadData) => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadVideo = async () => {
    setIsLoading(true);
    try {
      const params = { id, title, video: pickedVideo || "", audio: pickedAudio || "" };
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/youtube/download?${new URLSearchParams(params)}`);
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = title;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, downloadVideo };
};
