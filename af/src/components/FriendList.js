import React from 'react';
import axiosWithAuth from"../utils/axiosWithAuth" 
import FriendForm from "../components/FriendForm" // FriendForm is a child of FriendList

export default function FriendList() {
    const [friends, setFriends] = React.useState([])

    const fetchFriends = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {console.log(res); setFriends(res.data)})
            .catch(err => console.log(err.response));
    };

    React.useEffect(() => {fetchFriends();}, []);


    return (
        <div>
        {/* setFriends={setFriends} === props being connected to FriendForm from FriendList */}
        <FriendForm setFriends={setFriends}/> 
        < button onClick={fetchFriends}> Press!</button>
        {friends.map(friendObj => {
            return (<div className="enemies" key={friendObj.id}> {""} 
                    <p>Name:{friendObj.name}</p>  {""} 
                    <p>Age:{friendObj.age}</p>
                    <p>Email:{friendObj.email}</p> 
                    <button>EDIT</button>{""} 
                    </div>)
        })}
        </div>
    );
};


// or export default function Friendlist() {return(<div> whoa </div>)}