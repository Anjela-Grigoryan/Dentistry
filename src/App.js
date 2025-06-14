import './App.css';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';


function App(props) {
  return (
      <div className="App">
        < Header />
          <div className='container'>
            <Routes>
              <Route exact path = "/" element = { < Home state = {props.state} /> }/>
              <Route exact path = "/services" element = { < Services state = {props.state.services} /> }/>
              <Route exact path = "/contacts" element = { < Contacts /> }/>
            </Routes>
          </div>
      </div>
  );
}

export default App;
