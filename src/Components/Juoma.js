import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Details from "./Details";
import ReactDOM from "react-dom";
import { PoistaJuomaApista } from "./Palvelu";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./Components.css";

class Juoma extends Component {
  constructor() {
    super();
    this.state = {};
  }

  PoistaJuomaListalta = () => {
    this.props.PoistaJuomaListalta(this.props.juoma.juoma_id);
    PoistaJuomaApista(this.props.juoma.juoma_id);
  };
  render() {
    return (
      <div id="lista">
        <ListGroup>
          <ListGroupItem header="Nimi:">{this.props.juoma.nimi}</ListGroupItem>
          <ListGroupItem header="Valmistaja">
            {this.props.juoma.valmistaja}
          </ListGroupItem>
          <ListGroupItem header="Kategoria">
            {this.props.juoma.kategoria}
          </ListGroupItem>
          <ListGroupItem header="Hinta">
            {this.props.juoma.hinta}€
          </ListGroupItem>
        </ListGroup>
        <p id="linkit">
          &#9998;{" "}
          <Link to={`/details/${this.props.juoma.juoma_id}`}>Lisätietoja</Link>&nbsp;
          &#9998;{" "}
          <Link to={`/arvostelut/${this.props.juoma.juoma_id}`}>
            {"  "}
            Arvostelut
          </Link>
        </p>
      </div>
    );
  }
}

export default Juoma;

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
// import Details from './Details';
// import ReactDOM from 'react-dom';
// import {PoistaJuomaApista} from './Palvelu'

// class Juoma extends Component {
//     constructor() {
//         super();
//         this.state = {}
//     }

//     PoistaJuomaListalta = () => {
//         this.props.PoistaJuomaListalta(this.props.juoma.juoma_id)
//         PoistaJuomaApista(this.props.juoma.juoma_id)
//     }

//     render() {
//         return (<div>
//             <li>Nimi: {this.props.juoma.nimi}</li>
//             <li>Valmistaja: {this.props.juoma.valmistaja}</li>
//             <li>Kategoria: {this.props.juoma.kategoria}</li>
//             <li>Hinta: {this.props.juoma.hinta}€</li>

//             <Link to={`/details/${this.props.juoma.juoma_id}`}>Details</Link>
//             <Link to={`/arvostelut/${this.props.juoma.juoma_id}`}>Näytä arvostelut</Link>
//             <hr />
//         </div>)
//     }
// }
