import { CSSProperties, ChangeEvent, memo } from "react";
import styles from "./Input.module.css";
interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
}

const Input = memo(function Input({ value, onChange, placeholder, className, style }: InputProps) {
  return (
    <input
      style={style}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});

export default Input;
