import SideBar from "./SideBar";
import React, { useState } from "react";
import Button from "../resuable/Button";

export default function Menu() {
  const [showing, setShowing] = useState(false);
  return (
    <aside className="menu">
      <h1>Home</h1>
      <Button handleClick={() => setShowing(true)}>Menu</Button>
      {showing ? <SideBar setShowing={setShowing} /> : ""}
    </aside>
  );
}
