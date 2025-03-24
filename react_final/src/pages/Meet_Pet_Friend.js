
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './Meet_Pet_Friend.css';
import {useState} from 'react';


function Meet_Pet_Friend() {

    const location = useLocation();
    const userPetData = location.state;
    useEffect(() => {
        console.log("userPetData", userPetData);
        if (userPetData) {
          console.log("收到的 Pet 資料：", userPetData);
        }
      }, [userPetData]);
    
    useEffect(() => {
        getJsonData();
      }, []);
    const [showFriendData, setShowFriendData] = useState(false);
    const [petFriendId, setPetFriendId] = useState(null);
    const [petFriendImgUrl, setPetFriendImgUrl] = useState(null);
  
    const [petFriendName, setPetFriendName] = useState("kitty");
    
    const [petFriendList, setPetFriendList] = useState([]);

    const [showPetFriendList, setShowPetFriendList] = useState(false);

    function getJsonData(){
        fetch('https://cataas.com/cat?json=true')
        .then(response => response.json())
        .then(data => {
          setShowFriendData(true);
          
          setPetFriendId(data.id);
          setPetFriendImgUrl(data.url);
          
        });
      }

    useEffect(() => {
        if (petFriendList.length > 0) {
            setShowPetFriendList(true); 
        }
      }, [petFriendList]);

    function likePetFriend(){
        const newPetFriendData = { id: petFriendId, url: petFriendImgUrl };
        setPetFriendList([...petFriendList, newPetFriendData]);
        setShowFriendData(false);
        getJsonData();
    } 

    function denyPetFriendAndGetNewFriend(){
        setShowFriendData(false);
        getJsonData();
    }



    return (
        <div>
            <h3>Meet Your Pet Friend ~ </h3>
            <div className="petFriend">
                <div className="userPet">
                <h3> Your Pet Name is: {userPetData.name}</h3>
                <img src={userPetData.url} alt="pet" />

                </div>
                <div className="newPetFriend">
                    <h3> Add your Pet Friend </h3>
                    { showFriendData ? 
                        <>
                            <button onClick={likePetFriend}>Like!!</button> <button onClick={denyPetFriendAndGetNewFriend}> Deny</button> 
                            <br/>
                            <br/>
                        </>
                    : null }
                    { showFriendData ? <img src={petFriendImgUrl} alt="pet_friend" /> : null }
                </div>
               

                
            </div>
            {showPetFriendList ? 
                    <div className="petFriendList">
                        <h3> Your Pet has {petFriendList.length} friends !! </h3>
                        {petFriendList.map((petFriend, index) => (
                            <div key={index}>
                                <img src={petFriend.url} alt="pet_friend" />
                            </div>
                        ))}
                    </div>
                    : null}
        </div>
        );
    





  };
  export default Meet_Pet_Friend;