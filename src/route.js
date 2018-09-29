/* Import the components */
import Home from "./home/home";
import Posts from "./menu/menu";
import { BrowserRouter as Switch, Route } from "react-router-dom";

/* Use components to define routes */
export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/menu" exact component={menu} />
  </Switch>;
