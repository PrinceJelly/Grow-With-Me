import constructionCat from "../../../assets/gif/original.gif";
export default function Stats() {
  return (
    <section className="newPage stats">
      <h1>STATS</h1>
      <img src={constructionCat} />
      <h2>Oh no! There's nothing to see here.</h2>
      <p className="stats__text">This feature is still under construction!</p>
      <p className="stats__text">
        Please wait for future updates. The dev is working hard to make this app fully functional.
      </p>
      <h2 className="stats__thx">thank you for your patience.</h2>
    </section>
  );
}
