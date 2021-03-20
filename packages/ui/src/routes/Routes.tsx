import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

const Router:React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
