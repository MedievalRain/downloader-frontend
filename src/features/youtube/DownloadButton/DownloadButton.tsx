import { memo } from "react";
import styles from "./DownloadButton.module.css";
import Loader from "../../../ui/Loader/Loader";
import { DownloadData } from "../types";
import { useDownload } from "../useDownload";

const DownloadButton = memo(function DownloadButton({ pickedAudio, pickedVideo, id, title }: DownloadData) {
  const { isLoading, downloadVideo } = useDownload({ pickedAudio, pickedVideo, id, title });
  return (
    <div className={styles["button-container"]}>
      <button onClick={downloadVideo} disabled={isLoading} aria-disabled={isLoading} className={styles.button}>
        {isLoading ? <Loader /> : "Download"}
      </button>
    </div>
  );
});

export default DownloadButton;
