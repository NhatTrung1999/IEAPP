import { Routes, Route } from "react-router-dom";
import Login from "./screens/LoginScreen";
import Signup from "./screens/SignupScreen.js";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/*" element={<HomeScreen />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
