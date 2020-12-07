import './scss/App.css'

import { BrowserRouter as Router, Route } from "react-router-dom";


import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects';
import Cursor from './components/Cursor/Cursor'
import Photographs from './components/Photographs/Photographs';

function App() {

  return (
    <Router>
      <div className="App">
          <Cursor />
          <Route component={Homepage} path="/" exact/>
          <Route component={Projects} path="/" exact/>
          <Route component={Photographs} path="/photographs" exact/>
      </div>
    </Router>
  );
}

export default App;
