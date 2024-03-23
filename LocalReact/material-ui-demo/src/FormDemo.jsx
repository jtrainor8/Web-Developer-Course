import { TextField, Slider, Box } from "@mui/material"
import { useState } from "react"


export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(50);
    const updateName = (e) => {
        setName(e.target.value);
    }
    const changeVolume = (e, newVal) => {
        setVolume(newVal);
    }

    return (
        <Box sx={{border: '1px solid red', p: 6, width:300, height: 300, margin:"0 auto" }}>
            <h1>Name is: {name} </h1>
            <TextField 
                id="outlined-basic" 
                placeholder="Charlie" 
                label="Puppy Name" 
                variant="outlined" 
                value={name}
                onChange={updateName}
            />
            <h1>Volume: {volume}</h1>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        </Box>
    )
}