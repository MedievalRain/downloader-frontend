import { memo, useState } from "react";
import { VideoFormat } from "../types";
import styles from "./DownloadButton.module.css";
interface DownloadButtonProps {
  pickedAudio: string | null;
  pickedVideo: string | null;
  pickedFormat: VideoFormat;
}

const DownloadButton = memo(function DownloadButton({ pickedAudio, pickedVideo, pickedFormat }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button disabled={isLoading} aria-disabled={isLoading} className={styles.button}>
      Download
    </button>
  );
});

export default DownloadButton;
