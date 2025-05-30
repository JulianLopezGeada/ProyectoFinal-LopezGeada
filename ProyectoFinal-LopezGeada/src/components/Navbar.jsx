// import logo from "../assets"; /*AÑADIR LOGO DE LA MARCA*/

function Navbar({ logo, brand, producto }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="logo de la MARCA" />
          {brand}
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/producto1" className="navbar-link">
              {producto}
            </a>
          </li>
          <li className="navbar-item">
            <a href="/producto2" className="navbar-link">
              {producto}
            </a>
          </li>
          <li className="navbar-item">
            <a href="/producto3" className="navbar-link">
              {producto}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
