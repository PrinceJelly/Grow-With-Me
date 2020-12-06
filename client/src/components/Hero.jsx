import { Link } from "react-router-dom";

export default function Calender() {
  return (
    <main>
      <h1>Grow With Me.</h1>
      <Link to="/home">
        <button>Start Now</button>
      </Link>
    </main>
  );
}
