import UserProvider from "./providers/UserProvider";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import UserMenu from "./components/UserMenu";

export default function App() {
    // Компоненты вложены и получает данные без prop drilling
    return (
        <UserProvider>
            <main style = {{ maxWidth: 720, margin: "20px auto", fontFamily: "Arial" }}>
                <h1>
                    Lab 1.2 - Provider Pattern
                </h1>

                {/* App -> Dashbord */}
                <Dashboard />

                {/* App -> Header */}
                <Header />

                {/* App -> UserMenu */}
                <UserMenu />
            </main>
        </UserProvider>
    );
}