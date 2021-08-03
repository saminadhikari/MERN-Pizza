import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router>
            <Route path='/' exact component={Homescreen}/>
            <Route path='/cart' exact component={Cartscreen}/>
            <Route path='/login' exact component={Loginscreen}/>
            <Route path='/register' exact component={Registerscreen}/>
            <Route path='/admin' component={Adminscreen}/>
        </Router>
    </div>
  );
}

export default App;
