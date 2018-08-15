import React, { Component } from "react";
import { LisaaKayttajaApi, handleFileUpload } from "./Palvelu";
import { Redirect } from "react-router-dom";
import "./Components.css";

const urlHaeKaikkiKayttajat = "https://viski.azurewebsites.net/api/kayttajat/";
var kaikkiKayttajat = [];
var saltsa = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Å",
  "Ä",
  "Ö"
];
var saltsa2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
class Rekisterointi extends Component {
  constructor() {
    super();
    this.state = {
      kayttaja: {}
    };
  }
  componentWillMount = () => {
    fetch(urlHaeKaikkiKayttajat)
      .then(result => result.json())
      .then(data => {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          kaikkiKayttajat.push(element);
        }
      });
  };

  Lisaauusikayttaja = kayttaja => {
    var counter1 = 0;
    for (let index = 0; index < kaikkiKayttajat.length; index++) {
      const element = kaikkiKayttajat[index];
      if (this.refs.nick.value === element.nick) {
        counter1++;
        alert("Käyttäjätunnus on jo olemassa");
        return null;
      }
    }
    var counter = 0;
    var counter2 = 0;
    for (let index = 0; index < this.refs.salasana.value.length; index++) {
      const element = this.refs.salasana.value[index];

      if (saltsa.includes(element)) {
        counter++;
      }
      if (saltsa2.includes(element)) {
        counter2++;
      }
    }

    if (counter < 1 || counter2 < 1) {
      alert(
        "Salasanan tulee sisältää kuusi merkkiä, yksi iso kirjain ja yksi numero"
      );
    }

    if (
      counter > 0 &&
      counter2 > 0 &&
      counter1 < 1 &&
      this.refs.nick.value.length > 3 &&
      this.refs.etunimi.value.length > 3 &&
      this.refs.sukunimi.value.length > 3 &&
      this.refs.salasana.value.length > 6
    ) {
      kayttaja = {
        nick: this.refs.nick.value,
        etunimi: this.refs.etunimi.value,
        sukunimi: this.refs.sukunimi.value,
        salasana: this.refs.salasana.value,
        kuva: this.refs.kuva.value
      };

      LisaaKayttajaApi(kayttaja);
      this.setState({ redirect: true });
    } else {
      alert("Etunimen & Sukunimen on oltava 4 merkkiä tai yli");
    }
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/kirjautuminen" />;
    } else {
      return (
        <div>
          <form id="lista">
            <label>Nickname: </label>&ensp;
            <input maxLength="50" ref="nick" type="text" required />
            <br />
            <label>Etunimi: </label>&ensp;&ensp;&ensp;
            <input maxLength="50" ref="etunimi" type="text" required />
            <br />
            <label>Sukunimi: </label>&ensp;
            <input maxLength="50" ref="sukunimi" type="text" required />
            <br />
            <label>Salasana: </label>&ensp;
            <input maxLength="50" ref="salasana" type="password" required />
            <br />
            <label>Kuva url: </label>&ensp;&ensp;
            <input max="250" ref="kuva" type="text" />
            <br />
            <br />
            <input
              id="nappi"
              onClick={this.Lisaauusikayttaja}
              type="button"
              value="Rekisteröidy"
            />&ensp;
            <button id="nappi" type="reset">
              Tyhjennä kentät
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Rekisterointi;
