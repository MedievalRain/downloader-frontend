import { memo } from "react";
import styles from "./YoutubeBadge.module.css";
const YoutubeBadge = memo(function YoutubeBadge() {
  return <span className={styles.badge}>YouTube</span>;
});

export default YoutubeBadge;
