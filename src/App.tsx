import styles from "./App.module.css";
import Logo from "./ui/Logo/Logo";
import Description from "./ui/Description/Description";
import UrlControls from "./features/url/UrlControls/UrlControls";
import { useState } from "react";
import { Source } from "./types";
import { AppContext } from "./AppContext";

function App() {
  const [activeSource, setActiveSource] = useState<Source | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchVideo = (source: Source) => {
    setIsLoading(true);
    setActiveSource(source);
  };
  return (
    <AppContext.Provider value={{ isLoading, searchVideo }}>
      <div className={styles.container}>
        <Logo />
        <Description />
        <UrlControls />
      </div>
    </AppContext.Provider>
  );
}

export default App;
