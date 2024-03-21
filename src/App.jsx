import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import SideBar from "./Components/SideBar/SideBar";
import Notification from "./Components/Notification/Notification";
import Reports from "./Components/Reports/Reports";
import Header from "./Components/Header/Header";
import Settings from "./Components/Settings/Settings";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const handleToggle = () => {
    if (window.innerWidth > 991) {
      setIsOpen(!isOpen);
    }
    if (window.innerWidth < 991) {
      setIsClose(!isClose);
    }
  };

  return (
    <BrowserRouter>
      <SideBar isOpen={isOpen} isClose={isClose}>
        <Header handleToggle={handleToggle} setIsOpen={setIsOpen}></Header>
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
