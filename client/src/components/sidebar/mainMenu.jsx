import ProgressExampleActive from "../utils/progressBar";
import pinPin from "../../assets/img/pinpng1.png";
import { getAllGoals } from "../utils/Axios";
import { useEffect, useState } from "react";
export default function MainMenu() {
  const [goalAPI, setGoals] = useState(null);
  useEffect(() => {
    getAllGoals().then((res) => setGoals(res));
  }, []);
  return (
    <aside className="main-menu">
      <section className="main-menu__pet--container__main">
        <span className="main-menu__pet--container">
          <span className="main-menu__pet__container">
            <img className="main-menu__pet--img" src={pinPin} />
          </span>
          <h1 className="main-menu__title">My Goal: School</h1>
          <h2 className="main-menu__pet--name">Pet name: George</h2>
          <ProgressExampleActive />
        </span>
      </section>
      <section className="main-menu__more">
        {goalAPI &&
          goalAPI.map((renderGoals) => {
            const { id, myGoal, goal } = renderGoals;
            return (
              <div className="main-menu__more--this" key={id}>
                <span className="main-menu__more--container">
                  <p className="main-menu__more--of-this">My Goal: {myGoal}</p>
                </span>
                <div className="main-menu__more--container--mod">
                  <p className="main-menu__more--of">
                    Make ${goal} + contributions towards your goal!
                  </p>
                </div>
              </div>
            );
          })}
      </section>
    </aside>
  );
}
