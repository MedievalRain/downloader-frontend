import { memo } from "react";
interface ErrorMessageProps {
  errorCode: number;
}

const ErrorMessage = memo(function ErrorMessage({ errorCode }: ErrorMessageProps) {
  return <p>{errorCode}</p>;
});

export default ErrorMessage;
