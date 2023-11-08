import { memo } from "react";
import { formatError } from "../utils";
import styles from "./ErrorMessage.module.css";
interface ErrorMessageProps {
  errorCode: number;
}

const ErrorMessage = memo(function ErrorMessage({ errorCode }: ErrorMessageProps) {
  const message = formatError(errorCode);
  return <p className={styles.error}>{message}</p>;
});

export default ErrorMessage;
