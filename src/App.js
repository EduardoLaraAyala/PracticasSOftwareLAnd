import logo from './logo.svg';
import './App.css';
import Imagen from './components/Imagen'
import Parrafo from './components/Parrafo'
import Titulo from './components/Titulo'

function App() {
  return (
    
    <div className="App" >
      <header className="App-header">
      <Imagen ancho="30rem" ></Imagen>
        <Titulo tipoFuente="arial" tamañoTexto="3rem" color ="#FFFFFF"></Titulo>
        <Parrafo tipoFuente="arial" tamañoTexto="3rem" color ="#000000"></Parrafo>
        
      </header>
    </div>
  );
}

export default App;
