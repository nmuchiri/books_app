import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import BookContainer from './components/BookContainer'
import CreateBook from './components/CreateBook'
import OneBook from './components/OneBook'
import UpdateBook from './components/UpdateBook'
import SignUp from './components/SignUp'
import Login from './components/Login'

import './css/App.css';
import Layout from "./components/common/Layout"

const App = () => {
  return (
    <>
    <Layout>
      <Switch> 
      <Route exact path={["/", "/home"]} component={Home} /> 
      <Route exact path="/profile" component={BookContainer} /> 
      <Route exact path="/books" component={CreateBook} />
      <Route exact path="/books/:id" component={OneBook} />
      <Route exact path="/books/edit/:id" component={UpdateBook} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      </Switch> 
    </Layout> 
    </>
  );
};

export default App;
