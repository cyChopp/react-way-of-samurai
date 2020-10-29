import React from 'react';
import { connect } from 'react-redux';
import s from './Dialogs.module.css';
import { compose } from 'redux';
import { withAuthContainer } from '../../hoc/withAuthRedirect';
import { updateNewDialogTextActionCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { maxLengthCreator, requiredField } from '../../Validation/validators';
import { Textarea } from '../../Validation/FormControl';

const maxLength10 = maxLengthCreator(10);


const DialogsForm = (props) => {
    let dialogsElements =  props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.messages.map( m => <Message  message={m.message}/> );
 
;
 
     if(!props.isAuth){
         return <Redirect to={'/login'}/>
        };
 
     return (
         <div className={s.dialogs}>
             <div className={s.dialogsItems}>
                 { dialogsElements }
             </div>
             <div className={s.messages}>
                 { messagesElements }
             </div>
            <form onSubmit={props.handleSubmit(props.onSubmit)} >
                <div>
                    <Field component={Textarea} name={"message"}
                        validate={[requiredField, maxLength10]}
                    />
                </div>
                <button type={"submit"}>Add Message</button>


            </form>
         </div>
     )
 }
 const ReduxMessageForm  =  reduxForm({form: 'messages'})(DialogsForm)
 
const Dialog = (props)=>{
    const onSubmit = (data)=>{
        console.log(data);
        props.onDialogChange(data.message);


    }
    return(
        <>
       <ReduxMessageForm {...props} onSubmit={onSubmit} />
        </>
    )
   }
   




let mapStateToProps = (state) => {
    return {
        dialogs  : state.dialogsPage.dialogs,
        messages :state.dialogsPage.messages,
        dialogsPage:state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onDialogChange: (message) => {
            dispatch(updateNewDialogTextActionCreator(message));
        }
    }

};

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthContainer,)(Dialog); 

// let withAuthRedirect = withAuthContainer(Dialogs)


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect);

// export default DialogsContainer;






// let state = store.getState();

// let writeMessage = () => {
//     store.dispatch(addDialogActionCreator());
// };

// let onDialogChange = (message) => {

//     store.dispatch(updateNewDialogTextActionCreator(message));
// }
// return (
//     <Dialogs onDialogChange={onDialogChange}
//         writeMessage={writeMessage}
//         newDialogMessage={state.dialogsPage.newDialogMessage}
//     />)
