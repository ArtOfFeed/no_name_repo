import {getUsersListAC} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsersList: (users) => {
            dispatch(getUsersListAC(users));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);