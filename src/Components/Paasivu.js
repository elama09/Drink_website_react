import React, { Component } from "react";
import { Media } from "react-bootstrap";
import "./Components.css";

// class Paasivu extends Component {
//   render() {
//     return (
//       <div>
//         <Media>
//           <Media.Right>
//             <img
//               width={940}
//               height={400}
//               src="https://www.vintagecellars.com.au/Grapevine-old/spirits/~/media/Blog/images/World-of-Whisky.png"
//             />
//           </Media.Right>
//         </Media>
//       </div>
//     );
//   }
// }

// export default Paasivu;

class Paasivu extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: sessionStorage.getItem("loggedin")
    };
  }

  render() {
    if (this.state.loggedin == "true") {
      return (
        <div>
          <Media>
            <Media.Right>
              <img
                width={940}
                height={400}
                src="https://www.vintagecellars.com.au/Grapevine-old/spirits/~/media/Blog/images/World-of-Whisky.png"
              />
            </Media.Right>
          </Media>
          <br />
          <p id="teksti">
            Tervetuloa Viski&Viini-sivuille! Olet kirjautunut sisään,{" "}
            {sessionStorage.getItem("nick")}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <Media>
            <Media.Right>
              <img
                width={940}
                height={400}
                src="https://www.vintagecellars.com.au/Grapevine-old/spirits/~/media/Blog/images/World-of-Whisky.png"
              />
            </Media.Right>
          </Media>
          <br />
          <p id="teksti">
            Tervetuloa Viski&Viini-sivuille! Kirjaudu sisään, jotta saat
            käyttöösi kaikki palvelut.
          </p>
        </div>
      );
    }
  }
}

export default Paasivu;
