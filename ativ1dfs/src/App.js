import './App.css';
import HeaderT from './Components/HeaderT.jsx';
import Titulo from './Components/Titulo.jsx';
import FooterT from './Components/FooterT.jsx';
import ListaPersonais from './Components/Lista/ListaPersonais.jsx';
function App() {
  return (
    <div>
      <HeaderT/>

      <Titulo/>

      <div className='listaContainer'><ListaPersonais/></div>

      <FooterT/>


    </div>
  );
}

export default App;
