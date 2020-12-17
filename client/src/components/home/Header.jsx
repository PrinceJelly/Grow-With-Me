import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="home__header header">
      <ul className="home__header__list header__list">
        <Link to="/">
          <li>
            <span className="home__header--container__logo header__container__logo">
              <Icon addClass="home__header__logo header__logo" name="gwmlogo_02-1.svg" />
            </span>
          </li>
        </Link>
        <span className="home__header--container__btn header__container__btn">
          <li className="home__header--item__btn header__item__btn">
            <Link to="/">
              <Button addClass="btn__CTA">Go Back To Home</Button>
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  );
}
