import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Footer.css";

export default function Footer() {
    const { isDark } = useContext(ThemeContext);

    return (
        <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
            <button className={`to-top ${isDark ? 'dark' : 'light'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fa-solid fa-arrow-up" />
            </button>
            <p className={isDark ? 'dark' : 'light'}>© 2026 CHANHA. All rights reserved.</p>
        </footer>
    );
}