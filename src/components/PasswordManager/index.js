import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordManagerList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    isChecked: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddDetails = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newDetails = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      //   duplicatePassword:
      //     'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png',
    }
    this.setState(prevState => ({
      passwordManagerList: [...prevState.passwordManagerList, newDetails],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onDeletePassword = id => {
    const {passwordManagerList} = this.state

    this.setState({
      passwordManagerList: passwordManagerList.filter(
        eachPassword => eachPassword.id !== id,
      ),
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onIsChecked = () => {
    const {isChecked} = this.state
    this.setState({isChecked: !isChecked})
  }

  render() {
    const {
      passwordManagerList,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      isChecked,
    } = this.state

    const searchResults = passwordManagerList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="password-manager-logo"
          alt="app logo"
        />
        <div className="bg-container">
          <form
            className="password-manager-container"
            onSubmit={this.onAddDetails}
          >
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                value={websiteInput}
                onChange={this.onChangeWebsiteInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-icon"
              />
              <input
                type="text"
                className="input"
                value={usernameInput}
                placeholder="Enter Username"
                onChange={this.onChangeUsernameInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-icon"
              />
              <input
                type="password"
                className="input"
                value={passwordInput}
                placeholder="Enter Password"
                onChange={this.onChangePasswordInput}
              />
            </div>
            <div className="button-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="count-search-container">
            <div className="count-container">
              <h1 className="count">Your Passwords</h1>
              <p className="span">{searchResults.length}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-password-container">
            <input
              type="checkbox"
              className="checkbox"
              id="password"
              onClick={this.onIsChecked}
            />
            <label htmlFor="password" className="label">
              Show Passwords
            </label>
          </div>
          {searchResults.length > 0 ? (
            <ul className="passwords-container">
              {searchResults.map(eachItem => (
                <PasswordItem
                  passwordDetails={eachItem}
                  key={eachItem.id}
                  onDeletePassword={this.onDeletePassword}
                  isChecked={isChecked}
                />
              ))}
            </ul>
          ) : (
            <div className="noPassword-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="noPassword-img"
              />
              <p className="emptyPasswords">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
