import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer(){

    return(

        <footer className="border-top text-muted bg-light ">
            <div className="container">
                <div className="row py-3">
                    <div className="col-12 col-md-4 text-center text-md-auto">
                        &copy; 2020 - Geek Master

                    </div>
                    <div className="col-12 col-md-4 text-md-auto">
                            <a href="#" className="text-decoration-none text-dark">Politicas de Privacidade</a>
                    </div>

                </div>
            </div>


        </footer>

    )

}