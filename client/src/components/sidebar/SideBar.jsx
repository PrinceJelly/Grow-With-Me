import Button from "../resuable/Button";
import AddNewEntry from "../sidebar/menu-pages/AddNewEntry";
import Stats from "../sidebar/menu-pages/Stats";
import React, { useState } from "react";
import ClockComp from "../resuable/Clock";

export default function SideBar({ getData }) {
  const [newEntryPage, newEntryShowing] = useState(false);
  const [statsPage, statsPageShowing] = useState(false);

  const handleShowing = (event) => {
    if (event.target.id === "newEntryShowing") {
      newEntryShowing(true);
      statsPageShowing(false);
    }
    if (event.target.id === "closeMenu") {
      newEntryShowing(false);
      statsPageShowing(false);
    }
  };

  return (
    <aside className="side-bar__content">
      <section className="side-bar__pages">
        <ClockComp />
        {newEntryPage ? <AddNewEntry getData={getData} newPageShowing={newEntryShowing} /> : ""}
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
            add a new entry
          </Button>
        </li>
        <li className="side-bar__list__item">
          <Button addClass="btn__next">Stats (Coming Soon!)</Button>
        </li>
      </ul>
    </aside>
  );
}
