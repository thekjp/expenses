import "./Header.scss";
import Logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header-contatiner">
        <Link className="header-logo__link" to="/home">
          <div className="header__left">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Header;
