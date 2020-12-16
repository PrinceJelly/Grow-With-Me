import ProgressExampleActive from "../utils/progressBar";
export default function MainMenu() {
  return (
    <aside className="main-menu">
      <section className="main-menu__pet-container__main">
        <span className="main-menu__pet-container">
          <ProgressExampleActive />
        </span>
      </section>
      <section></section>
    </aside>
  );
}
