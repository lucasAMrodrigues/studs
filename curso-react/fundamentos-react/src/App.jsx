import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basic/Primeiro";
import ComParametros from "./components/basic/ComParametros";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";


export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="#4 Desafio Aleatório">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#3 Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#2 Com Paramentros">
            <ComParametros
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
                nota={9.3}
            />
        </Card>

        <Card titulo="#1 Primeiro Componente">
            <Primeiro />
        </Card>
    </div>