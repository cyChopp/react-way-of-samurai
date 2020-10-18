import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {userAuth} from '../../redux/user-auth'


class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.userAuth();
    }
    render(){
        return( 
            <Header {...this.props}/>
        )
    }
}
let mapStateToProps = (state)=>({
    isLogged:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps,{userAuth}) (HeaderContainer);