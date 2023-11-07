import Dropdown from "../../../ui/Dropdown/Dropdown";
import { Stream } from "../types";
import styles from "./YoutubeStreams.module.css";
interface YoutubeStreamsProps {
  streams: Stream[];
  channel: "video" | "audio";
  setStream: (v: string | null) => void;
}

function YoutubeStreams({ streams, channel, setStream }: YoutubeStreamsProps) {
  return (
    <div className={styles["params-container"]}>
      <span className={styles.capitalized}>{channel}</span>
      <Dropdown>
        <Dropdown.Trigger defaultText={streams[0].resolution} />
        <Dropdown.Items>
          <Dropdown.Item
            onClick={() => {
              setStream(null);
            }}
            key={null}
            text={`No ${channel}`}
          />
          {streams.map((stream) => (
            <Dropdown.Item
              onClick={() => {
                setStream(stream.id);
              }}
              key={stream.id}
              text={`${stream.resolution} ${channel === "audio" && "kbps"}`}
            />
          ))}
        </Dropdown.Items>
      </Dropdown>
    </div>
  );
}

export default YoutubeStreams;
