import React from 'react';
import { Container } from 'react-bootstrap';
import Axios from 'axios'
import { useState } from 'react';




export default function Contato(){

    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    const mensagens = () => {
        Axios.post('http://localhost:4000/mensagens',
        {
            nome: nome,
            mensagem: mensagem,
           
        }).then((response) => {
            console.log(response)
        })

    }


    return(
        <main style={{height: "600px"}}>
            <div>
                <div className="container" style={{paddingTop: '20px'}}>
                    <table border="0" width="80%" cellpaddin="10">
                        <tr>
                            <td className="text-center">
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                </svg>
                                <p>geekmaster@geekmaster.com.br</p>
                            
                            </td>
                            <td className="text-center">
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-phone-vibrate" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 3H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
                                    <path fill-rule="evenodd" d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>
                                </svg>
                                <p>11 9999-9999</p>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
                    <div>

                        <p style={{padding: '25px', fontSize: '20px'}} className="text-center"><strong>Envie-nos uma mensagem:</strong></p>
                        <form className="text-center" method="POST" action="/mensagens">
                            <label><strong>Nome:</strong></label>
                            <br/>
                            <input type="text" name="nome" id="nome" style={{width: '400px' }} onChange={(e) => {setNome(e.target.value)}}/>
                            <br/><br/>
                            <label><strong>Mensagem:</strong></label>
                            <br/>
                            <textarea style={{width: '400px'}} onChange={(e) => {setMensagem(e.target.value)}}></textarea>
                            <br/><br/>
                            <input type="button" name="submit" id="submit" value="enviar" className="btn btn-info" onClick={mensagens}/>
                            
                                
                        </form>
                    </div>

    </main>
    )
}