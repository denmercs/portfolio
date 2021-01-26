import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "antd/dist/antd.css";
import "./assets/scss/base.scss";
import SidebarMenu from "./components/Sidebar";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 900px)",
  });

  const [isVisible, setIsVisible] = useState(false);

  console.log("testing librayr", isTabletOrMobileDevice);
  return (
    <>
      <div className="app">
        <Header
          isTabletOrMobileDevice={isTabletOrMobileDevice}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <div className="sidebarMenu">
          <SidebarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
