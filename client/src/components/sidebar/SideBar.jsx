import Button from "../resuable/Button";
import AddNewEntry from "../sidebar/menu-pages/AddNewEntry";
import Goals from "../sidebar/menu-pages/Goals";
import Stats from "../sidebar/menu-pages/Stats";
import React, { useState } from "react";
import ClockComp from "../utils/Clock";

export default function SideBar() {
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

    if (event.target.id === "closeMenu") {
      newEntryShowing(false);
      goalsPageShowing(false);
      statsPageShowing(false);
    }
  };

  return (
    <aside className="side-bar__content">
      <section className="side-bar__pages">
        <ClockComp />
        {newEntryPage ? <AddNewEntry newPageShowing={newEntryShowing} /> : ""}
        {goalsPage ? <Goals newPageShowing={goalsPageShowing} /> : ""}
        {statsPage ? <Stats newPageShowing={statsPageShowing} /> : ""}
      </section>

      <ul className="side-bar__list">
        <li id="closeMenu">
          <Button addClass="btn__next" id="closeMenu" handleClick={handleShowing}>
            Menu
          </Button>
        </li>
        <li className="side-bar__list__item">
          <Button addClass="btn__next" id="newEntryShowing" handleClick={handleShowing}>
            add new entry
          </Button>
        </li>
        <li className="side-bar__list__item">
          <Button addClass="btn__next" id="goalsPageShowing" handleClick={handleShowing}>
            My goals
          </Button>
        </li>
        <li className="side-bar__list__item">
          <Button addClass="btn__next" id="statsPageShowing" handleClick={handleShowing}>
            Stats
          </Button>
        </li>
      </ul>
    </aside>
  );
}
