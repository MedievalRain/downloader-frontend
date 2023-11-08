import { ChangeEvent, Dispatch, SetStateAction, memo, useEffect, useState } from "react";
import Input from "../../../ui/Input/Input";
import styles from "./SearchControls.module.css";
import { getColorFromSource, getSourceFromUrl } from "../utils";
import SearchButton from "../SearchButton/SearchButton";
import { Source } from "../../../types";

interface UrlControlsProps {
  setUrl: Dispatch<SetStateAction<string>>;
  url: string;
}

const UrlControls = memo(function UrlControls({ url, setUrl }: UrlControlsProps) {
  const [inputSource, setInputSource] = useState<Source | null>(null);

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
