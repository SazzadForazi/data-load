import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const { name, phone, website, address } = props.friend;
    // console.log(props.friend);
    const friendStyle = {
        border: '1px solid black',
        background: 'black',
        padding: "10px",
        margin: '15px',
        borderRadious: '20px',
        color: "white"


    }
    return (
        <div style={friendStyle}>

            <h2>Name: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p><small><i>Adress: {address.street}</i></small></p>


        </div>
    );
};

export default Friend;