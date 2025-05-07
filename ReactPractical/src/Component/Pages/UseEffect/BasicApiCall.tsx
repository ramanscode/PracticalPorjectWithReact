import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function BasicApiCall() {

    const [User, setUser] = useState([])
    const [Error, setError] = useState(false);

    async function FetchApi() {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/user`)
            if (response.ok) throw new Error("Failed to Fetch")
            const Data = await response.json();
            console.log(Data);

            setUser(Data);

        } catch (error) {
            setError(true)
        }
    }
    useEffect(function () {
        FetchApi();
    }, [])


    return (
        <>

            <Grid container p={2} textAlign={"left"} >

                {/* <Typography variant="h2" sx={{ textAlign: "center" }}>   Basic Api Calling    </Typography> <br /> */}

                {Error && <h1 style={{ color: 'red' }}>Page not found 404</h1>}


                {/* <ul style={{ margin: "50px" }}>
                    {
                    
                        User.map((User) => (
                            <li key={User.id} >  {User.name} ,UserName:  {User.username}, Contact:{User.phone}  </li>

                        ))
                    }
                </ul> */}

                <ul style={{ margin: "50px" }}>
                    {
                        User && (
                            <li key={User.id}>
                                {User.name}, UserName: {User.username}, Contact: {User.phone}
                            </li>
                        )
                    }
                </ul>

            </Grid>


        </>
    )
}

export default BasicApiCall;