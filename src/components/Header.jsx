import Logo from "../images/rick-and-morty.svg";
import "../scss/components/Header.scss";

function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="logo de la serie Ricky and Morty" />
    </header>
  );
}

export default Header;
