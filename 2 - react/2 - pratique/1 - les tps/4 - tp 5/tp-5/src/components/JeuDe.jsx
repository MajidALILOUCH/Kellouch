import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null,
      compteur: 0,
      fin: false,
    };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === this.props.cache,
    }));
  }

  getImage() {
    if (this.state.face) {
      return `images/face${this.state.face}.png`;
    }
    return null;
  }

  initialiser() {
    this.setState({
      face: null,
      compteur: 0,
      fin: false,
    });
  }

  render() {
    const styleImage = { width: "60px", height: "60px" };
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Jeu de Dé</h1>
        {this.state.face && (
          <img
            src={this.getImage()}
            alt={`Face ${this.state.face}`}
            style={styleImage}
          />
        )}
        <h2>Face: {this.state.face || "Aucune"}</h2>
        <h2>Nombre d&apos;essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Jouer</button>
        {this.state.fin && (
          <div>
            <p>Bravo, vous avez trouvé la face cachée ({this.props.cache})!</p>
            <button onClick={() => this.initialiser()}>Initialiser</button>
          </div>
        )}
      </div>
    );
  }
}
