import { Dispatch, SetStateAction } from "react";
import { VideoFormat } from "../types";
import Dropdown from "../../../ui/Dropdown/Dropdown";
import styles from "./YoutubeFormat.module.css";
interface YoutubeFormatProps {
  setPickedFormat: Dispatch<SetStateAction<VideoFormat>>;
}

function YoutubeFormat({ setPickedFormat }: YoutubeFormatProps) {
  return (
    <div className={styles["params-container"]}>
      <span>Format</span>
      <Dropdown>
        <Dropdown.Trigger defaultText={"MP4"} />
        <Dropdown.Items>
          <Dropdown.Item
            onClick={() => {
              setPickedFormat("MP4");
            }}
            text="MP4"
          />
          <Dropdown.Item
            onClick={() => {
              setPickedFormat("WEBM");
            }}
            text="WEBM"
          />
        </Dropdown.Items>
      </Dropdown>
    </div>
  );
}

export default YoutubeFormat;
