import React from 'react'
import { Route } from 'react-router-dom';
// Components imports
import Home from "./components/Home";
import Layout from "./components/Common/Layout"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
      <Route exact path= "/" component= {Home}/>
      <Route path="/About" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
      </Layout>
    </div>
  );
};

export default App;
