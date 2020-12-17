import Menu from "../sidebar/Menu";
import Calendar from "./Calendar";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="home">
      <Header />
      {/* there's a part here, where i will be implement a side bar that takes props depending on which month has been selected*/}
      <div className="home__main-container">
        <Menu />
        <Calendar />
      </div>
      <Footer />
    </main>
  );
}
//i'll ask about 1 component whereas the rest of the page stays static while the menu bar reloads new data by a button click
