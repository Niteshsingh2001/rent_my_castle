
import { Route, Switch } from 'react-router-dom';
import Main from "./pages/main";
import Error_404 from "./pages/error_404";
import Auth from './pages/auth';
import AuthMain from './pages/auth_main';
import About from './pages/about';
import Contact from './pages/contact';
import Profile from './pages/profile'
import Post from './pages/post';



function App() {
  return (
    <div className=" h-screen w-screen">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={Main} />
        <Route exact path='/contact' component={Main} />
        <Route exact path='/post/:post_id' component={Main} />
        <Route exact path='/user/:user_id/post/:post_id' component={Main} />
        <Route exact path='/user/:user_id/about' component={Main} />
        <Route exact path='/user/:user_id/contact' component={Main} />
        <Route exact path='/user/:user_id' component={Main} />
        <Route exact path='/user/:user_id/profile' component={Main} />
        <Route exact path='/auth/login' component={Auth} />
        <Route exact path='/auth/signup' component={Auth} />
        <Route component={Error_404} />
      </Switch>
    </div>
  );
}

export default App;
