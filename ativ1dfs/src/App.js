import './App.css';

function App() {
  return (
    <div>
      <header id="header" class="header">
            <h1 class="logo">Academia Estética</h1>
          <nav id="navmenu" class="navmenu">
            <ul class="nav-list">
              <li class="nav-item"><a href="#header" class="nav-link">Principal</a></li>
              <li class="nav-item"><a href="#header" class="nav-link">Sobre nós</a></li>
              <li class="nav-item"><a href="#header" class="nav-link">Serviços</a></li>
            </ul>
          </nav>
      </header>

      <main class="main">
          
        <h1 class="myh1">Bem-vindo ao nosso site!</h1>
        <p class="text">Na busca pela sua melhor versão, você está no lugar certo, Academia Estética!</p>
        <form class="form">
          <input type="text" class="input" placeholder="Pesquise os personais disponíveis"/>
          <button type="submit" class="btn">Pesquisar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
