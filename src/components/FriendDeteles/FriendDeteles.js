import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDeteles = () => {
    const {friendId} = useParams();
    console.log(friendId)
   const [friend , setfriend]= useState();


   useEffect(() => {
       const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
       console.log(url);
       fetch(url)
       .then(res => res.json())
       .then(data => setfriend(data));

   } ,[])
 
 
 
    return (
        <div>
         <h2>   this is detail about bondhu : {friendId} </h2>
            
        </div>
    );
};

export default FriendDeteles;