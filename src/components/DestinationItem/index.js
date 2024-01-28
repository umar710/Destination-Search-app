import './index.css'

const DestinationItem = props => {
  const {destinationItemDetails} = props
  const {name, imgUrl} = destinationItemDetails
  return (
    <li>
      <div className="place-card">
        <img className="imageUrl" src={imgUrl} alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
