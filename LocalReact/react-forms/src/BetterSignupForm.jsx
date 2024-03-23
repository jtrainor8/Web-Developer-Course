import { useState } from "react"

export default function BetterSignupForm () {

    const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""})

    // const handleChange = (evt) => {
    //     const changedField = evt.target.name;
    //     const newValue = evt.target.value;

    //     setFormData(currData => {
    //         currData[changedField] = newValue;
    //         return{ ...currData };
    //     })
    // }
    
    //a more common syntax for react
    const handleChange = (evt) => {
        setFormData(currData => {
            return{
                ...currData,
                [evt.target.name]: evt.target.value,
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    };

    return(
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input 
                type="text" 
                placeholder="first name" 
                value={formData.firstName}
                onChange={handleChange} 
                name="firstName" 
                id="firstName" 
            /> 

            <label htmlFor="lastName">Last Name: </label>
            <input 
                type="text" 
                placeholder="last name" 
                value={formData.lastName}
                onChange={handleChange} 
                name="lastName" 
                id="lastName" 
            /> 

            <label htmlFor="password">Password: </label>
            <input 
                type="text" 
                placeholder="password" 
                value={formData.password}
                onChange={handleChange} 
                name="password" 
                id="password" 
            /> 

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}