import React from 'react';
//React Routers
import{Route} from 'react-router-dom'
// Components imports
import Home from './components/Home'
import Starship from './components/Starship'
// CSS imports
import "./App.css";
const App = () => {
  return (
  <div className="App">
   <nav>
      <nav>
          {/* <Link to = "/">Home</Link>{' '}  */}
        </nav>
      </nav>
      <Route exact path ="/" component={Home}/>  
      <Route path='/starship' render={({location}) => <Starship location={location}/> }/>
  </div>
  );
};
export default App;