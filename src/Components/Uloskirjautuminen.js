import React, { Component } from "react";
import "./Components.css";

class Uloskirjautuminen extends Component {
  state = {};

  componentDidMount() {
    sessionStorage.clear();
    localStorage.clear();
  }

  render() {
    let kirjautunut = sessionStorage.getItem("loggedin");
    return (
      <div>
        {kirjautunut == "true" ? (
          <div id="lista">
            {" "}
            <h2>Sinut on kirjattu ulos.</h2>
          </div>
        ) : (
            <div>
              <h2 id="lista">Et ole kirjautunut sisään.</h2>
            </div>
          )}
      </div>
    );
  }
}

export default Uloskirjautuminen;
