import React, {useState} from 'react';
import './signin.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DonarDonations from '../DonarDonations/DonarDonations.jsx';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    donarToggleButtons: {
        margin: "2rem 1rem",
        padding: "11px",
        backgroundColor: "#000000",
        color: "#fff",
        outline: "none",
        border: "none",
        background: "linear-gradient(142deg, rgba(198,230,107,1) 0%, rgba(80,192,246,1) 100%)",
    },
    donarToggleButtonsSelect:{
        background: "#fff !important",
        color: "black",
        outline: "none",
        border: "4px red solid"
    }
})

function Signup(props) {
    const H = useHistory();
    const [alignment, setAlignment] = useState('left');
    const [selectedButton, setselectedButton] = useState({
        one: true,
        two: false,
    });
    const handleToogleButton= () => {
        setselectedButton({
            one: !selectedButton.one,
            two: !selectedButton.two,
        })
    }
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [details,setDetails] = useState({
        email:"",
        password:""
    });
    const classes = useStyles(props);
    const login = async (e) => {
        e.preventDefault();
        try{
            const data = await axios({
                method:"post",
                url:"http://localhost:8000/donorexists/",
                headers:{"Authorization":"Token adfe0edfc08a10144a7a0ff50177f271bfca3848"},
                data:details,
                responseType:"json"
            });
            console.log(data.data);
            if(data.data["msg"]){
                localStorage.setItem("details",JSON.stringify(details));
                console.log(JSON.parse(localStorage.getItem("details")));
                console.log("hii");
                H.push('/donarform');
            }
        }
        catch{
        }
    }
    return (
        <Router>
            <div style={{
                textAlign: "center",

            }}>
            <h1 style={{
                    fontFamily: "'Abril Fatface', cursive",
                    letterSpacing: "0px !important",
                    fontSize: "4rem",
                    wordSpacing: "4px",
                    background: "linear-gradient(142deg, rgba(198,230,107,1) 0%, rgba(80,192,246,1) 100%)",
                    padding: "2rem",
                    color: "#000000"
                }}>login to make ur donations</h1>
                <div style={{
                    display: selectedButton.one?"block":"none",
                }}>
                    <p style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontWeight: "900",
                        fontSize: "2rem",
                        marginBottom: "3px"
                    }}>Enter email and password to make a Donation!</p>
                    <p>(You to be in Telangana To do the donation)</p>
                    <form style={{
                        width: "80vw",
                        margin: "auto",
                        border: "2px solid black",
                        padding: "1rem",
                        borderRadius: "10px",
                        marginTop: "4rem",
                        marginBottom: "3rem"
                    }}>
                        {/* <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name of the Donar" required></input>
                            </div>
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Last name of the Donar" required></input>
                            </div>
                        </div> */}
                        <div class="form-group m-4">
                            <label for="exampleInputEmail1" style={{
                                fontWeight: "900"
                            }}>Email address</label>
                            <input type="email" value={details.email} onChange={(e)=>{
                                setDetails((pre)=>({...pre,email:e.target.value}));
                            }} 
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>    
                            <div class="invalid-tooltip">
                                Please Enter you Email to for the Acceptor to Contact
                                </div>
                        </div>
                        <div class="form-group m-4">
                            <label for="phone" style={{
                                fontWeight: "900"
                            }}>Password</label>
                            <input type="password" value={details.password} onChange={(e)=>{
                                setDetails((pre)=>({...pre,password:e.target.value}));
                            }} class="form-control" id="phone" name="phone"
                                placeholder="Enter your password"
                            required></input>
                            <div class="invalid-tooltip">
                                Please Enter your password
                            </div>
                        </div>
                        <p onClick={()=>H.push('/signup')}>does not have an account?</p> 
                        <button type="submit" class="btn btn-primary" onClick={login}>Signin</button>
                    </form>
                </div>
                <div style={{
                    display: selectedButton.two?"block":"none",
                }}>
                </div>
            </div>
        </Router>
    )
}

export default Signup;
