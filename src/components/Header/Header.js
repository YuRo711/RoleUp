import "./Header.css";
import banner from "../../images/banner 1.jpg";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const {texts} = props;

  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo"
          src={logo}
          alt="roleup logo"
        />
        <h2 className="header__logo-title">RoleUp</h2>
      </div>
      {
        props.isOnMobile ?
          <button className="header__button"
            onClick={() => props.setMenuOpen(!props.isMenuOpen)}
          />
        :
          <nav className="header__links">
          {
            texts.links.map((link, i) => 
              <NavLink className="header__link"
                to={link.url} key={`link-${i}`}
              >
                {link.text}
              </NavLink>
            )
          }
          </nav>
      }
    </header>
  );
}