import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./Components.css";
import { Grid, Row, Col } from "react-bootstrap";

const urlHaeKaikkiKayttajat = "http://localhost:18137/api/kayttajat/";
var kaikkiKayttajat = [];

class Kirjautuminen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      kayttaja: {},
      loggedIn: false
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

  kirjaudu = () => {
    console.dir(this.props);
    for (let index = 0; index < kaikkiKayttajat.length; index++) {
      if (
        this.refs.nick.value === kaikkiKayttajat[index].nick &&
        this.refs.salasana.value === kaikkiKayttajat[index].salasana
      ) {
        sessionStorage.setItem("loggedin", "true");
        sessionStorage.setItem(
          "kayttaja_id",
          kaikkiKayttajat[index].kayttaja_id
        );
        sessionStorage.setItem("nick", kaikkiKayttajat[index].nick);

        this.setState({
          kayttaja: kaikkiKayttajat[index],
          redirect: true,
          loggedIn: true
        });
        return;
      }
    }
    alert("Käyttäjätunnus tai salasana väärin");
  };

  render() {
    let kirjautunut = sessionStorage.getItem("loggedin");
    if (this.state.redirect === true) {
      return (
        <Redirect
          kayttaja={this.state.kayttaja}
          to={`/profiili/${this.state.kayttaja.kayttaja_id}`}
        />
      );
    } else if (kirjautunut == "true") {
      return <h2 id="lista">Olet jo kirjautunut sisään.</h2>;
    } else {
      return (
        <div id="lista">
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={2}>
                <label>Käyttäjätunnus: </label>
              </Col>
              <Col xs={6} md={10}>
                <input ref="nick" type="text" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={2}>
                <label>Salasana: </label>
              </Col>
              <Col xs={6} md={10}>
                <input ref="salasana" type="password" required />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <button id="nappi" onClick={this.kirjaudu} type="button">
                  Kirjaudu
                </button>
              </Col>
            </Row>
            <br />
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <Link to="/rekisterointi">Rekisteröi käyttäjätunnus</Link>
              </Col>
            </Row>
          </Grid>
        </div>
        //   <label>Käyttäjätunnus: </label>
        //   <input ref="nick" type="text" />
        //   <br />
        //   <label>Salasana: </label>
        //   <input ref="salasana" type="text" />
        //   <br />
        //   <button id="nappi" onClick={this.kirjaudu} type="button">
        //     Kirjaudu
        //   </button>
        //   <br />
        //   <Link to="/rekisterointi">Rekisteröi käyttäjätunnus</Link>
        // </div>
      );
    }
  }
}

export default Kirjautuminen;
