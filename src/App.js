import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Part2 } from "./02-functional-programmin/part2";
import { Part3 } from "./03-redux-fundamental";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/part1"> Part 1 (Introduction)</Link>
            </li>
            <li>
              <Link to="/part2/0"> Part 2 (Functional Programming)</Link>
            </li>
            <li>
              <Link to="/part3/0"> Part 3 (Redux Fundamental)</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/part2/:practice" component={Part2} />
        <Route path="/part3/:practice" component={Part3} />
      </Switch>
    </Router>
  );
}
