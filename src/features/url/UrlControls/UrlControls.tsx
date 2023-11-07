import { ChangeEvent, memo, useEffect, useState } from "react";
import Input from "../../../ui/Input/Input";
import styles from "./UrlControls.module.css";
import { getColorFromSource, getSourceFromUrl } from "../utils";
import SearchButton from "../SearchButton/SearchButton";
import { Source } from "../../../types";

const UrlControls = memo(function UrlControls() {
  const [inputSource, setInputSource] = useState<Source | null>(null);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const color = getColorFromSource(inputSource);
    document.documentElement.style.setProperty("--source-color", color);
  }, [inputSource]);
  useEffect(() => {
    setInputSource(getSourceFromUrl(url));
  }, [url]);
  return (
    <div className={styles.container}>
      <Input
        placeholder="Paste video link here"
        value={url}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
      />
      <SearchButton source={inputSource} />
    </div>
  );
});

export default UrlControls;
