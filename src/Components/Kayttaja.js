import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import {
  PoistaArvosteluApista,
  PoistaJuomaApista,
  PoistaKayttajaApista
} from "./Palvelu";
import "./Components.css";

class Kayttaja extends Component {
  state = {};

  Poista = () => {
    this.props.PoistaKayttajaListalta(this.props.kayttaja.kayttaja_id);
    PoistaKayttajaApista(this.props.kayttaja.kayttaja_id);
  };

  render() {
    let id = sessionStorage.getItem("kayttaja_id");

    return (
      <div>
        <h4 id="lista">{this.props.kayttaja.nick}</h4>
        <img src={this.props.kayttaja.kuva} height="150" /> <br />
        &#9998;{" "}
        <Link id="linkit" to={`/profiili/${this.props.kayttaja.kayttaja_id}`}>
          Katso profiilia
        </Link>
        &ensp;&ensp;{" "}
        {id == 1 ? (
          <button id="nappi" style={(this.props.kayttaja.kayttaja_id == 1 ? {display: 'none'} : {display: 'block'})} onClick={this.Poista} type="button">
            Poista käyttäjä
          </button>
        ) : (
          <br />
        )}
        <hr />
      </div>
    );
  }
}

export default Kayttaja;
