import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VideoInfo } from "../types";
import styles from "./YoutubeLayout.module.css";
interface YoutubeLayoutProps {
  url: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

function YoutubeLayout({ url, isLoading, setIsLoading }: YoutubeLayoutProps) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>();

  useEffect(() => {
    if (isLoading) {
      const fetchVideoInfo = async () => {
        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/youtube/info?url=${url}`);
        if (response.ok) {
          const data = (await response.json()) as VideoInfo;
          setVideoInfo(data);
        } else {
          console.error(response.url);
        }
        setIsLoading(false);
      };
      fetchVideoInfo();
    }
  }, [url, isLoading]);

  return (
    <div className={styles.container}>
      {videoInfo ? (
        <div className="video-responsive">
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${videoInfo.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}
    </div>
  );
}

export default YoutubeLayout;
