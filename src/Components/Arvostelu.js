import React, { Component } from "react";
import { PoistaArvosteluApista } from "./Palvelu";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Juoma from "./Juoma";
import "./Components.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class Arvostelu extends Component {
  state = {
    redirect: false
  };

  Poista = () => {
    PoistaArvosteluApista(this.props.arvostelu.arvostelu_id);
    this.setState({ redirect: true });
  };

  render() {
    let id = sessionStorage.getItem("kayttaja_id");

    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div id="lista">
          <ListGroup id="marginaali">
            <ListGroupItem>
              {/* <p id="lista">{this.props.arvostelu.juoma_id}</p> */}
              <p id="lista">{this.props.arvostelu.Kayttajat.nick}</p>
              <p id="lista">{this.props.arvostelu.arvosteluteksti}</p>
              <p id="lista">{this.props.arvostelu.pisteet}</p>
            </ListGroupItem>
          </ListGroup>

          {id == 1 ? (
            <div>
              {" "}
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

export default Arvostelu;
