import { memo } from "react";
import styles from "./RedditBadge.module.css";
const RedditBadge = memo(function RedditBadge() {
  return <span className={styles.badge}>Reddit</span>;
});

export default RedditBadge;
