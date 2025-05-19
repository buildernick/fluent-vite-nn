import { Routes, Route } from "react-router-dom";

import CardDemo from "./pages/CardDemo";
import MyApps from "./pages/MyApps";
import MyAccount from "./pages/MyAccount";
import AvatarDemo from "./pages/AvatarDemo";
import AvaList from "./pages/AvaList";

import { FluentThemeProvider } from "./theme/ThemeProvider";
import "./App.css";

function App() {
  return (
    <FluentThemeProvider>
      <Routes>
        <Route path="/myapps" element={<MyApps />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/card-demo" element={<CardDemo />} />
        <Route path="/ava" element={<AvatarDemo />} />
        <Route path="/avalist" element={<AvaList />} />

        <Route path="/" element={<MyApps />} />
      </Routes>
    </FluentThemeProvider>
  );
}

export default App;
