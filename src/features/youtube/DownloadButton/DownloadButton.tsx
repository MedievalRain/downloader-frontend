import { memo, useState } from "react";
import { DownloadRequestParams } from "../types";
import styles from "./DownloadButton.module.css";
import Loader from "../../../ui/Loader/Loader";
interface DownloadButtonProps {
  pickedAudio: string | null;
  pickedVideo: string | null;
  id: string;
}

const DownloadButton = memo(function DownloadButton({ pickedAudio, pickedVideo, id }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const downloadVideo = async () => {
    setIsLoading(true);

    const params: DownloadRequestParams = { id };
    if (pickedAudio) params.audio = pickedAudio;
    if (pickedVideo) params.video = pickedVideo;

    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/youtube/url?${new URLSearchParams(params)}`);
    if (response.ok) {
      const data = (await response.json()) as { filename: string };
      window.location.href = `${import.meta.env.VITE_BASE_API_URL}/youtube/download/${data.filename}?videoname=testo`;
    } else {
      console.error(response.url);
    }
    setIsLoading(false);
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
