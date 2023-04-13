
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav>

            <div>
                <Link to='/about'> ABOUT </Link>
                <Link to='/home'> HOME </Link>
                <Link to='/favorites'> Favorites </Link>
            </div>

            <button onClick={handleLogOut}>LOG OUT</button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;