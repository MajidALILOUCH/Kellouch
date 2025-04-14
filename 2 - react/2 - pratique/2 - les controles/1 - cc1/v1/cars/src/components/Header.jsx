import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">AutoPremium</div>
      <nav>
        <a href="#accueil">Accueil</a>
        <a href="#catalogue">Catalogue</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
