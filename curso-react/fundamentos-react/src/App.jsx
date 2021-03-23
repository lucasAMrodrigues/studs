import React from "react";

import Primeiro from "./components/basic/Primeiro";
import ComParametros from "./components/basic/ComParametros";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={60} />
        <Fragmento /> 
        <ComParametros
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
        />
        <Primeiro />
    </div>