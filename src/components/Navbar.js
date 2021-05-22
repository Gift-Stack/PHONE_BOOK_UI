import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user/userContext';

const Navbar = () => {
    const userContext = useContext(UserContext);
    const { isAuthenticated, logout } = userContext;

    const handleLogout = () => logout();
    return (
        <nav className='navbar navbar-light bg-white justify-content-between d-flex align-items-center px-3 mb-4 border-bottom '>
            <a className='navbar-brand logo'>Phonebook</a>
            {!isAuthenticated ? (
                <Link to='/login' className='navbar-link'>
                    Login
                </Link>
            ) : (
                <Link className='navbar-link' onClick={handleLogout}>
                    Logout
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
