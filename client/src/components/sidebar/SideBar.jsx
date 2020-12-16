import Button from "../resuable/Button";
import AddNewEntry from "../sidebar/menu-pages/AddNewEntry";
import Goals from "../sidebar/menu-pages/Goals";
import Stats from "../sidebar/menu-pages/Stats";
import React, { useState } from "react";

export default function SideBar({ setShowing, showing }) {
  const [newEntryPage, newEntryShowing] = useState(false);
  const [goalsPage, goalsPageShowing] = useState(false);
  const [statsPage, statsPageShowing] = useState(false);

  const handleShowing = (event) => {
    if (event.target.id === "newEntryShowing") {
      newEntryShowing(true);
      goalsPageShowing(false);
      statsPageShowing(false);
    }
    if (event.target.id === "goalsPageShowing") {
      newEntryShowing(false);
      goalsPageShowing(true);
      statsPageShowing(false);
    }
    if (event.target.id === "statsPageShowing") {
      newEntryShowing(false);
      goalsPageShowing(false);
      statsPageShowing(true);
    }
  };

  return (
    <aside className="menu__page">
      <section className="menu__items">
        {newEntryPage ? <AddNewEntry newPageShowing={newEntryShowing} /> : ""}
        {goalsPage ? <Goals newPageShowing={goalsPageShowing} /> : ""}
        {statsPage ? <Stats newPageShowing={statsPageShowing} /> : ""}
      </section>

      <ul className="menu__list">
        <li className="menu__list_item">
          <Button addClass="btn__next" id="newEntryShowing" handleClick={handleShowing}>
            Add a new entry
          </Button>
        </li>
        <li className="menu__list_item">
          <Button addClass="btn__next" id="goalsPageShowing" handleClick={handleShowing}>
            My goals
          </Button>
        </li>
        <li className="menu__list_item">
          <Button addClass="btn__next" id="statsPageShowing" handleClick={handleShowing}>
            Stats
          </Button>
        </li>
      </ul>
    </aside>
  );
}
