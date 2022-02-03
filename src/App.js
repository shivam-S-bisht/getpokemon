import Landing from "./pages/Landing";
import Pokemon from "./pages/Pokemon"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route path="/pokemon/:id">
                        <Pokemon />
                    </Route>
                </Switch>
                {
                    <Route path="/pokemon">
                        <Landing />
                    </Route>
                }

            </Router>
        </>
    );
}

export default App;
