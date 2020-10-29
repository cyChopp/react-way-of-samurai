import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {logoutForm} from '../../redux/user-auth'


class HeaderContainer extends React.Component{
    
    render(){
        return( 
            <Header {...this.props} logoutForm={this.props.logoutForm}/>
        )
    }
}
let mapStateToProps = (state)=>({
    isLogged:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps,{logoutForm}) (HeaderContainer);