import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import SideBar from "./Components/SideBar/SideBar";
import Notification from "./Components/Notification/Notification";
import Reports from "./Components/Reports/Reports";
import Header from "./Components/Header/Header";
import Settings from "./Components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Header></Header>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
