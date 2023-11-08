import { memo, useState } from "react";
import { DownloadRequestParams, VideoFormat } from "../types";
import styles from "./DownloadButton.module.css";
interface DownloadButtonProps {
  pickedAudio: string | null;
  pickedVideo: string | null;
  pickedFormat: VideoFormat;
  id: string;
}

const DownloadButton = memo(function DownloadButton({ pickedAudio, pickedVideo, pickedFormat, id }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<null | string>(null);

  const downloadVideo = async () => {
    setIsLoading(true);
    setDownloadUrl(null);
    const params: DownloadRequestParams = { id, extension: pickedFormat.toLowerCase() };
    if (pickedAudio) params.audio = pickedAudio;
    if (pickedVideo) params.video = pickedVideo;

    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/youtube/url?${new URLSearchParams(params)}`);
    if (response.ok) {
      const data = (await response.json()) as { filename: string };
      setDownloadUrl(`${import.meta.env.VITE_BASE_API_URL}/youtube/download/${data.filename}?videoname=testo`);
    } else {
      console.error(response.url);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <button onClick={downloadVideo} disabled={isLoading} aria-disabled={isLoading} className={styles.button}>
        {isLoading ? <div className={styles.loader}></div> : "Prepare video"}
      </button>
      {downloadUrl && (
        <button onClick={() => setDownloadUrl("")}>
          <a href={downloadUrl}>Download</a>
        </button>
      )}
    </div>
  );
});

export default DownloadButton;
