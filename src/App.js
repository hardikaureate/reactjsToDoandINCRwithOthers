import React from "react";
import Todo from "./components/todoreact/todo";
import Temp from "./components/weather/temp";
import TodoList from "./components/todoreact/TodoList";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
window.name = "Aureate"
const App = () => {
    return (
        <Switch>
        <Route exact path="/">
          <Home />
            <TodoList/>
        </Route>
  
        <Route path="/about">
          <About />
        </Route>
  
        <Route path="/service">
          <Service />
        </Route>
  
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    );
};

const Home = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Subscribe to </p>
          <h1>Thapa Technical Home Page</h1>
        </section>
      </>
    );
  };

const About = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Thapa Technical About Page</h1>
        </section>
      </>
    );
  };
  
  const Service = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Thapa Technical Service Page</h1>
        </section>
      </>
    );
  };
  
  const Contact = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Thapa Technical Contact Page</h1>
        </section>
      </>
    );
  };

export default App;
