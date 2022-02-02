import Landing from "./pages/Landing";
import Pokemon from "./pages/Pokemon"
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
// import { useEffect } from "react";

function App() {

    // const location = useLocation()
    // useEffect (function () {

    // }, [location])
    const history = useHistory()

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" children={<Landing />} />
                    <Route path="/pokemon/:id" children={<Pokemon />} />
                </Switch>
                {
                    <Route path="/pokemon" children={<Landing />} />
                }

            </Router>
        </>
    );
}

export default App;
