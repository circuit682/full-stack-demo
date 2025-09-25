import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/protected", { credentials: "include" })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/";
        }
        return res.text();
      })
      .then((data) => setUser(data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {user ? (
        <div dangerouslySetInnerHTML={{ __html: user }} />
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}
