import { ChangeEvent, memo, useEffect, useState } from "react";
import Input from "../../../ui/Input/Input";
import { Source } from "../../../types";
import styles from "./UrlControls.module.css";
import { getSourceFromUrl } from "../utils";
const UrlControls = memo(function UrlControls() {
  const [url, setUrl] = useState("");
  const [source, setSource] = useState<Source | null>("youtube");
  useEffect(() => {
    setSource(getSourceFromUrl(url));
  }, [url]);
  console.log(source);
  return (
    <Input
      placeholder="Paste video link here"
      className={source ? styles[source] : ""}
      value={url}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
    />
  );
});

export default UrlControls;
