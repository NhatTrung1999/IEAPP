import {
  Box,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContainerStyle = {
  position: "relative",
  width: "100%",
  height: "100vh",
};

const PaperStyle = {
  minWidth: "300px",
  maxWidth: "325px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: 20,
};

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <Box style={ContainerStyle}>
      <Paper elevation={8} style={PaperStyle}>
        <Box
          sx={{
            marginTop: 3,
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              component="h1"
              variant="h4"
              style={{ color: "#1976d2", fontWeight: "600" }}
              textAlign="center"
            >
              {"Login"}
            </Typography>
            <Typography
              variant="div"
              color="#aeaeae"
              display="block"
              textAlign="center"
            >
              {"Please log in to continue!"}
            </Typography>

            <TextField
              type="text"
              name="username"
              fullWidth
              label={"Account"}
              margin="normal"
            />

            <TextField
              type="password"
              name="password"
              fullWidth
              label={"Password"}
              margin="normal"
            />

            <TextField
              select
              name="factory"
              fullWidth
              label={"Factory"}
              margin="normal"
            >
              <MenuItem value="LYV">LYV</MenuItem>
              <MenuItem value="LHG">LHG</MenuItem>
              <MenuItem value="LVL">LVL</MenuItem>
              <MenuItem value="LYM">LYM</MenuItem>
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              {"login"}
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#aeaeae" }}>
              {" "}
              {"Language"}
            </Typography>
            <TextField
              select
              name="languages"
              size="small"
              variant="standard"
              sx={{ width: "20%", textAlign: "center" }}
              InputProps={{ style: { color: "#1565c0", fontSize: "14px" } }}
            >
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="VN">VN</MenuItem>
            </TextField>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
