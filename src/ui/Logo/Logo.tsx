import { memo } from "react";
import styles from "./Logo.module.css";
const Logo = memo(function Logo() {
  return <h1 className={styles.logo}>Sækja</h1>;
});

export default Logo;
