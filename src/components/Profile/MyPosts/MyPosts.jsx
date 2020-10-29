import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { requiredField, maxLengthCreator } from '../../../Validation/validators';
import { Textarea } from '../../../Validation/FormControl';


const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {


    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <form onSubmit={props.handleSubmit(props.MyPost)}>

                    <Field component={Textarea} name="addPost"
                        validate={[requiredField, maxLength10]} />
                        
                    <button type="submit">Add post</button>
                </form>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

const ReduxPostForm = reduxForm({ form: 'addUserPost' })(MyPostsForm)


const MyPost = (props) => {

    const addUserPost = (data) => {
        props.addPostActionCreator(data.addPost)
    }

    return (
        <>
            <ReduxPostForm MyPost={addUserPost} {...props} />
        </>
    )
}


const mapStateToProps = (state) => ({
    posts: state.profilePage.posts
})

export default connect(mapStateToProps, { addPostActionCreator })(MyPost);