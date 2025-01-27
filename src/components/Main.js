import React from "react";
import Botones from "./Botones";
import data from "./data.json";
import Swal from "sweetalert2";
import Historial from "./Historial";

const ESTADO_INICIAL = {
  contador: 1,
  opcionA: data[0].opciones.a,
  opcionB: data[0].opciones.b,
  historia: data[0].historia,
  historial: [],
  opcionAnterior: "",
  mensajeBienvenida: "Elije tu propia aventura!",
};

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = ESTADO_INICIAL;
  }

  componentDidUpdate(_, prevState) {
    if (!(prevState === null) && this.state.opcionAnterior !== "") {
      this.state.historial.push(this.state.opcionAnterior);
    }
  }

  componentDidMount() {
    this.mostrarMensajeBienvenida();
  }

  mostrarMensajeBienvenida = () => {
    Swal.fire({
      text: this.state.mensajeBienvenida,
      confirmButtonText: "EMPEZAR!",
    });
  };

  mostrarModal = () => {
    Swal.fire({
      title: "Fin de la historia!",
      text: "Hace click para reiniciar",
      icon: "success",
      confirmButtonText: "REINICIAR",
    }).then(() => {
      this.reiniciarHistoria();
    });
  };

  reiniciarHistoria = () => {
    this.setState({
      ...ESTADO_INICIAL,
      historial: [],
      mensajeBienvenida: "Aqui vamos de nuevo..",
    });

    this.mostrarMensajeBienvenida();
  };

  seleccionarOpcion = (boton) => {
    if (this.state.contador >= 5) {
      this.mostrarModal();
    } else {
      const opcion = boton.target.id;
      const identificador = `${this.state.contador + 1}${opcion}`;
      const siguiente = data.find((historia) => historia.id === identificador);
      this.setState({
        contador: this.state.contador + 1,
        opcionA: siguiente.opciones.a,
        opcionB: siguiente.opciones.b,
        historia: siguiente.historia,
        opcionAnterior: opcion,
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia"> {this.state.historia}</h1>
        <div className="opciones">
          <Botones
            evento={this.seleccionarOpcion}
            opcionA={this.state.opcionA}
            opcionB={this.state.opcionB}
          />
        </div>
        <Historial
          historial={this.state.historial}
          opcionAnterior={this.state.opcionAnterior}
        />
      </div>
    );
  }
}
