import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import NewUser from './pages/NewUser';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import User from './pages/User';
import UserList from './pages/UserList';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/authContext/AuthContext';
import Login from './pages/Login';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Navbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/"><Home /></Route>
              <Route path="/users"><UserList /></Route>
              <Route path='/user/:userId'><User /></Route>
              <Route path="/newUser"><NewUser /></Route>
              <Route path="/products"><ProductList /></Route>
              <Route path='/product/:productId'><Product /></Route>
              <Route path="/newProduct"><NewProduct /></Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
