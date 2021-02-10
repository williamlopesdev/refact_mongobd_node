import './Produto.css'
import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default function Produto(props) {

    function show_info(event){
        const target = event.currentTarget;
        const element = target.getElementsByTagName("figcaption")[0];
        element.style.visibility = "initial";
    }

    function hide_info(event){
        const target = event.currentTarget;
        const element = target.getElementsByTagName("figcaption")[0];
        element.style.visibility = "hidden";
    }

    return(
    <div className="col-x1-2 col-lg-3 col-md-4 col-sm-6 f-flex align-items-stretch">
      <Card>
        <CardImg width="50%" src={require(`./img/${props.imagem}`).default} />
        <CardBody>
          <CardTitle tag="h5">{props.categoria}</CardTitle>
          <CardText>{props.descricao}</CardText>
          <CardText>R$ {props.preco_unitario}</CardText>
          <Button>Comprar</Button>
        </CardBody>
      </Card>
    </div>
    

    )
}