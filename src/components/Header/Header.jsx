import "./Header.scss";
import Logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header-contatiner">
        <div className="header__left">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </section>
  );
}

export default Header;
