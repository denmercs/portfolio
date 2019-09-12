import React from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";

import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import About from "./components/about"
import Design from "./components/design"
import Projects from "./components/projects"

function App() {
  return (
    <div className="App">
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
}

export default App;
