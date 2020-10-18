
import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,setButtonInProcess,getUsers,unfollowProcess,followProcess} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)

    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    }
    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                buttonInProcess={this.props.buttonInProcess}
                setButtonInProcess={this.props.setButtonInProcess}
                unfollowProcess={this.props.unfollowProcess}
                followProcess={this.props.followProcess}
 
 

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        buttonInProcess:state.usersPage.buttonInProcess

    }
}

export default connect(mapStateToProps,{
    follow,
    unfollow,
    setCurrentPage,
    setButtonInProcess,
    getUsers,
    unfollowProcess,
    followProcess
})(UsersContainer);


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleFetching: (setToggleFetching) => {
//             dispatch(toggleFetchingAC(setToggleFetching))
//         }
//     }

// }