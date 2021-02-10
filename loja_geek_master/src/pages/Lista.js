import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';



export default function Lista() {

    return(

        <ListGroup className="mt-3 p-4 ">
            <ListGroupItem className="text-center bg-info text-white">Todas</ListGroupItem>
            <ListGroupItem className="text-center bg-info text-white" >Action Figures</ListGroupItem>
            <ListGroupItem className="text-center bg-info text-white">Canecas</ListGroupItem>
            <ListGroupItem className="text-center bg-info text-white"> Relógios</ListGroupItem>
        </ListGroup>
    )
}