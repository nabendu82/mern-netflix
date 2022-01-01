import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Player from './pages/Player';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/player">
              <Player />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  )
}

export default App;
