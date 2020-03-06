import React from "react";
import { Route, Switch } from "react-router-dom";
import "./util/custom.scss";
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import About from "./components/about";
import Projects from "./components/projects";
import ChatBox from "./components/chatbox";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <ChatBox />
        <Footer />
      </div>
    </>
  );
};

export default App;
