import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Juomalista from "./Juomalista";
import "./Components.css";

const urlHaeKaikki = "https://viski.azurewebsites.net/api/juomat/";
var kokolista = [];

class Juomat extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }

  PoistaJuomaListalta = juoma_id => {
    let templista = this.state.lista.filter(x => x.juoma_id != juoma_id);
    this.setState({ lista: templista });
  };

  componentDidMount() {
    this.HaeKaikkiJuomat();
  }

  HaeKaikkiJuomat = () => {
    fetch(urlHaeKaikki)
      .then(result => result.json())
      .then(data => {
        this.setState({ lista: data });
        kokolista = data;
      });
  };

  EtsiJuomia = () => {
    let etsi = this.refs.etsi.value;
    let temp = kokolista.filter(x => x.nimi.includes(etsi));
    this.setState({ lista: temp });
  };

  render() {
    let loggedin = sessionStorage.getItem("loggedin");

    return (
      <div>
        {loggedin == "true" ? (
          <div>
            {" "}
            &#9998;{" "}
            <Link id="linkit" to="/uusijuoma">
              Lisää uusi juoma
            </Link>
            <br />
          </div>
        ) : (
          <br />
        )}
        <br />
        <input ref="etsi" type="search" placeholder="Juoman nimi" />{" "}
        <button id="nappi" onClick={this.EtsiJuomia}>
          Etsi{" "}
        </button>
        <Juomalista
          data1={this.state.lista}
          PoistaJuomaListalta={this.PoistaJuomaListalta}
        />
      </div>
    );
  }
}

export default Juomat;
