import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function SingleFatchData() {
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleFetchUser = async () => {
        const id = parseInt(userId);

        // Check for valid ID between 1 and 100
        if (isNaN(id) || id < 1 || id > 100) {
            setError('Invalid ID. Please enter a number between 1 and 100.');
            setUserData(null);
            return;
        }

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error("User not found");
            }

            const data = await response.json();
            setUserData(data);
            console.log(data);
            
            setError('');
        } catch (err) {
            setError('Failed to fetch user.');
            setUserData(null);
        }
    };

    return (
        <Grid container size={12} spacing={2} p={3}>
            <Typography variant="h4" textAlign="center">Fetch User by ID</Typography>
            <br />
            <TextField
                label="Enter User ID (1-100)"
                variant="outlined"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                type="number"

                sx={{ my: 2 }}
            />

            <Button sx={{ py: "5px" }} variant="contained" onClick={handleFetchUser}>
                Get User Info
            </Button>

            {error && <Typography color="error" mt={2}>{error}</Typography>}

            {userData && (
                <ul style={{ marginTop: '30px' }}>
                    <li><strong>Name:</strong> {userData.name}</li>
                    <li><strong>Username:</strong> {userData.username}</li>
                    <li><strong>Contact:</strong> {userData.phone}</li>
                </ul>
            )}
        </Grid>
    );
}

export default SingleFatchData;
