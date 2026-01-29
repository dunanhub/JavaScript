import { createContext, useContext } from "react";

// Context хранит все общие данные, как user, permissions, theme
export const UserContext = createContext(null);

// Хук-обертка, чтобы удобно доставать данные из контекста
export function useUser() {
    const value = useContext(UserContext);

    // Валидация, если забыли обернуть в Provider
    if (!value) {
        throw new Error("useUser must be used inside <UserProvider>");
    }

    return value;
}