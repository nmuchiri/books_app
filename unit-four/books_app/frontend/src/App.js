import { Switch, Route } from 'react-router-dom'

import BookContainer from './components/BookContainer'
import CreateBook from './components/CreateBook'

import './css/App.css';

const App = () => {
  return (
    <>
      <Switch> 
      <Route exact path={["/", "/home"]} component={BookContainer} /> 
      <Route exact path="/books" component={CreateBook} />
      </Switch> 
    </>
  );
};

export default App;
