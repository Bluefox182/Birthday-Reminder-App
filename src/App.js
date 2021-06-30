import React, { useState } from "react";
import data from "./data";
import List from "./List";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <header>
        <div className="navbar">
          <Navbar expand="lg">
            <Navbar.Brand>Birthday Reminder App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App;
