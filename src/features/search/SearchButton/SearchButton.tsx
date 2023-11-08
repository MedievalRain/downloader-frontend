import { memo, useContext, useState } from "react";
import styles from "./SearchButton.module.css";
import { Source } from "../../../types";
import { AppContext } from "../../../AppContext";
import Loader from "../../../ui/Loader/Loader";
interface SearchButtonProps {
  source: Source | null;
}

const SearchButton = memo(function SearchButton({ source }: SearchButtonProps) {
  const { searchVideo, isLoading } = useContext(AppContext);
  const [isError, setIsError] = useState(false);
  const handleClick = () => {
    if (source) {
      searchVideo(source);
    } else {
      setIsError(true);
    }
  };
  return (
    <button
      onAnimationEnd={() => setIsError(false)}
      disabled={isLoading}
      aria-disabled={isLoading}
      onClick={handleClick}
      className={`${styles.button} ${isError && styles.shake}`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <svg height="1.25em" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      )}
    </button>
  );
});

export default SearchButton;
