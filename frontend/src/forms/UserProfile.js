import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserProfile extends Component {
  state = {
    showAvatarUrl: false,
    avatarUrl: '',
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  toggleAvatarUrl = () => {
    this.setState({
      ...this.state,
      showAvatarUrl: !this.state.showAvatarUrl,
      avatarUrl: '',
    })
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  componentDidMount() {
    const caterpillar = document.querySelector('svg#caterpillar')
    caterpillar.style.display = 'none'
  }

  render() {
    const { user } = this.props
    const { showAvatarUrl, avatarUrl } = this.state
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <img src={user.avatarUrl} alt='Change avatar' onClick={this.toggleAvatarUrl} />
          {showAvatarUrl
            ?
              <input type='text' name='avatarUrl' value={avatarUrl} onChange={this.handleChange} placeholder='Avatar Url' />
            :
              null
          }
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(UserProfile)
