import styles from "./App.module.css";
import Logo from "./ui/Logo/Logo";
import Description from "./ui/Description/Description";
import { useState } from "react";
import { Source } from "./types";
import { AppContext } from "./AppContext";
import YoutubeLayout from "./features/youtube/YoutubeLayout/YoutubeLayout";
import SearchControls from "./features/search/SearchControls/SearchControls";

function App() {
  const [activeSource, setActiveSource] = useState<Source | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const searchVideo = (source: Source) => {
    setIsLoading(true);
    setActiveSource(source);
  };
  return (
    <AppContext.Provider value={{ isLoading, searchVideo }}>
      <div className={styles.container}>
        <Logo />
        <Description />
        <SearchControls url={url} setUrl={setUrl} />
        {activeSource === "youtube" ? <YoutubeLayout isLoading={true} setIsLoading={setIsLoading} url={url} /> : null}
      </div>
    </AppContext.Provider>
  );
}

export default App;
