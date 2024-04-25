import './Pesquisa.css';
import Button from './ButtonT.jsx';

function Pesquisa() {
    return ( 
        <form class="form">
          <input type="text" class="input" placeholder="Pesquise os personais disponíveis"/>
          <Button rotulo="Pesquisar"></Button>
          <Button rotulo="Limpar" tipo="limpar"></Button>
        </form>
     );
}

export default Pesquisa;