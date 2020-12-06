import HomePage from "./components/home/Home";
import Hero from "./components/Hero";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/home" exact component={HomePage} />
        <Route exact path={["/home", "/home/"]}>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
