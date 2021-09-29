import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FriendDetails.css'
const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    // console.log(friendId);

    useEffect(() => {


        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setFriend(data))

    }, [])
    return (
        <div className='details'>
            <h3>Best Friend No :{friendId}</h3>
            <h3>Name: {friend.name}</h3>
            <p>Phone No: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <p>works at: {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetails;