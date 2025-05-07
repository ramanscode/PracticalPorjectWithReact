import { Button, Grid, Typography } from "@mui/material"
import { useState } from "react"
function FormHandling() {
    // const [user, setUser] =useState('') // ye single value ke liye haain
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Address: ""
    })
    // const [show, setShow] = useState(false)
    const HandleData = () => {

        if (!user.Name || !user.Email || !user.Address) {
            alert("Please fill all the fields")
        }
    else{
        console.log(user);
        setUser({
            Name:"",
            Email:"",
            Address:""
        })
    }
    }

    // console.log(user);
    // setUser({
    //     Name: "",
    //     Email: "",
    //     Address: ""
    // })

    // setShow(true) mein jb iska use krunga tb uper mein jo setUser han wo bhi use hoga and isse kya hoga ki data fill hote hi khali bhi ho jayega 




    return (
        <>
            <Grid >
                <Typography variant="h1" textAlign={"center"} p={5} >  Form Handling</Typography>

                <Grid container spacing={2} justifyContent="center" alignItems="center" py={10}>
                    <input required type="text" placeholder="Enter Your Name" value={user.Name} onChange={(e) => setUser({ ...user, Name: e.target.value })} style={{ fontSize: "20px", width: "200px", }} /> <br />

                    <input required type="Email" placeholder="Enter Your email" value={user.Email} onChange={(e) => setUser({ ...user, Email: e.target.value })} style={{ fontSize: "20px", width: "200px" }} />

                    <br />
                    <input required type="text" placeholder="Enter Your Address" value={user.Address} onChange={(e) => setUser({ ...user, Address: e.target.value })} style={{ fontSize: "20px", width: "200px" }} /> <br />

                    <Grid sx={{ m: "50px" }}>
                        <Button variant="contained" onClick={HandleData} style={{ fontSize: "20px", width: "200px" }}> View Data </Button>
                    </Grid>

{/* 
                    <Grid container spacing={2} justifyContent="center" alignItems="center" py={10} width={500} >

                        {
                            show &&

                            <Grid sx={{ border: "1px solid black", borderRadius: "10px", backgroundColor: "#f0f0f0", width: "500px", height: "auto", padding: "20px" }}>
                                <h1 style={{ textAlign: "center" }}> User Data </h1>
                                <h1> Name :{user.Name} </h1>
                                <h1> Email :{user.Email} </h1>
                                <h1> Address :{user.Address} </h1>
                            </Grid>
                        }
                    </Grid> */}





                </Grid>




                {/* <Grid container spacing={2} justifyContent="center" alignItems="center" py={10}>
                    <h1> Name : {user.Name} </h1>
                    <h1> Email : {user.Email} </h1>
                    <h1> Address : {user.Address} </h1>
                </Grid>
 */}


            </Grid>





        </>
    )
}

export default FormHandling



























// import { Button, Grid } from "@mui/material"
// import { useState } from "react";
// function FormHandling() {
//     // const [User, setUser] = useState("")
//     // console.log("User", { User });
//     // const [User, setUser] = useState('')
//     const [User, setUser] = useState(
//         {
//             fullName: "", Email: "", Password: ""
//         }
//     )
//     const Handledata = () => {
//         console.log(User);
//         setUser({
//             fullName: "", Email: "", Password: ""
//         })
//     }
//     return (
//         <>
//             <Grid container spacing={2} justifyContent="center" alignItems="center" py={10}>
//                 <Grid sx={{ m: "10px" }}>
//                     <h1> Form Handling </h1> <br />
//                     {/* <label style={{ fontSize: "20" }} htmlFor=""> Full Name </label> */}
//                     <input type="text" placeholder="Enter Your Name" value={User.fullName} onChange={(e) => setUser({ ...User, fullName: e.target.value })} style={{ fontSize: "30px", marginBottom: 5 }} /> <br />


//                     <input type="email" placeholder="Enter Your Email" value={User.Email} onChange={(e) => setUser({ ...User, Email: e.target.value })} style={{ fontSize: "30px", marginBottom: 5 }} /> <br />

//                     <input type="password" placeholder="Enter Your Password" value={User.Password} onChange={(e) => setUser({ ...User, Password: e.target.value })} style={{ fontSize: "30px", }} />
//                     <br />
//                     <h1> FullName : {User.fullName} <br /> Email : {User.Email} <br /> Password :{User.Password} </h1>
//                     <Button variant="contained" onClick={Handledata}  > View Data </Button>
//                 </Grid>


//                 {/* <Grid>
//                     <label style={{ fontSize: "20" }} htmlFor=""> Full Name </label>
//                     <input type="text" placeholder="Enter Your Name" onChange={(e) => setUser(e.target.value)} value={User} style={{ fontSize: "30px" }} />

//                     <label htmlFor=""> Write Here </label>
//                     <input value={User} onChange={(e) => setUser(e.target.value)}
//                         style={{ width: "250px", height: "30px" }}
//                         type="text " placeholder="" />
//                 </Grid> */}
//             </Grid>

//         </>
//     )
// }

// export default FormHandling


