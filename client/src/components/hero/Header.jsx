import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <ul className="header__list">
        <Link to="/">
          <li>
            <span className="header__container__logo">
              <Icon addClass="header__logo" name="gwmlogo_02-1.svg" />
            </span>
          </li>
        </Link>
        <span className="header__container__links">
          <Link className="header__item__link" to="/">
            <li className="header__item">Welcome</li>
          </Link>
          <Link className="header__item__link" to="#">
            <li className="header__item">About</li>
          </Link>
          <Link className="header__item__link" to="#">
            <li className="header__item">Contact</li>
          </Link>
        </span>
        <span className="header__container__btn">
          <li className="header__item__btn">
            <Link to="/home">
              <Button addClass="btn__CTA">Get started Now</Button>
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  );
}
