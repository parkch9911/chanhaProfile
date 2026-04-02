import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Header.css";

export default function Header() {
const {isDark,toggleTheme } = useContext(ThemeContext);
    return (
        <header className={`header ${isDark ? 'dark' : 'light'}`}>
            <div className="header-container">
                <h3 className={`logo ${isDark ? 'dark' : 'light'}`} onClick={()=>window.scrollTo(0,0)}>&lt; CHANHA / &gt;</h3>
                <nav className={`nav ${isDark ? 'dark' : 'light'}`}>
                    <a href="#About">About</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Training">Training</a>
                    <div className="theme-box">
                        <span className={`theme-toggle ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
                            Dark
                        </span>
                        <div className={`theme-right ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
                            <div className={`theme-ball ${isDark ? "dark" : "light"}`}></div>
                        </div>
                    </div>
                </nav>
            </div >
        </header >
    );
}