import { ChangeEvent, memo } from "react";
import styles from "./Input.module.css";
interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input = memo(function Input({ value, onChange, placeholder, className }: InputProps) {
  return <input className={`${styles.input} ${className}`} placeholder={placeholder} value={value} onChange={onChange} />;
});

export default Input;
