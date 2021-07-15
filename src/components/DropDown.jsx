const DropDown = ({filterData}) => {
    return(
        <select onChange={filterData}>
            <option value="all">All</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
        </select>
    )
}

export default DropDown