import './index.css'

const ListComponent = props => {
  const {eachItem, onDeleteApp} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onDelete = () => {
    onDeleteApp(id)
  }
  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="details-delete-container">
        <img alt="domain logo" src={logoUrl} className="app-logo" />
        <div className="title-link-container">
          <p className="title">{title}</p>
          <p className="app-link">{domainUrl}</p>
        </div>

        <button
          onClick={onDelete}
          data-testid="delete"
          type="button"
          className="delete-container"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ListComponent
