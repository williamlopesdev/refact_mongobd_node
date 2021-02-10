import Menu from './Components/Menu'
import Rotas from './rotas'
import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import './text.css'
import Footer from './pages/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
            <Container fluid>
              <Rotas />
            </Container>

        </main>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </BrowserRouter> 
  );
}

export default App;