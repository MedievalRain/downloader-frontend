import { createContext } from "react";
import { Source } from "./types";

type AppContextType = {
  isLoading: boolean;
  searchVideo: (source: Source) => void;
};

export const AppContext = createContext<AppContextType>({
  isLoading: false,
  searchVideo: () => {},
});
