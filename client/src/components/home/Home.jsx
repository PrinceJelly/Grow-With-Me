import Menu from "../sidebar/Menu";
import Calendar from "./Calendar";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <div className="home__main-container">
        <Menu />
        <Calendar />
      </div>
      <Footer />
    </main>
  );
}
