

const AddressCard = ({ loc, onClick }) => {
    return(
        <li onClick= {onClick}>
            <strong>{loc.properties.name}</strong>
            <div>{loc.properties.place_formatted}</div>
        </li> 
    )
}

export default AddressCard;