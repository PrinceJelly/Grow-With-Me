import Menu from "../sidebar/Menu";
import Calender from "../home/Calender";
export default function Home() {
  return (
    <main>
      {/* there's a part here, where i will be implement a side bar that takes props depending on which month has been selected*/}
      <h1>Grow With Me.</h1>
      <Calender />
      <Menu />
    </main>
  );
}
//i'll ask about 1 component whereas the rest of the page stays static while the menu bar reloads new data by a button click
