import { VideoFormat } from "../types";
import styles from "./DownloadButton.module.css";
interface DownloadButtonProps {
  pickedAudio: string | null;
  pickedVideo: string | null;
  pickedFormat: VideoFormat;
}

function DownloadButton({ pickedAudio, pickedVideo, pickedFormat }: DownloadButtonProps) {
  return <button className={styles.button}>Download</button>;
}

export default DownloadButton;
