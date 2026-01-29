import { useUser } from "../context/UserContext";

export default function Dashboard() {
    const { user } = useUser();

    return (
        <section style = {{ padding: 12, border: "1px solid #ddd", marginBottom: 10 }}>
            <h2>Dashboard</h2>

            <p>Welcome, <b>{ user.name }</b></p>
        </section>
    );
}