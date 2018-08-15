import React, { Component } from "react";
import Arvostelu from "./Arvostelu";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./Components.css";

const urlHaeArvostelut = "https://viski.azurewebsites.net/api/arvosteluts/";
var kaikkiArvostelut = [];

class Details extends Component {
  constructor({ match }) {
    super();
    this.state = {
      urlid: match.params.id,
      arvostelut: []
    };
  }

  componentDidMount() {
    this.HaeJuomanArvostelut();
  }

  HaeJuomanArvostelut = () => {
    fetch(urlHaeArvostelut + this.state.urlid)
      .then(result => result.json())
      .then(data => {
        kaikkiArvostelut = data;
        this.setState({ arvostelut: data });
      });
  };

  render() {
    let kaikki = this.state.arvostelut.map(x => {
      return <Arvostelu key={x.arvostelu_id} arvostelu={x} />;
    });

    let kirjautunut = sessionStorage.getItem("loggedin");

    return (
      <div>
        <h2 id="lista">Juoman arvostelut</h2>

        {kirjautunut == "true" ? (
          <div id="lista">
            &#9998;{" "}
            <Link id="linkit" to={`/uusiarvostelu/${this.state.urlid}`}>
              Arvostele juoma
            </Link>
          </div>
        ) : (
          <br />
        )}

        {kaikki}
      </div>
    );
  }
}

export default Details;
