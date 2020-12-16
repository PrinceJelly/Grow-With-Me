import Icon from "../resuable/React-Svg-Library";
export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__icon-container">
        <Icon addClass="footer__icon-container__item" name="github.svg" />
        <Icon addClass="footer__icon-container__item" name="instagram.svg" />
        <Icon addClass="footer__icon-container__item" name="linkedin.svg" />
      </span>
    </footer>
  );
}
