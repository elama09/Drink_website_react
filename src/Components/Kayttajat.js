import React, { Component } from "react";
import Kayttaja from "./Kayttaja";
import "./Components.css";

const urlHaeKayttajat = "https://viski.azurewebsites.net/api/kayttajat/";

class Kayttajat extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }

  PoistaKayttajaListalta = kayttaja_id => {
    let templista = this.state.lista.filter(x => x.kayttaja_id != kayttaja_id);
    this.setState({ lista: templista });
  };

  componentDidMount() {
    this.HaeKaikkiKayttajat();
  }

  HaeKaikkiKayttajat = () => {
    fetch(urlHaeKayttajat)
      .then(result => result.json())
      .then(data => {
        this.setState({ lista: data });
      });
  };

  render() {
    let kaikkiKayttajat = this.state.lista.map(x => {
      return (
        <Kayttaja
          PoistaKayttajaListalta={this.PoistaKayttajaListalta}
          kayttaja={x}
          key={x.kayttaja_id}
        />
      );
    });

    return (
      <div>
        <h2 id="lista">Palvelun käyttäjät</h2>
        {kaikkiKayttajat}
      </div>
    );
  }
}

export default Kayttajat;
