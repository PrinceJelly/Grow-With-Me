import Menu from "../sidebar/Menu";
import Calendar from "./Calendar";
import Header from "./Header";
import Footer from "./Footer";
import { getAllData } from "../utils/Axios";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [goals, setGoals] = useState(null);
  const [expense, setExpense] = useState(null);
  const [save, setSave] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getAllData().then((res) => {
      setGoals(res[0]);
      setSave(res[1]);
      setExpense(res[2]);
    });
  };

  return (
    <main className="home">
      <Header />
      <div className="home__main-container">
        <Menu getData={getData} goals={goals} />
        <Calendar save={save} expense={expense} getData={getData} />
      </div>
      <Footer />
    </main>
  );
}
