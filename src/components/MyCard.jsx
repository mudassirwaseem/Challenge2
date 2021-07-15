const MyCard = ({element}) => {
    let imgSource = element.images
    imgSource = Object.values(imgSource)

    
    return ( 
        <div className="my-card">
            <img src={imgSource[0].url} alt="Card Img" />
            <h2>{element.title}</h2>
            <small>Category: {element.programType}</small>
            <small>Year: {element.releaseYear}</small>
        </div>
     );
}
 
export default MyCard;