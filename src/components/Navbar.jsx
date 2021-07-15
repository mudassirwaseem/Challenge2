import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <h1>GOK Streams</h1>
            <nav>
                <Link to="/home" className="link">Home</Link>
                <Link to="/series" className="link">Series</Link>
                <Link to="/movies" className="link">Movies</Link>
            </nav>
        </div>
     );
}
 
export default Navbar;