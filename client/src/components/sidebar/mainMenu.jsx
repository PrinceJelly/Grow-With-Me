import React, { useState, useEffect } from "react";
import { getAllGoals } from "../utils/Axios";
import Cards from "./mainMenu_Comp/Cards";

export default function MainMenu() {
  const [goalAPI, setGoals] = useState(null);

  useEffect(() => {
    getAllGoals().then((res) => setGoals(res));
  }, []);

  return (
    <article>
      {goalAPI &&
        goalAPI.map((goalData) => {
          return (
            <ul>
              <Cards goalData={goalData} key={goalData.id} />
            </ul>
          );
        })}
    </article>
  );
}
