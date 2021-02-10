import {useState} from 'react';
import { Form, Button, Row } from 'react-bootstrap';

export default function Pedidos() {

    const [ form, setForm ] = useState({
        nome: "",
        endereco: "",
        telefone: "",
        produto: "",
        valor_unitario: "",
        quantidade: "",
        valor_total: "",

    });

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        const valor_total = parseFloat(form.valor_unitario) * parseFloat(form.quantidade);
        document.getElementById("valor_total").value = `R$ ${valor_total}`;

        const json = JSON.stringify(form);
        const opcoes = {
            method: 'POST',
        headers: { 'content-type': 'application/json', "Access-Control-Allow-Origin":"*" },
            body: json
        }

        const resposta = await fetch("http://localhost/API/api/cadastro_produtos.php", opcoes);
        const dados = await resposta.json()
        console.log(dados);

    }

    return(  
        <Row>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer Pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor_unitario" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control disabled type="text" id="valor_total" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
            </Button>
                </Form>
            </div>
        </Row>
    ); 
}