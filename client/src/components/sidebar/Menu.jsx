import SideBar from "./SideBar";
import React, { useState } from "react";
import Button from "../resuable/Button";
import MainMenu from "./mainMenu";

export default function Menu({ getData, goals }) {
  const [showing, setShowing] = useState(false);
  return (
    <aside className="menu">
      <span className="menu__home-title__container">
        <h1 className="menu__home-title">Home</h1>
      </span>
      <MainMenu getData={getData} goalsData={goals} />
      <section className={`menu__options  sideBar ${showing && "sideBar--isactive"}`}>
        <span className="menu__options--container">
          <SideBar getData={getData} />
        </span>
      </section>
      <span className="menu__options__btn--container">
        {showing ? (
          <Button addClass="btn__open" handleClick={() => setShowing(false)}>
            <p className="btn__open--txt">Close Menu</p>
          </Button>
        ) : (
          <Button addClass="btn__open" handleClick={() => setShowing(true)}>
            <p className="btn__open--txt">Menu</p>
          </Button>
        )}
      </span>
    </aside>
  );
}
