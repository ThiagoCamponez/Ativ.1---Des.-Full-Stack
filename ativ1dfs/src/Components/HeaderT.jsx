import './HeaderT.css';
function HeaderT() {
    return (
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
    )
}

export default HeaderT;