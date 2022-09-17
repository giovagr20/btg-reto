import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListaFondos } from './components/lista-fondos';
import { Navbar } from './components/_layouts/navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<ListaFondos />} />
        </Routes>
      </BrowserRouter>
    </>
      );
    }
/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );*/


export default App;
