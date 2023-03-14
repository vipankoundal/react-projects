import "./App.scss";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <HomeBanner />
              </>
            }
          />
          <Route path="/login" element={<Login page={true} />} />
          <Route path="/register" element={<Login page={false} />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <Banner />
                <List />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
