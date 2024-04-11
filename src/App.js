import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile } from "./pages/index";
import Login from "./auth/login/Login";
import AuthInterceptor from "./api/axios/instance-axios";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Toast from "./toast/ToastComponent.jsx";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state)=>state.token));
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toast anchorOrigin={{ vertical: "top", horizontal: "right" }} />{" "}
          <AuthInterceptor />
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/home" element= isAuth ?{<Home /> : <Navigate to="/"} />/> */}
            {/* <Route path="/profile/:userId" element= isAuth ?{<{Profile} /> : <Navigate to="/"} /> /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
