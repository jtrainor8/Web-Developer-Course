import { useState } from "react"

export default function SignupForm () {
    const[firstName, setFirstName] = useState("timmy");
    const[lastName, setLastName] = useState("burgers");
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    };
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    };
    const handleSubmit = () => {
        console.log(firstName, lastName)
    };

    return(
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" placeholder="firstName" value={firstName}
            onChange={updateFirstName} id="firstName" /> 
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" placeholder="lastName" value={lastName}
            onChange={updateLastName} id="lastName" /> 
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}