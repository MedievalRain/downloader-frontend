import { memo } from "react";
import styles from "./TiktokBadge.module.css";
const TiktokBadge = memo(function TiktokBadge() {
  return <span className={styles.badge}>TikTok</span>;
});

export default TiktokBadge;
