import React, { Component } from "react";
import Juoma from "./Juoma";
import Details from "./Details";
import "./Components.css";

class Juomalista extends Component {
  render() {
    let juomat = this.props.data1.map(juoma => {
      return (
        <Juoma
          PoistaJuomaListalta={this.props.PoistaJuomaListalta}
          juoma={juoma}
          key={juoma.juoma_id}
        >
          {" "}
        </Juoma>
      );
    });

    return (
      <div>
        <h2 id="lista">Kaikki Juomat</h2>
        {juomat}
      </div>
    );
  }
}

export default Juomalista;
