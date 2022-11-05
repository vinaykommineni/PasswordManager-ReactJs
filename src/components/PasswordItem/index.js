import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDeletePassword, isChecked} = props
  const {website, username, password, id} = passwordDetails

  const initial = website ? website[0].toUpperCase() : ''

  const onClickDelete = () => {
    onDeletePassword(id)
  }

  return (
    <li className="password-list-items">
      <div>
        <p className="initial">{initial}</p>
      </div>
      <div className="details-container">
        <p className="website">{website}</p>
        <p className="name">{username}</p>
        {isChecked ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <div className="delete-container">
        <button className="delete-button" type="button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
