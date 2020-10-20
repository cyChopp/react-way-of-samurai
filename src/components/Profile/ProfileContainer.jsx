import React from 'react';
import Profile from './Profile';
import { setUserProfile,setUserProfileProcess } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import { withAuthContainer } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {

    let userId = this.props.match.params.userId
    if(!userId){
      userId=2
    }

    this.props.setUserProfileProcess(userId);
  } 
  
 
  
  render() {

    return (
      
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}


let mapStateToProps = (state) => ({ 

  profile: state.profilePage.profile,

});
export default compose(
  connect(mapStateToProps, { setUserProfile ,setUserProfileProcess}),
  withRouter,
  withAuthContainer
)(ProfileContainer);
// let withAuthRedirect = withAuthContainer(ProfileContainer)

// let setUserUrlRouter = withRouter(withAuthRedirect)
// export default connect(mapStateToProps, { setUserProfile ,setUserProfileProcess})(setUserUrlRouter);  



 

// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     let userId = this.props.match.params.userId;
//     if(!userId){
//       userId=2;
//     }
//     debugger;
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
//       .then(response => {
//         this.props.setUserProfile(response.data);
//       });
//   } 
//   render() {
//     debugger;
//     return (
//       <Profile {...this.props} profile={this.props.profile}/>
//     )
//   }
// }


// let mapStateToProps = (state) => ({

//   profile: state.profilePage.profile

// });

// let setUrlWithRouter = withRouter(ProfileContainer);
// export default connect(mapStateToProps, { setUserProfile })(setUrlWithRouter);  