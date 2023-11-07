import { ChangeEvent, memo, useEffect, useState } from "react";
import Input from "../../../ui/Input/Input";
import { Source } from "../../../types";
import styles from "./UrlControls.module.css";
import { getColorFromSource, getSourceFromUrl } from "../utils";
import SearchButton from "../SearchButton/SearchButton";
const UrlControls = memo(function UrlControls() {
  const [url, setUrl] = useState("");
  const [source, setSource] = useState<Source | null>("youtube");
  useEffect(() => {
    setSource(getSourceFromUrl(url));
  }, [url]);
  useEffect(() => {
    const color = getColorFromSource(source);
    document.documentElement.style.setProperty("--source-color", color);
  }, [source]);

  return (
    <div className={styles.container}>
      <Input
        placeholder="Paste video link here"
        className={source ? styles[source] : ""}
        value={url}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
      />
      <SearchButton />
    </div>
  );
});

export default UrlControls;
