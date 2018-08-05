import React, { Component } from "react";
import { LisaaUusiArvosteluApi } from "./Palvelu";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./Components.css";
import { Grid, Row, Col } from "react-bootstrap";

class Uusiarvostelu extends Component {
  constructor({ match }) {
    super();
    this.state = {
      urlid: match.params.id,
      redirect: false
    };
  }

  LisaaArvostelu = () => {
    let arvostelu = {
      juoma_id: this.state.urlid,
      kayttaja_id: sessionStorage.getItem("kayttaja_id"),
      arvosteluteksti: this.refs.arvosteluteksti.value,
      pisteet: this.refs.pisteet.value
    };
    LisaaUusiArvosteluApi(arvostelu);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return (
        <div>
          <h1 id="lista">Arvostelu lisätty!</h1>
          <Link to="/juomat">Palaa juomiin</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Grid>
            <div id="lisaaLaatikko">
              <Row className="show-grid">
                <Col xs={12} md={12}>
                  <h2 id="lista">Anna arvostelu</h2>
                </Col>
              </Row>
              <form id="lista" onSubmit={this.LisaaArvostelu}>
                <Row className="show-grid">
                  <Col xs={6} md={2}>
                    <label>Arvosteluteksti: </label>
                  </Col>
                  <Col xs={6} md={10}>
                    <input maxLength="300" ref="arvosteluteksti" type="text" />
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={2}>
                    <label>Pisteet: </label>
                  </Col>
                  <Col xs={6} md={10}>
                    <input
                      min="1"
                      max="10"
                      ref="pisteet"
                      type="number"
                      required
                    />
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={12} md={12}>
                    <input id="nappi" type="submit" value="Luo" />
                  </Col>
                </Row>
              </form>
            </div>
          </Grid>
        </div>
      );
    }
  }
}

export default Uusiarvostelu;
