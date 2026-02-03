

const AddressCard = ({loc}) => {
    return(
        <li key={loc.id}>
            <strong>{loc.properties.name}</strong>
            <div>{loc.properties.place_formatted}</div>
        </li> 
    )
}

export default AddressCard;