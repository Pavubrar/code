import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
