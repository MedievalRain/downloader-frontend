import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VideoInfo } from "../types";

interface YoutubeLayoutProps {
  url: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

function YoutubeLayout({ url, setIsLoading }: YoutubeLayoutProps) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>();

  useEffect(() => {
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
  }, [url]);

  return <div>{videoInfo?.id}</div>;
}

export default YoutubeLayout;
