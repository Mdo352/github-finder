import React, { Component } from 'react';
import UserItem from "./UserItem";

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'Mdo352',
                avatar_url: 'https://avatars3.githubusercontent.com/u/46452469?s=460&v=4',
                html_url: 'https://github.com/Mdo352'
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            },
            {
                id: '3',
                login: 'Modjo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/Modjo'
            }
        ]
    };

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem className='card text-center' key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

}

export default Users
