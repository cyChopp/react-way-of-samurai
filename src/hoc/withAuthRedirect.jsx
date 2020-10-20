import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsRedirect = (state)=>({
    isAuth:state.auth.isAuth
})

export const  withAuthContainer = (Component)=>{

    class redirectContainer extends React.Component{
        
        render(){
        if(!this.props.isAuth){return <Redirect to={'/login'}/>};

            return( <Component {...this.props}/>)
        }
    }
    let containerRedirect = connect(mapStateToPropsRedirect)(redirectContainer)

return containerRedirect;
}