import React, { useState, useEffect } from 'react';

import Produto from '../Components/Produto';
import { Container, Row } from 'react-bootstrap';
import Example from '../Components/Produto/carrossel'

import Busca from './busca'
import Lista from './Lista'
import contato from './Contato'



export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost:4000/mensagens")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);

    return(
        <Container>
                  <Example className="mx-auto"></Example>
                  <Lista></Lista>
                  <Busca></Busca>
                

            <Row>
                {Produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao} preco_unitario={item.preco_unitario} categoria={item.categoria} preco_total={item.preco_total}/>)}
            </Row>
        </Container>
    )
}



