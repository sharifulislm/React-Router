import React, { useEffect, useState } from 'react';
import Friend from '../Frend/Friend';

const Freinds = () => {
  const [friends, setfriend]=useState([]);
 
  useEffect(()=> {
 fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setfriend(data))

  },[])

    return (
        <div>
            <h2> Heelo friend , How are you </h2>
       
            <p> <small> I want some taka from you{friends.length}</small></p>
       
       {
           friends.map( friend => <Friend key={friend.id} friend={friend}> </Friend>)
       }

        </div>
    );
};

export default Freinds;