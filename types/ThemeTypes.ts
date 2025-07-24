import { Dispatch, SetStateAction } from "react";

export type ThemeProps = {
  isDarkMode: boolean;
  setIsDarkMode?: Dispatch<SetStateAction<boolean>>;
};
