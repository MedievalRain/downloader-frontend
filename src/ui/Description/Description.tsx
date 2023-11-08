import { memo } from "react";
import styles from "./Description.module.css";
import YoutubeBadge from "../badges/YoutubeBadge/YoutubeBadge";

const Description = memo(function Description() {
  return (
    <p className={styles.description}>
      Download any video from <YoutubeBadge />
    </p>
  );
});

export default Description;
