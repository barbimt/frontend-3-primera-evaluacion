(this["webpackJsonpctd-frontend3-primer-evaluacion"]=this["webpackJsonpctd-frontend3-primer-evaluacion"]||[]).push([[0],{18:function(e,a,o){},30:function(e,a,o){"use strict";o.r(a);var i=o(1),n=o.n(i),s=o(13),t=o.n(s),r=(o(18),o(10)),c=o(2),d=o(3),l=o(5),u=o(4),p=o(0),h=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){return Object(c.a)(this,o),a.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"opciones",children:[Object(p.jsxs)("div",{className:"opcion",children:[Object(p.jsx)("button",{id:"a",className:"botones",onClick:this.props.evento,children:"A"}),Object(p.jsx)("h2",{children:this.props.opcionA})]}),Object(p.jsxs)("div",{className:"opcion",children:[Object(p.jsx)("button",{id:"b",className:"botones",onClick:this.props.evento,children:"B"}),Object(p.jsx)("h2",{children:this.props.opcionB})]})]})}}]),o}(n.a.Component),b=o(6),m=o(9),j=o.n(m),v=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){return Object(c.a)(this,o),a.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"recordatorio",children:[Object(p.jsxs)("h3",{children:["Selecci\xf3n anterior: ",this.props.opcionAnterior.toUpperCase()]}),Object(p.jsx)("h4",{children:"Historial de opciones elegidas: "}),Object(p.jsx)("ul",{children:this.props.historial.map((function(e,a){return Object(p.jsx)("li",{children:e.toUpperCase()},a)}))})]})}}]),o}(n.a.Component),O={contador:1,opcionA:b[0].opciones.a,opcionB:b[0].opciones.b,historia:b[0].historia,historial:[],opcionAnterior:"",mensajeBienvenida:"Elije tu propia aventura!"},y=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){var e;return Object(c.a)(this,o),(e=a.call(this)).mostrarMensajeBienvenida=function(){j.a.fire({text:e.state.mensajeBienvenida,confirmButtonText:"EMPEZAR!"})},e.mostrarModal=function(){j.a.fire({title:"Fin de la historia!",text:"Hace click para reiniciar",icon:"success",confirmButtonText:"REINICIAR"}).then((function(){e.reiniciarHistoria()}))},e.reiniciarHistoria=function(){e.setState(Object(r.a)(Object(r.a)({},O),{},{historial:[],mensajeBienvenida:"Aqui vamos de nuevo.."})),e.mostrarMensajeBienvenida()},e.seleccionarOpcion=function(a){if(e.state.contador>=5)e.mostrarModal();else{var o=a.target.id,i="".concat(e.state.contador+1).concat(o),n=b.find((function(e){return e.id===i}));e.setState({contador:e.state.contador+1,opcionA:n.opciones.a,opcionB:n.opciones.b,historia:n.historia,opcionAnterior:o})}},e.state=O,e}return Object(d.a)(o,[{key:"componentDidUpdate",value:function(e,a){null!==a&&""!==this.state.opcionAnterior&&this.state.historial.push(this.state.opcionAnterior)}},{key:"componentDidMount",value:function(){this.mostrarMensajeBienvenida()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"layout",children:[Object(p.jsxs)("h1",{className:"historia",children:[" ",this.state.historia]}),Object(p.jsx)("div",{className:"opciones",children:Object(p.jsx)(h,{evento:this.seleccionarOpcion,opcionA:this.state.opcionA,opcionB:this.state.opcionB})}),Object(p.jsx)(v,{historial:this.state.historial,opcionAnterior:this.state.opcionAnterior})]})}}]),o}(n.a.Component);var f=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(y,{})})};t.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":"1","historia":"Un d\xeda como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.","opciones":{"a":"Pedir ayuda a los gritos.","b":"Mirar a mi alrededor."}},{"id":"2a","historia":"Instant\xe1neamente entras en p\xe1nico por lo bizarro de la situaci\xf3n y gritas: -Aiiudaaaa. Nadie responde. Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"2b","historia":"Miras a tu alrededor y ves solo \xe1rboles, plantas y hongos, Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"3a","historia":"Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"3b","historia":"Al levantarte ves que se mueve y empieza a correr hacia vos, no distingu\xeds que \xe9s pero sal\xeds corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"4a","historia":"Paras de correr y al darte vuelta con algo de miedo ves que lo que te persegu\xeda se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"4b","historia":"El miedo no deja tu cuerpo y hace bien as\xed que segu\xeds corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te persegu\xeda, lo que ves es rid\xedculo, un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"5a","historia":"Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-se\xf1ora se cansa de vos y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN.","b":"FIN."}},{"id":"5b","historia":"Por alguna raz\xf3n decid\xeds ponerte a bailar, el oso-se\xf1ora no entiende porqu\xe9, los animales del bosque no entienden porqu\xe9, yo que escribo esto no entiendo porqu\xe9, nadie entiende porqu\xe9. El oso-se\xf1ora se cansa de tu bailecito y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN","b":"FIN"}}]')}},[[30,1,2]]]);
//# sourceMappingURL=main.264b7b97.chunk.js.map