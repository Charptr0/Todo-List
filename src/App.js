import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() 
{
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
