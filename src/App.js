import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Phonebook.css';
import './App.css';
import Navbar from './components/Navbar';
import Phonebook from './pages/Phonebook';
import Login from './pages/Login';
import UserState from './context/user/UserState';
import UserContext from './context/user/userContext';
import PrivateRoute from './components/routing/PrivateRoute';
import { useContext } from 'react';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
function App() {
    // const userContext = useContext(UserContext);
    // const { isAuthenticated, loading } = userContext;
    return (
        <UserState>
            <Router>
                <div className='App'>
                    <Navbar />
                    <Switch>
                        <PrivateRoute exact path='/' component={Phonebook} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </div>
            </Router>
        </UserState>
    );
}

export default App;
