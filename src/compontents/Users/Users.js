import React from 'react';
import * as axios from 'axios';
const token = 'Bearer BHztJStcCQshH6ziltzxwVmk_R0PwzoZunui';

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://gorest.co.in/public-api/users`, {
                headers: {
                    'Authorization': token,
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(res => this.props.getUsersList(res.data.result))
            .catch(err => console.error(err));
        }
    }

    render() {
        let list = this.props.users.map((user) => {
           return <tr key={user.id}><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.gender}</td></tr>
        });
        console.log(this.props);
        return(
            <div>
                <h2>Userslist</h2>
                <table width="100%">
                    <tbody>{list}</tbody>
                </table>
            </div>

        )
    }

}

export default Users;