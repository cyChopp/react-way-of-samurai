import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {loginForm,logoutForm} from '../../redux/user-auth.js';
import { Input } from '../../Validation/FormControl.jsx';
import { requiredField } from '../../Validation/validators.jsx';
import s from '../../Validation/FormControl.module.css';



const LoginForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <div>
                <label>Email:</label>
                <Field component={Input} name={"email"} 
                validate={[requiredField]} />
            </div>
            <div>
                <label>Password:</label>
                <Field component={Input} name={"password"} type={"password"} 
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
            </div>
            {props.error && <div className={s.formError}>
                {props.error}
            </div>
            }
            <button type={"submit"}>Login</button>

        </form>
    )
}
const ReduxFormLogin  = reduxForm({form:'login'})(LoginForm)

let Login = (props)=>{

const onSubmit = (data)=>{
    console.log(data);
    props.loginForm(data.email,data.password,data.rememberMe)

}
    return(
        <div>
            <ReduxFormLogin onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state)=>({
isAuth:state.profilePage.isAuth
})

export default  connect(mapStateToProps,{loginForm,logoutForm})(Login); 