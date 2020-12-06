import Button from "../resuable/Button";
import AddNewEntry from "../sidebar/menu-pages/AddNewEntry";
import Goals from "../sidebar/menu-pages/Goals";
import Stats from "../sidebar/menu-pages/Stats";
import React, { useState } from "react";

export default function SideBar({ setShowing }) {
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
    <aside>
      <Button handleClick={() => setShowing(false)}>Close Menu</Button>
      <ul className="navigation">
        <li>
          <Button id="newEntryShowing" handleClick={handleShowing}>
            Add a new entry
          </Button>
          {newEntryPage ? <AddNewEntry newPageShowing={newEntryShowing} /> : ""}
        </li>

        <li>
          <Button id="goalsPageShowing" handleClick={handleShowing}>
            My goals
          </Button>
          {goalsPage ? <Goals newPageShowing={goalsPageShowing} /> : ""}
        </li>

        <li>
          <Button id="statsPageShowing" handleClick={handleShowing}>
            Stats
          </Button>
          {statsPage ? <Stats newPageShowing={statsPageShowing} /> : ""}
        </li>

        <li>
          <Button>About</Button>
        </li>
      </ul>
    </aside>
  );
}
