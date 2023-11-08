import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VideoFormat, VideoInfo } from "../types";
import styles from "./YoutubeLayout.module.css";
import YoutubeStreams from "../YoutubeStreams/YoutubeStreams";
import YoutubeFormat from "../YoutubeFormat/YoutubeFormat";
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
  const [pickedFormat, setPickedFormat] = useState<VideoFormat>("MP4");
  console.log(videoInfo);
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
        <>
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${videoInfo.id}`}
            allow="autoplay; clipboard-write; encrypted-media; "
            allowFullScreen
          />
          <script src="https://embed.reddit.com/widgets.js"></script>

          <div className={styles.params}>
            {videoInfo.video && <YoutubeStreams channel="video" setStream={setPickedVideo} streams={videoInfo.video} />}
            {videoInfo.audio && <YoutubeStreams channel="audio" setStream={setPickedAudio} streams={videoInfo.audio} />}
            <YoutubeFormat setPickedFormat={setPickedFormat} />
            <DownloadButton pickedAudio={pickedAudio} pickedVideo={pickedVideo} pickedFormat={pickedFormat} id={videoInfo.id} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default YoutubeLayout;
