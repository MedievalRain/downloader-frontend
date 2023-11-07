import styles from "./App.module.css";
import Logo from "./ui/Logo/Logo";
import Description from "./ui/Description/Description";
import UrlControls from "./features/url/UrlControls/UrlControls";
function App() {
  return (
    <div className={styles.container}>
      <Logo />
      <Description />
      <UrlControls />
    </div>
  );
}

export default App;
