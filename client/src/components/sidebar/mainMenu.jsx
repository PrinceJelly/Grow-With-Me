import Cards from "./mainMenu_Comp/Cards";
import PlaceholderGoals from "../resuable/placeholderGoals";

export default function MainMenu({ getData, goalsData }) {
  return goalsData === null ? (
    <PlaceholderGoals />
  ) : (
    <article className="main-menu">
      {goalsData &&
        goalsData.map((goalItem) => {
          return (
            <ul className="main-menu__card-list" key={goalItem.id}>
              <Cards goalItem={goalItem} getData={getData} />
            </ul>
          );
        })}
    </article>
  );
}
