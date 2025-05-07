import { Grid } from "@mui/material";
import { useEffect, useState } from "react"

function UserFatchData() {

    const [User, setUser] = useState([]);

    async function FetchApi() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const Data = await response.json();
        console.log(Data);
        setUser(Data)

    }

    useEffect(() => {
        FetchApi()
    }, [])

    return (
        <>
            <Grid container size={12} p={10} m={5}  >
                <ul>
                    {
                        User.map((User) => (
                            <li key={User.id}>
                                Name: {User.name}  <br />
                                UserName: {User.username}  <br />
                                Contact: {User.phone}  </li>
                        ))
                    }
                </ul>
            </Grid>
        </>


    )
}

export default UserFatchData