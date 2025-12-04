"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import useAuthStore from "@/store/authStore"; // Zustand store

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();

  async function handleSubmit() {
    setError("");

    // Sign-in using NextAuth
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError(res.error || "Login failed");
      return;
    }

    // Get session after login
    const sessionRes = await fetch("/api/auth/session").then((r) => r.json());
    const token = sessionRes?.accessToken ?? null;

    // Save token in Zustand
    setToken(token);

    // Redirect to dashboard
    router.push("/dashboard");
  }

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ p: 4, width: 380 }}>
        <Typography variant="h5" mb={2} align="center">
          Admin Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />

        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 1 }}>
            {error}
          </Typography>
        )}

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}
