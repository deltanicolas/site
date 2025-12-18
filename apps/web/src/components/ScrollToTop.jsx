import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Appena cambia il percorso (pathname), porta la finestra a (0, 0)
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}