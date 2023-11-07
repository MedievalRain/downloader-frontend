import { ReactNode, createContext, useContext, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./Dropdown.module.css";
interface ContextType {
  isOpen: boolean;
  trigger: () => void;
  pickItem: (text: string) => void;
  pickedText: string;
}
const defaultContextValue: ContextType = {
  isOpen: false,
  trigger: () => {},
  pickItem: () => {},
  pickedText: "",
};

interface DropdownProps {
  children: ReactNode;
  className?: string;
}

const DropdownContext = createContext<ContextType>(defaultContextValue);

function Dropdown({ children, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pickedText, setPickedText] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));
  const trigger = () => setIsOpen((v) => !v);
  const pickItem = (text: string) => {
    setPickedText(text);
    setIsOpen(false);
  };
  return (
    <DropdownContext.Provider value={{ isOpen, trigger, pickItem, pickedText }}>
      <div ref={dropdownRef} className={`${styles.dropdown} ${className} `}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function Items({ children, className }: DropdownProps) {
  const { isOpen } = useContext(DropdownContext);
  return isOpen && <ul className={`${styles.items} ${className}`}>{children}</ul>;
}

interface ItemProps {
  onClick: () => void;
  text: string;
  className?: string;
}

function Item({ onClick, text, className }: ItemProps) {
  const { trigger, pickItem } = useContext(DropdownContext);
  const handleClick = () => {
    trigger();
    onClick();
    pickItem(text);
  };
  return (
    <li className={`${styles.item} ${className}`}>
      <button className={styles["item-button"]} onClick={handleClick}>
        {text}
      </button>
    </li>
  );
}
interface TriggerProps {
  defaultText: string;
  className?: string;
}

function Trigger({ defaultText, className }: TriggerProps) {
  const { pickedText, trigger } = useContext(DropdownContext);
  return (
    <button className={`${className} ${styles["trigger-button"]}`} onClick={trigger}>
      {pickedText ? pickedText : defaultText}
      <svg height="1em" viewBox="0 0 512 512">
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
    </button>
  );
}

Dropdown.Items = Items;
Dropdown.Item = Item;
Dropdown.Trigger = Trigger;

export default Dropdown;
