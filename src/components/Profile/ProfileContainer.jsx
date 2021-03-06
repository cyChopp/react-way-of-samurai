import React from 'react';
import Profile from './Profile';
import { getUserProfileProcess,setStatus,updateStatus} from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import {  Redirect, withRouter } from 'react-router-dom';
import { withAuthContainer } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {

    let userId = this.props.match.params.userId
    if(!userId){
     userId=this.props.userId;
      if(!userId){
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfileProcess(userId);
    this.props.setStatus(userId);


  } 
  
  render() {

    return (
      <>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </>
    )
}
}


let mapStateToProps = (state) => ({ 

  profile: state.profilePage.profile,
  status:state.profilePage.status,
  userId:state.auth.userId,
  isAuth:state.auth.isAuth,

});
export default compose(
  connect(mapStateToProps, {getUserProfileProcess,setStatus,updateStatus}),
  withRouter
)(ProfileContainer);
// let withAuthRedirect = withAuthContainer(ProfileContainer)

// let setUserUrlRouter = withRouter(withAuthRedirect)
// export default connect(mapStateToProps, { setUserProfile ,UserProfileProcess})(setUserUrlRouter);  



 

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