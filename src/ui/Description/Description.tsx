import { memo } from "react";
import styles from "./Description.module.css";
import YoutubeBadge from "../badges/YoutubeBadge/YoutubeBadge";
import XBadge from "../badges/XBadge/XBadge";

const Description = memo(function Description() {
  return (
    <p className={styles.description}>
      Download any video from <YoutubeBadge />, <XBadge />
    </p>
  );
});

export default Description;
