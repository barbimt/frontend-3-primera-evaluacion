import React from "react";

export default class Botones extends React.Component {
  render() {
    return (
      <div className="opcion">
        <button id="a" className="botones" onClick={this.props.evento}>
          A
        </button>
        <p>{this.props.opcionA}</p>

        <button id="b" className="botones" onClick={this.props.evento}>
          B
        </button>
        <p>{this.props.opcionB}</p>
      </div>
    );
  }
}
