import MyCard from '../components/MyCard'
import useFetch from '../hooks/useFetch'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Movies = () => {
    const {data} = useFetch({
        url: 'https://mumer01.github.io/publicApis/BoxOffice.json',
        category: 'movie'
    }) 

    return(
        <div>
            <Navbar/>
            <Header title="Popular Movies"/>
            <div className='card-container'>
            { data && data.map((element,index)=> <MyCard key={index} element={element}/>) }
            </div>
            <Footer/>
        </div>
    )
}

export default Movies