import React from "react";
import Botones from "./components/Botones";

import data from "./components/data.json";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 1,
      opcionA: data[0].opciones.a,
      opcionB: data[0].opciones.b,
      historia: data[0].historia,
    };
  }

  seleccionarOpcion = (boton) => {
    const opcion = boton.target.id;
    const id = `${this.state.contador + 1}${opcion}`;
    const siguiente = data.find((historia) => historia.id === id);
    console.log(
      "-opcion: " + opcion + " -id: " + id + " -a mostrar: " + siguiente
    );
    this.setState({
      contador: this.state.contador + 1,
      opcionA: siguiente.opciones.a,
      opcionB: siguiente.opciones.b,
      historia: siguiente.historia,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="historia"> {this.state.historia}</h1>
        <div className="opciones">
          <Botones
            evento={this.seleccionarOpcion}
            opcionA={this.state.opcionA}
            opcionB={this.state.opcionB}
          />
        </div>
      </div>
    );
  }
}
