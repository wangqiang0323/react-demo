import React from 'react';
import './Profile.css';
import { loadProfile } from '../../actions'
import { connect } from 'react-redux'

class Profile extends React.Component {
  componentDidMount() {
    // this.props.loadProfile('vkrms')
  }

  render() {
    return (
      <div className="page-content">
        <h2>个人信息</h2>
        <p>{this.props.user ? <img src={this.props.user.avatarUrl} alt=""></img> : 'test search \'wangqiang0323\' at above search input.'}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.login]
})

export default connect(mapStateToProps,{
  loadProfile
})(Profile)