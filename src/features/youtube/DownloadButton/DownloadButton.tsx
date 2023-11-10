import { memo, useState } from "react";
import styles from "./DownloadButton.module.css";
import Loader from "../../../ui/Loader/Loader";
interface DownloadButtonProps {
  pickedAudio: string | null;
  pickedVideo: string | null;
  id: string;
  title: string;
}

const DownloadButton = memo(function DownloadButton({ pickedAudio, pickedVideo, id, title }: DownloadButtonProps) {
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
  return (
    <div className={styles["button-container"]}>
      <button onClick={downloadVideo} disabled={isLoading} aria-disabled={isLoading} className={styles.button}>
        {isLoading ? <Loader /> : "Download"}
      </button>
    </div>
  );
});

export default DownloadButton;
