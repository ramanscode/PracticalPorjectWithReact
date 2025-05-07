import { Button, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";

const UseEffectR = () => {
    const [Count, setCount] = useState(0)
    useEffect(() => {
        alert("Hello World") // This will run once when the component mounts

    },
        [ Count])

    return (
        <>
            <Grid>
                <Typography variant="h1" align="center"> UseEffect Hook </Typography>
               <h1> { Count}</h1>
               <Button onClick={()=> setCount(Count + 1) }  variant="contained" sx={{margin:"10px"}}>Increase</Button>

            </Grid>


        </>
    )
}

export default UseEffectR;