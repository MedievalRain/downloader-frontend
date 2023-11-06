import { memo } from "react";
import styles from "./XBadge.module.css";
const XBadge = memo(function XBadge() {
  return <span className={styles.badge}>𝕏</span>;
});

export default XBadge;
