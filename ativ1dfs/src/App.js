import './App.css';
import HeaderT from './Components/HeaderT.jsx';
function App() {
  return (
    <div>
      <HeaderT/>

      <main class="main">
          
        <h1 class="myh1">Bem-vindo ao nosso site!</h1>
        <p class="text">Na busca pela sua melhor versão, você está no lugar certo, Academia Estética!</p>
        <form class="form">
          <input type="text" class="input" placeholder="Pesquise os personais disponíveis"/>
          <button type="submit" class="btn">Pesquisar</button>
        </form>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="#footer"><img src="./logo-twitter.jpg" alt="Twitter" /></a>
          <a href="#footer"><img src="./logo-facebook.jpg" alt="Facebook" /></a>
          <a href="#footer"><img src="./logo-instagram.jpg" alt="Instagram" /></a>
        </div>
        <br />
        <p class="footer-line">© Copyright Thiago Camponêz All Rights Reserved Designed by Academia Estética.</p>
      </footer>



    </div>
  );
}

export default App;
