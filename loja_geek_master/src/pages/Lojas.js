import React from 'react';

import { Container } from 'react-bootstrap';


export default function Lojas(){

    return(

        <main style={{height: '600px'}}>
            <h3 style={{paddingLeft: '575px'}}>Nossas Lojas</h3>
        <div className="container" style={{paddingTop: '70px'}}>
            <table border="0" width="100%" cellpaddin="20">
                <tr>
                    <td>
                        <h3>São Paulo-SP</h3>
                        <p>Avenida Paulista, 1800</p>
                        <p>2 º andar</p>
                        <p>Bela Vista</p>
                        <p>11 9999-9999</p>
                    </td>
                    <td>
                        <h3>Belo horizonte-MG</h3>
                        <p>Senador Braga, 130</p>
                        <p>Térreo</p>
                        <p>Boa Esperança</p>
                        <p>11 9999-9999</p>
                    </td>
                    <td>
                        <h3>Porto Alegre-RS</h3>
                        <p>Rio Doce, 1920</p>
                        <p>5 º andar</p>
                        <p>Cocal</p>
                        <p>11 9999-9999</p>
                    </td>

                </tr>
            </table>
            

        </div>

    </main>
    )
}
