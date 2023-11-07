import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VideoInfo } from "../types";
import styles from "./YoutubeLayout.module.css";
import Dropdown from "../../../ui/Dropdown/Dropdown";
interface YoutubeLayoutProps {
  url: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

function YoutubeLayout({ url, isLoading, setIsLoading }: YoutubeLayoutProps) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>();
  const [pickedAudio, setPickedAudio] = useState("");
  const [pickedVideo, setPickedVideo] = useState("");
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
            {videoInfo.video ? (
              <div>
                <Dropdown>
                  <Dropdown.Trigger defaultText={videoInfo.video[0].resolution} />
                  <Dropdown.Items>
                    {videoInfo.video.map((stream) => (
                      <Dropdown.Item onClick={() => {}} key={stream.resolution} text={stream.resolution} />
                    ))}
                  </Dropdown.Items>
                </Dropdown>
              </div>
            ) : null}

            <span>
              Audio channel: <span>128kbs</span>
            </span>
            <span>
              File format: <span>.mp4</span>
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default YoutubeLayout;
