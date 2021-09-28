import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Friend from './component/Friend/Friend';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Friends></Friends>

    </div>
  );
}

export default App;
