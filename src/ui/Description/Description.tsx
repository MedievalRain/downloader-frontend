import { memo } from "react";
import styles from "./Description.module.css";
import YoutubeBadge from "../badges/YoutubeBadge/YoutubeBadge";
import XBadge from "../badges/XBadge/XBadge";
import RedditBadge from "../badges/RedditBadge/RedditBadge";
import TiktokBadge from "../badges/TiktokBadge/TiktokBadge";

const Description = memo(function Description() {
  return (
    <p className={styles.description}>
      Download any video from <YoutubeBadge />, <XBadge />, <RedditBadge /> and <TiktokBadge />
    </p>
  );
});

export default Description;
