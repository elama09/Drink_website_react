import React, { Component } from "react";
import ProfiiliArvostelu from "./ProfiiliArvostelu";
import { PoistaArvosteluApista } from "./Palvelu";
import "./Components.css";

const urlHaeKaikkiKayttajat = "https://viski.azurewebsites.net/api/kayttajat/";
const urlHaeArvostelut = "https://viski.azurewebsites.net/api/arvosteluts/";
var kaikkiArvostelut = [];
var kaikkiArvostelut2 = [];

class Profiili extends Component {
  constructor({ match }) {
    super();
    this.state = {
      urlid: match.params.kid,
      kayttaja: {},
      loggedIn: false,
      arvostelut: []
    };
  }
  componentDidMount = () => {
    this.HaeKayttajanArvostelut();
    fetch(urlHaeKaikkiKayttajat)
      .then(result => result.json())
      .then(data => {
        for (let index = 0; index < data.length; index++) {
          var kid = `${data[index].kayttaja_id}`;
          if (kid === this.state.urlid) {
            this.setState({ kayttaja: data[index] });
          }
        }
      });
  };
  componentWillUnmount() {
    kaikkiArvostelut2 = [];
  }
  HaeKayttajanArvostelut = () => {
    fetch(urlHaeArvostelut)
      .then(result => result.json())
      .then(data => {
        kaikkiArvostelut = data.filter(x => x.kayttaja_id == this.state.urlid);
        for (let index = 0; index < kaikkiArvostelut.length; index++) {
          const element = kaikkiArvostelut[index];
          kaikkiArvostelut2.push(element);
          console.log(element);
        }
        this.setState({ arvostelut: kaikkiArvostelut });
      });
  };
  poistaListasta = poistid => {
    console.log(kaikkiArvostelut2);
    var indx = kaikkiArvostelut2.findIndex(q => q.arvostelu_id === poistid);
    kaikkiArvostelut2.splice(indx, 1);
    this.setState(this.state);
  };

  render() {
    let arv = kaikkiArvostelut2.map(q => {
      return (
        <ProfiiliArvostelu
          poista={this.poistaListasta}
          key={q.arvostelu_id}
          arvostelu={q}
        />
      );
    });
    if (this.state.kayttaja.kayttaja_id == null) {
      return (<div><h2>Et ole kirjautunut sisään</h2><h3>Paina Login ja kirjaudu</h3></div>)
    } else {
      return (
        <div>
          <img src={this.state.kayttaja.kuva} height="150" /> <br />
          <h2 id="lista"> Käyttäjän {this.state.kayttaja.nick} arvostelut</h2>
          <div>{arv}</div>
        </div>
      );
    }
  }
}

export default Profiili;
