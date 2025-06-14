import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        < Header />
          <div className='container'>
            <Routes>
              <Route exact path = "/" element = { < Home state = {props.state} /> }/>
              <Route exact path = "/Services" element = { < Services state = {props.state.services} /> }/>
              <Route exact path = "/Contacts" element = { < Contacts /> }/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
