import React, { Component } from 'react'

class userItems extends Component {
    // state = {
    //     id: 'id',
    //     login: 'Mdo352',
    //     avatar_url: 'https://avatars3.githubusercontent.com/u/46452469?s=460&v=4',
    //     html_url: 'https://github.com/Mdo352'
    // }

    // constructor() {
    //     super();
    //     // console.log("constructor function")
    //     this.state = {
    //         id: 'id',
    //         login: 'Mdo352',
    //         avatar_url: 'https://avatars3.githubusercontent.com/u/46452469?s=460&v=4',
    //         html_url: 'https://github.com/Mdo352'
    //     }
    // }

    render() {
        const {avatar_url, login, html_url} = this.props.user;

        return (
            <div className='card text-center' >
                <img src={avatar_url} alt="User Avatar" className="round-img" style={{ width: '60px' }}/>
                <h2>{login}</h2>
                <a href={html_url} className="btn btn-dark btn-sm my-1">View Profile</a>
            </div>
        )
    }
}

export default userItems
