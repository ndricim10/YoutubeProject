import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import "./Screens/HomeScreen/app.scss";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginEmail from "./Screens/LoginEmail/LoginEmail";
import {
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./Screens/SignUp/SignUp";
import Watch from "./Screens/Watch/Watch";
import Search from "./Components/Search/Search";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Channels from "./Components/Channels/Channels";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import MyProfile from "./Screens/LoginScreen/MyProfile";

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
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />

      <Route path="/login" element={<LoginEmail />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/search/:query"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/subscriptions"
        element={
          <Layout>
            <Subscriptions />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <MyProfile />
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <Watch />
          </Layout>
        }
      />

      <Route
        path="/channels/:channelId"
        element={
          <Layout>
            <Channels />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <PageNotFound />
          </Layout>
        }
      />
    </Routes>
  );
}
