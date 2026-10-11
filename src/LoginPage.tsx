import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { type SyntheticEvent, useState } from "react";
import { useLoginMutation } from "./gql/generated";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error }] = useLoginMutation();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const { data } = await login({ variables: { email, password } });
      if (!data?.login) {
        return;
      }

      localStorage.setItem("token", data.login.accessToken);
      navigate({ to: "/" });
    } catch {
      // error state below already reflects this
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
      <Paper sx={{ p: 4, width: 360 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Log in
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Alert severity="error">{error.message}</Alert>}
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginPage;
