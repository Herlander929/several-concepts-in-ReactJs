import './App.css'
import React from 'react'

import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParouImpar from './components/condicional/ParouImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Aleartorio from './components/basicos/Aleartorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'



export default () => (

    <div className="App">
        <h1>Fundamentos React 2</h1>

        <div className="Cards">
        <Card titulo="#10 Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
                

            </Card>
            <Card titulo="#09 Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
                

            </Card>
        <Card titulo="#08 Renderiazação Condicional" color="#982395">
                <ParouImpar numero={20}></ParouImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>

            </Card>

        <Card titulo="#07 Desafio Repetição" color="#FF432E">
                <TabelaProdutos></TabelaProdutos>

            </Card>

            <Card titulo="#06 Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>

            </Card>
            <Card titulo="#05 Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">

                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />

                </Familia>

            </Card>

            <Card titulo="#04 Desafio Aleartório" color="#FA6900">
                <Aleartorio min={10} max={60} />
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>


            <Card titulo="#02 Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota={8.7} />
            </Card>

            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)
