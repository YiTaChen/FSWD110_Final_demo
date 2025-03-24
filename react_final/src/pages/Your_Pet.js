import { Form } from 'react-router-dom';
import './Your_Pet.css';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


function Your_Pet() {

    const [showData, setShowData] = useState(false);
    
    const [petData, setPetData] = useState(null);
    const [petId, setPetId] = useState(null);
    const [petImgUrl, setPetImgUrl] = useState(null);

    const [petName, setPetName] = useState("kitty");

    const navigate = useNavigate();


    function getJsonData(){
      fetch('https://cataas.com/cat?json=true')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setShowData(true);
        
        setPetId(data.id);
        setPetImgUrl(data.url);
        // console.log(petId);
        // console.log(petImgUrl);
        
      });
    }

    const handleSubmit = (e) => {
        e.preventDefault();   
        const newPetData = { id: petId, url: petImgUrl, name: petName };
        setPetData(newPetData);     
        // setPetData({"id": "111", "url": petImgUrl, "name": petName});
        navigate("/Meet_Pet_Friend", { state: newPetData }); 


      };


    return (
      <div>
        <h3>Let's create Your Pet and Named it ~ </h3>

        <button onClick={getJsonData}>Click me to choose your Pet</button>
        <br/>
        <br/> 
        {showData ? 
        
            <form>
                <label htmlFor="petName">Pet Name:</label>
                <input defaultValue="Kitty" type="text" id="petName" name="petName" onChange={(e) => setPetName(e.target.value)} />
                <br/>
                <br/>
                
                <label>Doube check your pet name:</label>
                <h3>{petName}</h3>
                <br/>
                
                <button type='submit' onClick={handleSubmit}>Looks Good!! Submit</button>
                <br/>
                <br/>
            </form>

                : null}

        { showData ? <img src={petImgUrl} alt="pet" /> : null }


      </div>
    );
  }

  export default Your_Pet;