import React, { useState,useEffect } from 'react';
import './DonarDonations.css';
import axios from 'axios';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
    donarToggleButtonsSelect: {
        background: "#fff !important",
        color: "black",
        outline: "none",
        border: "4px red solid"
    }
})


function DonarDonations(props) {
    const classes = useStyles(props);
    const H = useHistory();
    const [alignment, setAlignment] = useState('left');
    const [selectedButton, setselectedButton] = useState({
        one: true,
        two: false,
    });
    const handleToogleButton = () => {
        setselectedButton({
            one: !selectedButton.one,
            two: !selectedButton.two,
        })
    }
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [ondel,setondel] =  useState(true);
    const [donationsList, setstatedonationsList] = useState([
        // {
        //     name: "Damon Salvator",
        //     email: "damon@gmail.com",
        //     phone: "1234567890",
        //     food: "I have Human Blood!",
        //     address: "I live here and there!",
        //     region: "Hyderabad",
        // },
        // {
        //     name: "Damon Salvator",
        //     email: "damon@gmail.com",
        //     phone: "1234567890",
        //     food: "I have Human Blood!",
        //     address: "I live here and there!",
        //     region: "Hyderabad",
        // },
        // {
        //     name: "Damon Salvator",
        //     email: "damon@gmail.com",
        //     phone: "1234567890",
        //     food: "I have Human Blood!",
        //     address: "I live here and there!",
        //     region: "Hyderabad",
        // },
    ]);
    useEffect(async () => {
        try {
            const details = JSON.parse(localStorage.getItem('details'));
            console.log(details);
            console.log("hiii");
            const data = await axios({
                method: "get",
                url: "https://appetite3.herokuapp.com/getdonoritems/"+details.email,
                // headers: { "Authorization": "Token adfe0edfc08a10144a7a0ff50177f271bfca3848" },
                headers:{"Authorization":"Token d27e2be02e4f641be9039972cf59497fbcb0fe9d"},
                data: details,
                responseType: "json"
            });
            // console.log(data.data);
            setstatedonationsList(data.data);
            console.log("success");
        }
        catch {
            console.log("failure");
        }
    },[ondel]);
    const deleteFood = async (id) => {
        try{
            const data =  await axios({
                method:"delete",
                url:"https://appetite3.herokuapp.com/deletedonoritem/"+id,
                headers: { "Authorization":"Token d27e2be02e4f641be9039972cf59497fbcb0fe9d"},
                responseType:"json"
            })
            setondel((pre)=>!pre);
        }
        catch{
        }
    }
    return (
        <div>
            <div style={{
                textAlign: "center",}}>
                <h1 style={{
                    fontFamily: "'Abril Fatface', cursive",
                    letterSpacing: "0px !important",
                    fontSize: "4rem",
                    wordSpacing: "4px",
                    background: "linear-gradient(142deg, rgba(198,230,107,1) 0%, rgba(80,192,246,1) 100%)",
                    padding: "2rem",
                    color: "#000000"
                }}>Make a Donation and help us Fight Hunger</h1>
                <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                    <Link></Link>
                    <ToggleButton onClick={() => {
                        H.push('/donarform');
                    }} selected={selectedButton.one} value="center" className={`${classes.donarToggleButtons} ${selectedButton.one ? "donarToggleButtonsSelect" : ""}`}>
                        Give a Donations
                    </ToggleButton>
                    <ToggleButton onClick={() => {
                        H.push('/DonarDonations');
                    }} selected={selectedButton.two} value="right" className={classes.donarToggleButtons}>
                        Your Donations
                    </ToggleButton>
                    <ToggleButton onClick={() => {
                        localStorage.removeItem('details');
                        H.push('/');
                    }} selected={selectedButton.two} value="right" className={classes.donarToggleButtons}>
                        logout
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="container">
                <div class="row p-2">
                    {donationsList.map((value)=>{
                        return(
                            <div className="col-md-3 rounded-lg mx-auto mb-4 p-3" style={{
                                cursor: "pointer",
                                backgroundColor: "#4d5249",
                                color: "#fff",
                                boxShadow:"0 0 2rem 0 #aaa",
                                borderRadius:"30px"
                            }}>
                                <h4 className="mr-auto" style={{
                                    textAlign: "center",
                                }}>
                                    Donar Details:
                                </h4>
                                {/* <h3><span style={{fontWeight: "900"}}>Name: </span>{value.name}</h3> */}
                                <p className="text-center"><span style={{fontWeight: "900"}}>Email: </span>{value.email}</p>
                                <p className="text-center"><span style={{fontWeight: "900"}}>Food:</span> {value.foodType}</p>
                                <p className="text-center"><span style={{fontWeight: "900"}}>Address: </span>{value.address}</p>
                                <p className="text-center"><span style={{fontWeight: "900"}}>Contact:</span> {value.phoneNo}</p>
                                <p className="text-center mb-0" onClick={()=>deleteFood(value.id)}><button className="btn btn-danger">delete</button></p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default DonarDonations;
