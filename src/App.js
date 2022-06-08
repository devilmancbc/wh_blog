import { Router, Route,Switch } from "react-router-dom";
import Home from "pages/Layout";
import Login from "pages/Login";
import AuthRoute from "components/AuthRoute"
import history from "utils/history"


function App() {
  return(
  <Router history={history}>
    <div className="App"> 
    <Switch>
      <AuthRoute path="/home" component={Home}></AuthRoute>
      <Route path="/login" component={Login}></Route>
    </Switch>
    </div>

  </Router>)
}

export default App;
