import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import { LisaaUusiJuomaApi } from "./Palvelu";
import {
  Col,
  ControlLabel,
  Checkbox,
  Button,
  Grid,
  Row
} from "react-bootstrap";
import "./Components.css";

class Lisaauusi extends Component {
  constructor() {
    super();
    this.state = {
      juoma: {},
      redirect: false
    };
  }

  Lisaauusi = e => {
    let juomaTemp = {
      kategoria: this.refs.kategoria.value,
      nimi: this.refs.nimi.value,
      valmistaja: this.refs.valmistaja.value,
      hinta: this.refs.hinta.value,
      valmistusmaa: this.refs.valmistusmaa.value,
      valmistusvuosi: this.refs.valmistusvuosi.value,
      kuvaus: this.refs.kuvaus.value,
      kuva: this.refs.kuva.value
    };

    LisaaUusiJuomaApi(juomaTemp);
    this.setState({ juoma: {}, redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return (
        <div>
          <h1>Juoma Lisätty!</h1>
          <Link to="/juomat">Palaa juomiin</Link>
        </div>
      );
    } else {
      return (
        <Grid>
          <div id="lisaaLaatikko">
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h2 id="lista">Lisää juoma</h2>
              </Col>
            </Row>
            <form onSubmit={this.Lisaauusi}>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Nimi: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input maxlength="50" ref="nimi" type="text" required />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Kategoria: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input maxlength="50" ref="kategoria" type="text" required />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Hinta: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input min="0" step="0.01" maxlength="9" ref="hinta" type="number" />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Valmistaja: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input maxlength="50" ref="valmistaja" type="text" required />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Valmistusmaa: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    maxlength="50"
                    ref="valmistusmaa"
                    type="text"
                    required
                  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Valmistusvuosi: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input
                    min="1"
                    max="2018"
                    maxlength="4"
                    ref="valmistusvuosi"
                    type="number"
                    required
                  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Kuvaus: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input maxlength="300" ref="kuvaus" type="text" required />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  <label>Kuva URL: </label>
                </Col>
                <Col xs={6} md={10}>
                  <input ref="kuva" type="text" />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={2}>
                  {" "}
                </Col>
                <Col xs={6} md={4}>
                  <br />
                  <input id="nappi" value="Lisää" type="submit" />
                </Col>
              </Row>

              {/* <div id="lisaaLaatikko">
                <label>Nimi: </label>
                <input maxlength="50" ref="nimi" type="text" required />
                <br />
                <label>Kategoria: </label>
                <input maxlength="50" ref="kategoria" type="text" required />
                <br />
                <label>Hinta: </label>
                <input maxlength="9" ref="hinta" type="number" />
                <br />
                <label>Valmistaja: </label>
                <input maxlength="50" ref="valmistaja" type="text" required />
                <br />
                <label>Valmistusmaa: </label>
                <input maxlength="50" ref="valmistusmaa" type="text" required />
                <br />
                <label>Valmistusvuosi: </label>
                <input
                  min="1"
                  max="2018"
                  maxlength="4"
                  ref="valmistusvuosi"
                  type="number"
                  required
                />
                <br />
                <label>Kuvaus: </label>
                <input maxlength="300" ref="kuvaus" type="text" required />
                <br />
                <label>Kuva URL: </label>
                <input ref="kuva" type="text" />
                <br />
              </div>
              <input id="nappi" value="Lisää" type="submit" /> */}
            </form>
          </div>
        </Grid>
      );
    }
  }
}

export default Lisaauusi;
