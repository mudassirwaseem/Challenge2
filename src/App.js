import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Instructions from "./screens/Instructions";
import Home from "./screens/Home";
import Movies from "./screens/Movies";
import Series from "./screens/Series";

const App = () => {
  return (
    <main>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Instructions} />
            <Route path="/home" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
          </Switch>
        </BrowserRouter>
      </div>
    </main>
  );
};

export default App;
