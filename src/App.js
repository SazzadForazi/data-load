import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Culture from './component/Culture/Culture';
import Friend from './component/Friend/Friend';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/about/culture'>
            <Culture></Culture>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
