import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const getDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="history-item">
      <div className="logo-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="">{domainUrl}</p>
      </div>
      <button type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={getDelete}
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
