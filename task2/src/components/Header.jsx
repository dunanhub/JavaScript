import { useUser } from "../context/UserContext";

export default function Header() {
    const { user, theme, toggleDarkMode } = useUser();

    return (
        <section style = {{ padding: 12, border: "1px solid #ddd", marginBottom: 10 }}>
            <h3>Header</h3>
            <p>
                Role: <b>{ user.role }</b>
            </p>
            <p>
                Theme: <b>{ theme.darkMode ? "Dark" : "Light" }</b>
            </p>

            <button onClick={toggleDarkMode} style = {{ padding: "6px 10px" }}>
                Toggle Theme
            </button>
        </section>
    );
}