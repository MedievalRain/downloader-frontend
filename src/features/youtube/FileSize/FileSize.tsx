import { memo } from "react";
import { formatFileSize } from "../utils";
import styles from "./FileSize.module.css";

interface FileSizeProps {
  videosize: number | null;
  audiosize: number | null;
}

const FileSize = memo(function FileSize({ videosize, audiosize }: FileSizeProps) {
  const size = formatFileSize(videosize, audiosize);
  return <div className={styles.container}>Estimated file size {size}</div>;
});

export default FileSize;
