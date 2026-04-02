import { createContext,useState } from "react";

export const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
    //다크모드 상태 
    const [isDark, setIsDark] = useState(false);
    //다크모드 변경 함수
    const toggleTheme = () => {
        setIsDark((prev) => {
            document.body.classList.toggle("dark", prev);
            document.body.classList.toggle("light", !prev);
            return !prev;
        });
    };

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDark,
        setIsDark
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
