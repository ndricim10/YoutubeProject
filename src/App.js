import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import "./Screens/HomeScreen/app.scss";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <div className="youtube">
        <Header />
        <div className="app_container">
          <Sidebar size={20} />
          <Container fluid className="app_main">
            {children}
          </Container>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={
          <Layout>
          <HomeScreen />
        </Layout>
        } />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/search' element={
          <Layout>
          <h1>Test search</h1>
        </Layout>
        } />
        </Routes>
          
      </Router>
    </>
  );
}
