import { Link } from "react-router-dom";
import Icon from "../resuable/React-Svg-Library";
import Footer from "../home/Footer";
import Header from "./Header";
import Button from "../resuable/Button";
export default function Calender() {
  return (
    <main className="hero">
      <Header />
      <section className="hero__container">
        <Icon name="gwmlogo_1.svg" />
      </section>
      <Link to="/home">
        <span className="btn__start__container">
          <p className="btn__start__txt">Start Now!</p>
          <Button addClass="btn__start" />
        </span>
      </Link>
      <Footer />
    </main>
  );
}
