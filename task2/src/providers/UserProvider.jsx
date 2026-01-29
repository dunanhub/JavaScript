import { useMemo, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function UserProvider({ children }) {
    // mock data
    const [user] = useState({
        name: "Bekzat",
        email: "ubniev.bekzat@finreg.kz",
        role: "admin",
    });

    const [permissions] = useState({
        canEdit: true,
        canDelete: false,
        canView: true,
    });

    const [theme, setTheme] = useState({
        darkMode: false,
        fontSize: "medium",
    });

    // Пример theme toggle
    function toggleDarkMode() {
        setTheme((prev) => ({ ...prev, darkMode: !prev.darkMode }));
    }

    // useMemo чтобы не создать объект заново на каждый ререндер
    const value = useMemo(() => {
        return { user, permissions, theme, toggleDarkMode };
    }, [user, permissions, theme]);

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>;
}