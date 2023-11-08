import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VideoInfo } from "../types";
import styles from "./YoutubeLayout.module.css";
import YoutubeStreams from "../YoutubeStreams/YoutubeStreams";
import DownloadButton from "../DownloadButton/DownloadButton";
interface YoutubeLayoutProps {
  url: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

function YoutubeLayout({ url, isLoading, setIsLoading }: YoutubeLayoutProps) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>();
  const [pickedAudio, setPickedAudio] = useState<string | null>(null);
  const [pickedVideo, setPickedVideo] = useState<string | null>(null);
  console.log(videoInfo);
  useEffect(() => {
    if (isLoading) {
      const fetchVideoInfo = async () => {
        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/youtube/info?url=${url}`);
        if (response.ok) {
          const data = (await response.json()) as VideoInfo;
          setVideoInfo(data);
          setPickedAudio(data.audio[0].id);
          setPickedVideo(data.video[0].id);
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
        <>
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${videoInfo.id}`}
            allow="autoplay; clipboard-write; encrypted-media; "
            allowFullScreen
          />

          <div className={styles.params}>
            {videoInfo.video && <YoutubeStreams channel="video" setStream={setPickedVideo} streams={videoInfo.video} />}
            {videoInfo.audio && <YoutubeStreams channel="audio" setStream={setPickedAudio} streams={videoInfo.audio} />}
            <DownloadButton pickedAudio={pickedAudio} pickedVideo={pickedVideo} id={videoInfo.id} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default YoutubeLayout;
