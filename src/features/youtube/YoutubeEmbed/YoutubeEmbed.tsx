import { memo } from "react";
import styles from "./YoutubeEmbed.module.css";

interface YoutubeEmbedProps {
  id: string;
}

const YoutubeEmbed = memo(function YoutubeEmbed({ id }: YoutubeEmbedProps) {
  return (
    <iframe className={styles.embed} src={`https://www.youtube.com/embed/${id}`} allow="clipboard-write; encrypted-media;" />
  );
});

export default YoutubeEmbed;
