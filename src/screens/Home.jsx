import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Placeholder from '../components/Placeholder'
import {Link} from 'react-router-dom'


const Home = () => {
    return(
        <div>
            <Navbar/>
            <Header title="Home"/>
            <Link to="/series" className="link">
                <Placeholder title="Popular Series"/>
            </Link>
            <Link to="/movies" className="link">
                <Placeholder title="Popular Movies"/>                
            </Link>
            <Footer/>
        </div>
    )
}

export default Home