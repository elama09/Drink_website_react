import React, { Component } from "react";
import { PoistaArvosteluApista } from "./Palvelu";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./Components.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";
const urlHaeArvostelut = "https://viski.azurewebsites.net/api/juomat/";
class ProfiiliArvostelu extends Component {
  state = {
    redirect: false,
    juoma: {}
  };
  componentWillMount() {
    fetch(urlHaeArvostelut)
      .then(result => result.json())
      .then(data => {
        for (let index = 0; index < data.length; index++) {
          var kid = this.props.arvostelu.juoma_id;
          if (kid === data[index].juoma_id) {
            this.setState({ juoma: data[index] });
          }
        }
      });
  }

  Poista = () => {
    this.props.poista(this.props.arvostelu.arvostelu_id);
    PoistaArvosteluApista(this.props.arvostelu.arvostelu_id);
  };

  render() {
    let id = sessionStorage.getItem("kayttaja_id");

    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div>
          <ListGroup id="marginaali">
            <ListGroupItem>
              {/* <p id="lista">{this.props.arvostelu.juoma_id}</p> */}
              <p id="lista">
                <b>Juoma:</b> {this.state.juoma.nimi}
              </p>
              <p id="lista">
                <b>Kategoria:</b> {this.state.juoma.kategoria}
              </p>
              <p id="lista">
                <b>Valmistaja:</b> {this.state.juoma.valmistaja}
              </p>
              <p id="lista">
                <b>Arvostelu:</b> {this.props.arvostelu.arvosteluteksti}
              </p>
              <p id="lista">
                <b>Pisteet:</b> {this.props.arvostelu.pisteet}
              </p>
            </ListGroupItem>
          </ListGroup>

          {id == 1 || id == this.props.arvostelu.kayttaja_id ? (
            <div>
              <button id="nappi" onClick={this.Poista} type="button">
                Poista arvostelu
              </button>
            </div>
          ) : (
            <br />
          )}
        </div>
      );
    }
  }
}

export default ProfiiliArvostelu;
