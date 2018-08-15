import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Details from "./Components/Details";
import Paasivu from "./Components/Paasivu";
import Juomat from "./Components/Juomat";
import Juoma from "./Components/Juoma";
import "./App.css";
import NotFound from "./Components/NotFound";
import Lisaauusi from "./Components/Lisaauusi";
import Arvostelut from "./Components/Arvostelut";
import Uusiarvostelu from "./Components/Uusiarvostelu";
import Kayttajat from "./Components/Kayttajat";
import Rekisterointi from "./Components/Rekisterointi";
import Kirjautuminen from "./Components/Kirjautuminen";
import Profiili from "./Components/Profiili";
import Uloskirjautuminen from "./Components/Uloskirjautuminen";
import {
  Grid,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  ButtonToolbar,
  Navbar,
  NavItem,
  Nav,
  Media
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar id="navbar">
          <Navbar.Header>
            <Navbar.Brand className="Navbar">
              Viski&<span className="navbar2">Viini</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem id="testi2" eventKey={1} href="/home">
                Etusivu
              </NavItem>
              <NavItem id="testi2" eventKey={2} href="/juomat">
                Juomat
              </NavItem>
              {/* <NavItem id="testi2" eventKey={2} href="/uusijuoma">
                Lisää juoma
              </NavItem> */}
              <NavItem id="testi2" eventKey={2} href="/kayttajat">
                Käyttäjät
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem id="testi2" eventKey={1} href="/kirjautuminen">
                Login
              </NavItem>
              <NavItem id="testi2" eventKey={2} href="/uloskirjautuminen">
                Logout
              </NavItem>
              <NavItem
                id="testi2"
                eventKey={2}
                href={`/profiili/${sessionStorage.getItem("kayttaja_id")}`}
              >
                Oma
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row id="rivi" className="show-grid">
            <Col id="col" xs={12} md={8}>
              <Router>
                <Switch>
                  <Route exact path="/home" component={Paasivu} />
                  <Route exact path="/juomat" component={Juomat} />
                  <Route exact path="/uusijuoma" component={Lisaauusi} />
                  <Route exact path="/kayttajat" component={Kayttajat} />
                  <Route
                    exact
                    path="/rekisterointi"
                    component={Rekisterointi}
                  />
                  <Route
                    exact
                    path="/kirjautuminen"
                    component={Kirjautuminen}
                  />
                  <Route
                    exact
                    path="/uloskirjautuminen"
                    component={Uloskirjautuminen}
                  />

                  <Route exact path="/profiili/:kid" component={Profiili} />
                  <Route exact path="/details/:id" component={Details} />
                  <Route exact path="/arvostelut/:id" component={Arvostelut} />
                  <Route
                    exact
                    path="/uusiarvostelu/:id"
                    component={Uusiarvostelu}
                  />
                  <Redirect exact from="/" to="/home" />
                  <Route component={NotFound} />
                </Switch>
              </Router>
            </Col>
            <Col xs={6} md={4}>
              <Media>
                <Media.Left>
                  <img
                    width={64}
                    height={64}
                    src="https://images-na.ssl-images-amazon.com/images/I/61%2BgoxTGTSL._SX466_.jpg"
                    // alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading id="testi2" href="/juomat">
                    Viskit
                  </Media.Heading>
                  <p id="testi">
                  Viski on viljasta tislaamalla valmistettu väkevä alkoholijuoma. Viski on peräisin Britteinsaarilta; yleensä sen ajatellaan olevan kotoisin joko Skotlannista tai Irlannista. Säädösten mukaan viskinä voidaan pitää vähintään kolme vuotta vanhennettua 40-prosenttista juomaa. Sana viski (engl. whisky, whiskey) tulee gaelin kielen sanoista uisge beatha tai usquebaugh ’elämän vesi’.
                  </p>
                </Media.Body>
              </Media>
              <Media>
                <Media.Left>
                  <img
                    width={64}
                    height={64}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1mRLI7A8rCcsH89vYS7v1eXFyfBcxhye6NrhuJrXy38iGz-IOg"
                    // alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading id="testi3">Viinit</Media.Heading>
                  <p id="testi">
                  Viini on tuoreista viinirypäleistä tai rypälemehusta käyttämällä valmistettu mieto alkoholijuoma. Viineissä on alkoholia yleensä 10–15 prosenttia, ja niiden alkoholi on yksinomaan käymisteitse muodostunut. Viinejä ovat punaviini, valkoviini ja roseeviini sekä hiilidioksidia sisältävät kuohuviinit.
                  </p>
                </Media.Body>
              </Media>
              <Media>
                <Media.Left>
                  <img
                    width={64}
                    height={64}
                    src="http://media.nola.com/drink_impact/photo/beer-in-pint-glass-fc992eb7bf691ab5.jpg"
                    // alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading id="testi2">Oluet</Media.Heading>
                  <p id="testi">
                  Olut on maltaista, humalista ja vedestä käyttämällä valmistettu alkoholipitoinen mallasjuoma.
Olut on maailman vanhin ja suosituin alkoholijuoma. Maailman yleisin oluttyyppi on vaalea lager, joka on hyvin suosittu myös Suomessa. Olutta on valmistettu varhain eri maanosissa niiden paikallisista kasveista.
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

// class App extends Component {
// state = {
//   login: "kirjautunutulos"
// }

//  updateApp() {
//     let kirjautunut = sessionStorage.getItem('loggedin')
//     if (kirjautunut == "true") {
//       this.setState({ login: "kirjautunutsisaan" });
//     }
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <nav id="Lin">
//             <Link id="Lin1" to="/">
//               Etusivu
//             </Link>
//             <Link id="Lin1" to="/juomat">
//               Juomat
//             </Link>
//             <Link id="Lin1" to="/kayttajat">
//               Käyttäjät
//             </Link>
//             <Link
//               id="Lin1"
//               to={`/profiili/${sessionStorage.getItem("kayttaja_id")}`}
//             >
//               Profiili
//             </Link>
//             <Link id="Lin1" to="/kirjautuminen">
//               Login
//             </Link>

//             <Link id="Lin1" to="/uloskirjautuminen">
//               Logout
//             </Link>
//           </nav>

//           <Switch>
//             <Route exact path="/home" component={Paasivu} />
//             <Route exact path="/juomat" component={Juomat} />
//             <Route exact path="/uusijuoma" component={Lisaauusi} />
//             <Route exact path="/kayttajat" component={Kayttajat} />
//             <Route exact path="/rekisterointi" component={Rekisterointi} />
//             <Route exact path="/kirjautuminen" component={Kirjautuminen} />
//             <Route
//               exact
//               path="/uloskirjautuminen"
//               component={Uloskirjautuminen}
//             />

//             <Route exact path="/profiili/:kid" component={Profiili} />
//             <Route exact path="/details/:id" component={Details} />
//             <Route exact path="/arvostelut/:id" component={Arvostelut} />
//             <Route exact path="/uusiarvostelu/:id" component={Uusiarvostelu} />
//             <Redirect exact from="/" to="/home" />
//             <Route component={NotFound} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
