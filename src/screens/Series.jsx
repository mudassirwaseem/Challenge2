import MyCard from '../components/MyCard'
import useFetch from '../hooks/useFetch'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DropDown from '../components/DropDown'
import { useState} from 'react'

const Series = () => {
    const {data} = useFetch({
        url: 'https://mumer01.github.io/publicApis/BoxOffice.json',
        category: 'series'
    }) 
    // console.log("data", data)

    const [filData, setFilData] = useState(data)

    const filterData = (event) => {
        console.log(event.target.value)
        if(event.target.value !== "all"){
          const filterData = data.filter((element)=> (element.releaseYear == event.target.value))
          console.log(filterData,"hhhhh")
          setFilData(filterData)
        } else{
          setFilData(data)
        }
      }


    return(
        <div>
            <Navbar/>
            <Header title="Popular Series"/>
            <DropDown filterData={filterData} />
            <div className='card-container'>
            { filData && filData.map((element,index)=> <MyCard key={index} element={element}/>) }
            </div>
            <Footer/>
        </div>
    )
}

export default Series