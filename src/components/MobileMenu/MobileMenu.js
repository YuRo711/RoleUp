import { NavLink } from "react-router-dom";
import "./MobileMenu.css";

function MobileMenu(props) {
  const { texts } = props;

  return (
    <div className={`menu ${props.isMenuOpen ? " menu__opened" : ""}`}>
      <div className="menu__container">
        <div className="menu__main">
          <nav className="menu__nav">
            {
              texts.links.map((link, i) => 
                <NavLink className="header__link" 
                  to={link.url} key={`link-${i}`}
                >
                  {link.text}
                </NavLink>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;