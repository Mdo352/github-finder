import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {

    const {avatar_url, login, html_url} = props.user;

    return (
        <div className='card text-center' >
            <img src={avatar_url} alt="User Avatar" className="round-img" style={{ width: '60px' }}/>
            <h2>{login}</h2>
            <a href={html_url} className="btn btn-dark btn-sm my-1">View Profile</a>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
