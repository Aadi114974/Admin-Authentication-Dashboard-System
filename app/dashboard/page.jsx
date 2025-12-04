"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect only when NextAuth confirms the user is logged out
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  // While checking login status
  if (status === "loading") {
    return <div style={{ padding: 20 }}>Checking session...</div>;
  }

  // If not logged in (this flashes briefly)
  if (status === "unauthenticated") {
    return <div style={{ padding: 20 }}>Redirecting to login...</div>;
  }

  // Logged in
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.username}</p>
      <p>Token: {session?.accessToken ? "Available" : "Missing"}</p>
    </div>
  );
}
