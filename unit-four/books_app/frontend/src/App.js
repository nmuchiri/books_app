import { Switch, Route } from 'react-router-dom'

import BookContainer from './components/BookContainer'
import CreateBook from './components/CreateBook'
import OneBook from './components/OneBook'
import UpdateBook from './components/UpdateBook'
import SignUp from './components/SignUp'
import Login from './components/Login'

import './css/App.css';

const App = () => {
  return (
    <>
      <Switch> 
      <Route exact path={["/", "/home"]} component={BookContainer} /> 
      <Route exact path="/books" component={CreateBook} />
      <Route exact path="/books/:id" component={OneBook} />
      <Route exact path="/books/edit/:id" component={UpdateBook} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      </Switch> 
    </>
  );
};

export default App;
