import ProgressExampleActive from "../utils/progressBar";
import pinPin from "../../assets/img/pinpng1.png";
import { getAllGoals } from "../utils/Axios";
import { useEffect, useState } from "react";
export default function MainMenu() {
  const [goalAPI, setGoals] = useState(null);
  useEffect(() => {
    getAllGoals().then((res) => setGoals(res));
  }, []);
  return <aside className="main-menu"></aside>;
}
