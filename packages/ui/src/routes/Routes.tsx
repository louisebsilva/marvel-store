import { ReactNode } from 'react';
import { BrowserRouter, Route, Switch, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import SignUp from '../pages/SignUp/SignUp';
import { isAuthenticated } from '../client/auth';
import ItemDetails from '../ItemDetails/ItemDetails';

const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw Error('Component is undefined');
  }

  const Component = component;

  const render = (props: RouteComponentProps<any>): ReactNode => {
    return isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login' }} />;
  };

  return (<Route {...rest} render={render} />);
};


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={App} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/item/comics/:id" component={ItemDetails} />
        <PrivateRoute path="/item/characters/:id" component={ItemDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
