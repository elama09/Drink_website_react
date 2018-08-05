import React, { Component } from "react";
import { MuokkaaJuoma } from "./Palvelu";
import { PoistaJuomaApista } from "./Palvelu";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./Components.css";
import { Row, Col, Grid } from "react-bootstrap";

const urlHaeKaikki = "http://localhost:18137/api/juomat/";

class Details extends Component {
  constructor({ match }) {
    super();
    this.state = {
      urlid: match.params.id,
      redirect: false,
      juoma: {}
    };
  }

  componentDidMount() {
    this.HaeJuomanDetails();
  }

  PoistaJuomaListalta = () => {
    PoistaJuomaApista(this.refs.juoma_id.value);

    this.setState({ juoma: {}, redirect: true });
  };

  HaeJuomanDetails = () => {
    fetch(urlHaeKaikki + this.state.urlid)
      .then(result => result.json())
      .then(data =>
        this.setState({
          juoma: data
        })
      );
  };

  //VALIDOINTIA ON LISÄTTÄVÄ
  Muokkaa = e => {
    //e.preventDefault();

    if (
      this.refs.nimi.value == "" ||
      this.refs.kategoria.value == "" ||
      this.refs.hinta.value == "" ||
      this.refs.valmistaja.value == "" ||
      this.refs.valmistusmaa.value == "" ||
      this.refs.valmistusvuosi.value == "" ||
      this.refs.kuvaus.value == ""
    ) {
      alert("Täytä kaikki kentät, kiitos.");
    } else {
      let juomaTemp = {
        juoma_id: this.state.juoma.juoma_id,
        kategoria: this.refs.kategoria.value,
        nimi: this.refs.nimi.value,
        valmistaja: this.refs.valmistaja.value,
        hinta: this.refs.hinta.value,
        valmistusmaa: this.refs.valmistusmaa.value,
        valmistusvuosi: this.refs.valmistusvuosi.value,
        kuvaus: this.refs.kuvaus.value,
        kuva: this.refs.kuva.value
      };

      MuokkaaJuoma(juomaTemp);
      this.setState({ juoma: juomaTemp });
    }
  };

  render() {
    let id = sessionStorage.getItem("kayttaja_id");

    if (this.state.redirect) {
      return (
        <div>
          <h1>Juoma poistettu!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Grid>
            <div id="lisaaLaatikko">
              <Row className="show-grid">
                <Col xs={12} md={12}>
                  <h2 id="lista">Lisätietoja</h2>
                </Col>
              </Row>
              <br />
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Nimi: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    maxlength="50"
                    ref="nimi"
                    type="text"
                    defaultValue={this.state.juoma.nimi}
                  />
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Kategoria</label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    maxlength="50"
                    ref="kategoria"
                    type="text"
                    defaultValue={this.state.juoma.kategoria}
                  />
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Hinta</label>
                </Col>
                <Col xs={6} md={10}>
                  <input min="0"
                    step="0.01"
                    maxlength="9"
                    ref="hinta"
                    type="number"
                    defaultValue={this.state.juoma.hinta}
                  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Valmistaja</label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    maxlength="50"
                    ref="valmistaja"
                    type="text"
                    defaultValue={this.state.juoma.valmistaja}
                  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Valmistusmaa</label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    maxlength="50"
                    ref="valmistusmaa"
                    type="text"
                    defaultValue={this.state.juoma.valmistusmaa}
                  />
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Valmistusvuosi</label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    min="1"
                    max="2018"
                    maxlength="4"
                    ref="valmistusvuosi"
                    type="number"
                    defaultValue={this.state.juoma.valmistusvuosi}
                  />
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Kuvaus</label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    maxlength="300"
                    ref="kuvaus"
                    type="text"
                    defaultValue={this.state.juoma.kuvaus}
                  />
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Kuva</label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    maxlength="250"
                    ref="kuva"
                    type="text"
                    defaultValue={this.state.juoma.kuva}
                  />
                  <br />
                  <img height="150" src={this.state.juoma.kuva} />
                </Col>
              </Row>

              {id == 1 ? (
                <div>
                  <Row className="show-grid">
                    <Col xs={6} md={12}>
                      <button
                        id="nappi"
                        onClick={this.PoistaJuomaListalta}
                        type="button"
                      >
                        Poista
                      </button>&ensp;&ensp;
                      <input
                        id="nappi"
                        onClick={this.Muokkaa}
                        value="Päivitä"
                        type="submit"
                      />
                    </Col>
                  </Row>
                </div>
              ) : (
                <br />
              )}
            </div>
          </Grid>
        </div>

        /* <h2 id="lista">Lisätietoja</h2>
          <form id="lista">
            <label>Tuote-ID: </label>
            <input
              ref="juoma_id"
              type="number"
              readOnly="readonly"
              defaultValue={this.state.juoma.juoma_id}
            />
            <br />
            <label>Nimi: </label>
            <input
              maxlength="50"
              ref="nimi"
              type="text"
              defaultValue={this.state.juoma.nimi}
            />
            <br />
            <label>Kategoria: </label>
            <input
              maxlength="50"
              ref="kategoria"
              type="text"
              defaultValue={this.state.juoma.kategoria}
            />
            <br />
            <label>Hinta: </label>
            <input
              maxlength="9"
              ref="hinta"
              type="number"
              defaultValue={this.state.juoma.hinta}
            />
            <br />
            <label>Valmistaja: </label>
            <input
              maxlength="50"
              ref="valmistaja"
              type="text"
              defaultValue={this.state.juoma.valmistaja}
            />
            <br />
            <label>Valmistusmaa: </label>
            <input
              maxlength="50"
              ref="valmistusmaa"
              type="text"
              defaultValue={this.state.juoma.valmistusmaa}
            />
            <br />
            <label>Valmistusvuosi: </label>
            <input
              min="1"
              max="2018"
              maxlength="4"
              ref="valmistusvuosi"
              type="number"
              defaultValue={this.state.juoma.valmistusvuosi}
            />
            <br />
            <label>Kuvaus: </label>
            <input
              maxlength="300"
              ref="kuvaus"
              type="text"
              defaultValue={this.state.juoma.kuvaus}
            />
            <br />
            <label>Kuva: </label>
            <input
              maxlength="250"
              ref="kuva"
              type="text"
              defaultValue={this.state.juoma.kuva}
            />
            <br />
            <img height="150" src={this.state.juoma.kuva} />
            {id == 1 ? (
              <div>
                <input onClick={this.Muokkaa} value="Päivitä" type="submit" />
                <button onClick={this.PoistaJuomaListalta} type="button">
                  Poista
                </button>
              </div>
            ) : (
              <br />
            )}
          </form>
        </div> */
      );
    }
  }
}
export default Details;
