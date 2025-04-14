import React from "react";
import dice1 from "./images/dice1.jpg";
import dice2 from "./images/dice2.jpg";
import dice3 from "./images/dice3.jpg";
import dice4 from "./images/dice4.jpg";
import dice5 from "./images/dice5.jpg";
import dice6 from "./images/dice6.jpg";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  // This method simulates rolling a dice and sets the face
  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1; // Random value between 1 and 6
    this.setState((prevState) => {
      const fin = valeur === this.props.cache; // The game ends when the rolled face equals "cache"
      return {
        face: valeur,
        compteur: prevState.compteur + 1,
        fin: fin,
      };
    });
  }

  // This method returns the image path for the rolled face
  getImage() {
    const { face } = this.state;
    // Map face numbers to their corresponding image
    const images = [dice1, dice2, dice3, dice4, dice5, dice6];
    return face ? images[face - 1] : "images/Dé.PNG"; // Default image if no face is rolled
  }

  // Reset the game to its initial state
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const { face, compteur, fin } = this.state;
    const styleImage = { width: "60px", height: "60px" };

    return (
      <div>
        <img src={this.getImage()} style={styleImage} alt="dice face" />
        <h1>Jeu de Dé...</h1>
        <h2>Face: {face !== null ? face : "Aucune"}</h2>
        <h2>Nombre d&apos;essais: {compteur}</h2>
        <button onClick={() => this.jouer()} disabled={fin}>
          Jouer
        </button>
        {fin && (
          // eslint-disable-next-line react/prop-types
          <p>Bravo, vous avez trouvé la face cachée ({this.props.cache})!</p>
        )}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
