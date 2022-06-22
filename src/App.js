import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import "./Screens/HomeScreen/app.scss";
import ToggleScreen from "./Screens/ToggleScreen/ToggleScreen";

export default function App() {
  return (
    <div className="youtube">
      
      <Header />
      <div className="app_container">
        <Sidebar size={20} />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}
