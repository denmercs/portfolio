import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./util/custom.scss";
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import About from "./components/about";
import Design from "./components/design";
import Projects from "./components/projects";

import { getUser } from "./redux/actions/userActions";
import { connect } from "react-redux";

const App = props => {
  useEffect(() => {
    props.getUser();
  }, [props]);
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/design" component={Design} />
        <Route path="/projects" component={Projects} />
      </Switch>

      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  getUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
