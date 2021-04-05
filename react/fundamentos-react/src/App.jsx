import React from "react";
import './App.css'

import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basic/FamiliaMembro'
import Familia from "./components/basic/Familia"
import Card from "./components/layout/Card";
import Primeiro from "./components/basic/Primeiro";
import ComParametros from "./components/basic/ComParametros";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";

export default _ =>
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card titulo="#11 Componente Controlado" color="#be833b">
                <Input>

                </Input>
            </Card>
            <Card titulo="#10 Comunicação Indireta" color="#959595">
                <IndiretaPai>

                </IndiretaPai>
            </Card>
            <Card titulo="#9 Comunicação Direta" color="#883388">
                <DiretaPai>

                </DiretaPai>
            </Card>
            <Card titulo="#8 Condicional" color="#888833">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Lucas' }} />
            </Card>
            <Card titulo="#7 Desafio Repetição" color="#776555">
                <TabelaProdutos>

                </TabelaProdutos>
            </Card>
            <Card titulo="#6 Retição" color="#990055">
                <ListaAlunos>

                </ListaAlunos>
            </Card>

            <Card titulo="#5 Componente com Filhos" color="#002299">
                <Familia sobreNome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Maria" />
                </Familia>
            </Card>

            <Card titulo="#4 Desafio Aleatório" color="#009999">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#3 Fragmento" color="#ff9999">
                <Fragmento />
            </Card>

            <Card titulo="#2 Com Paramentros" color="#6666ff">
                <ComParametros
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#1 Primeiro Componente" color="#80cc33">
                <Primeiro />
            </Card>
        </div>
    </div>