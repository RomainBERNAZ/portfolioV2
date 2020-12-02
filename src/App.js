import './scss/App.css'


import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects';
import Cursor from './components/Cursor/Cursor'

function App() {

  return (
    <div className="App">
      <Cursor />
      <Homepage/>
      <Projects/>
    </div>
  );
}

export default App;
