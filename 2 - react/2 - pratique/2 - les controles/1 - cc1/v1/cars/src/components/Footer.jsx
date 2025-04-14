import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contactez-nous</h3>
          <p>Email: contact@autopremium.fr</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
          <p>Showroom: 123 Avenue des Champs-Élysées, Paris</p>
        </div>
        
        <div className="footer-section">
          <h3>Nos Services</h3>
          <ul>
            <li>Reprise de véhicules</li>
            <li>Financement personnalisé</li>
            <li>Garantie premium</li>
            <li>Service après-vente</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 AutoPremium - Le meilleur des véhicules d'occasion</p>
      </div>
    </footer>
  );
}

export default Footer;
