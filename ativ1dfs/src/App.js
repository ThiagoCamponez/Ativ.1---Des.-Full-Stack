import './App.css';
import HeaderT from './Components/HeaderT.jsx';
import Titulo from './Components/Titulo.jsx';
import FooterT from './Components/FooterT.jsx';
import ListaPersonais from './Components/Lista/ListaPersonais.jsx';
function App() {

  const personais=[
    {nome: 'Wesley', especialidade: 'Personal Trainer', cref: '123456'},
    {nome: 'Cristiane', especialidade: 'Personal Trainer', cref: '345678'}]

  return (
    <div>
      <HeaderT/>

      <Titulo/>

      <div className='listaContainer'>
        <ListaPersonais personais={personais}></ListaPersonais>
      </div>

      <FooterT/>
    </div>
  );
}

export default App;
