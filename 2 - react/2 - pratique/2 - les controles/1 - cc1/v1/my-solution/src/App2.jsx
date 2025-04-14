import React, { Component } from "react";

class ListeSujets extends Component {
  constructor(props) {
    super(props);
    this.sujets = ["sujet 1", "sujet 2", "sujet 3", "sujet 4"];
    this.state = {
      sujetsAleatoire: this.melangerSujets([...this.sujets]),
    };
  }

  melangerSujets(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    return (
      <div>
        <ul>
          {[1, 2, 3, 4].map((numGrp, index) => {
            <li key={index}>
              groupe {numGrp} {this.state.sujetsAleatoire[index]}
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListeSujets;
