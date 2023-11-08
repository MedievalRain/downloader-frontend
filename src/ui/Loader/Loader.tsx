import { memo } from "react";
import styles from "./Loader.module.css";
const Loader = memo(function Loader() {
  return <div className={styles.loader}></div>;
});

export default Loader;
