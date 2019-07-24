import React from 'react';
import axios from 'axios';
const token = 'Bearer xxx';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://gorest.co.in/public-api/users`, {
            headers: {
                'Authorization': token,
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    render () {
        return (
            <div>UsersList</div>
        );
    }
}

export default UsersContainer;