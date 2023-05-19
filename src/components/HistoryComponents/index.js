import {Component} from 'react'
import ListComponent from '../ListComponent/index'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryComponent extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  onInputChange = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  onDeleteApp = id => {
    const {historyList} = this.state
    const filterdHistoryList = historyList.filter(eachObj => eachObj.id !== id)
    this.setState({
      historyList: filterdHistoryList,
    })
  }

  render() {
    const {searchInput, historyList} = this.state

    const historyNewList = historyList.filter(eachObj =>
      eachObj.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-img"
          />
          <div className="search-container">
            <div className="search-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search"
                alt="search"
              />
            </div>
            <input
              onChange={this.onInputChange}
              placeholder="Search history"
              className="search-input"
              type="search"
            />
          </div>
        </div>
        <div className="data-container">
          <ul className="ul-list-container">
            {historyNewList.length !== 0 &&
              historyNewList.map(eachItem => (
                <ListComponent
                  onDeleteApp={this.onDeleteApp}
                  eachItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            {historyNewList.length === 0 && (
              <p className="empty-container">There is no history to show</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryComponent
