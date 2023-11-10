import { memo } from "react";
import styles from "./DownloadButton.module.css";
import Loader from "../../../ui/Loader/Loader";
interface DownloadButtonProps {
  isDownloadLoading: boolean;
  downloadVideo: () => Promise<void>;
}

const DownloadButton = memo(function DownloadButton({ isDownloadLoading, downloadVideo }: DownloadButtonProps) {
  return (
    <div className={styles["button-container"]}>
      <button onClick={downloadVideo} disabled={isDownloadLoading} aria-disabled={isDownloadLoading} className={styles.button}>
        {isDownloadLoading ? <Loader /> : "Download"}
      </button>
    </div>
  );
});

export default DownloadButton;
