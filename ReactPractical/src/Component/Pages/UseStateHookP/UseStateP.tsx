import { Grid, Typography } from "@mui/material"
import { useState } from "react"


const UseStateP = () => {

    const [Count, setCount] = useState(0)
    function FnDecrease() {
        setCount(Count - 1)
    }
    function FnIncrease() {
        setCount(Count + 1)
    }
    function FnReset() {
        setCount(0)
    }

    return (
        <>
            <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '500px' }}>
                <Grid>
                    <h1> Counter Project </h1> <br />
                    <Typography> <h2 > Count: {Count} </h2></Typography>
                </Grid>

                {/* <button onClick={() => setCount(Count + 1)}> Increase </button>  // ye counter bnene ka phla trika haain
                <button onClick={() => setCount(Count - 1)}> Decrease </button>
                <button onClick={() => setCount(0)}> Reset </button> */}
                <Grid sx={{ m: "50px" }}> <button onClick={FnIncrease}> Increase </button>
                    <button onClick={FnDecrease}> Decrease </button>
                    <button onClick={FnReset}> Reset </button>
                </Grid>



            </Grid>
            <Grid>

            </Grid>


        </>

    )
}

export default UseStateP