import { useUser } from "../context/UserContext";

export default function UserMenu() {
    const { user, permissions } = useUser();

    return (
        <section style = {{ padding: 12, border: "1px solid #ddd", marginBottom: 10 }}>
            <h4>UserMenu</h4>

            <p>Email: <b>{ user.email }</b></p>

            <ul>
                <li>canView: {permissions.canView ? "Yes" : "No"}</li>
                <li>canEdit: {permissions.canEdit ? "Yes" : "No"}</li>
                <li>canDelete: {permissions.canDelete ? "Yes" : "No"}</li>
            </ul>
        </section>
    );
}