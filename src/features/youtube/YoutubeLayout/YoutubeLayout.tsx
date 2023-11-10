import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VideoInfo } from "../types";
import styles from "./YoutubeLayout.module.css";
import YoutubeStreams from "../YoutubeStreams/YoutubeStreams";
import DownloadButton from "../DownloadButton/DownloadButton";
import FileSize from "../FileSize/FileSize";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDownload } from "../useDownload";
interface YoutubeLayoutProps {
  url: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

function YoutubeLayout({ url, isLoading, setIsLoading }: YoutubeLayoutProps) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const { isDownloadLoading, downloadVideo, videoSize, setPickedAudio, audioSize, setPickedVideo } = useDownload(videoInfo);

  useEffect(() => {
    if (isLoading) {
      const fetchVideoInfo = async () => {
        setVideoInfo(null);
        setErrorCode(null);
        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/youtube/info?url=${url}`);
        if (response.ok) {
          const data = (await response.json()) as VideoInfo;
          setVideoInfo(data);
          setPickedAudio(data.audio[0].id);
          setPickedVideo(data.video[0].id);
        } else {
          setErrorCode(response.status);
        }
        setIsLoading(false);
      };
      fetchVideoInfo();
    }
  }, [url, isLoading]);

  if (errorCode) {
    return <ErrorMessage errorCode={errorCode} />;
  }

  return (
    <div className={styles.container}>
      {videoInfo ? (
        <>
          <YoutubeEmbed id={videoInfo.id} />
          <div className={styles["info-container"]}>
            <div className={styles["dropdown-container"]}>
              {videoInfo.video && <YoutubeStreams channel="video" setStream={setPickedVideo} streams={videoInfo.video} />}
              {videoInfo.audio && <YoutubeStreams channel="audio" setStream={setPickedAudio} streams={videoInfo.audio} />}
            </div>
            <div className={styles.params}>
              <FileSize audiosize={audioSize} videosize={videoSize} />
              <DownloadButton isDownloadLoading={isDownloadLoading} downloadVideo={downloadVideo} />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default YoutubeLayout;
