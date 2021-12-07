import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    donarButton: {
        background: "linear-gradient(142deg, rgba(140,230,107,1) 0%, rgba(230,231,16,1) 100%)",
        border: "none !important",
        outline: "none !important",
        marginRight: "2rem !important",
        padding: "1rem",
        color: "black",
        fontWeight: "900"
    },
    acceptorButton: {
        outline: "none",
        border: "4px rgba(140,230,107,1) solid !important",
        marginLeft: "2rem",
        padding: "1rem",
        color: "black",
        fontWeight: "900"
    }
})


function RequestFood() {
    const classes = useStyles();
    const [acceptorRegion, setacceptorRegion] = useState("Hyderabad");
    const [search, setsearch] = useState("");
    const [filteredFoodItems, setfilteredFoodItems] = useState([]);
    const H = useHistory();
    const [selectedButton, setselectedButton] = useState({
        one: true,
        two: false,
    });
    const onChangeHandler = (e) => {
        console.log(e.target.value);
        setacceptorRegion(e.target.value);
    }
    const [fooditems, setfooditems] = useState([
    ]);
    const [details, setDetails] = useState({
        phoneNo: "",
        address: "",
        region: "Adilabad"
    });
    const submitFood = async () => {
        const info = { ...details };
        console.log(info);
        try {
            const data = await axios({
                method: "post",
                url: "http://localhost:8000/createrequest/",
                data: info,
                responseType: "json"
            })
            setDetails({
                phoneNo: "",
                address: "",
                region: "Adilabad"
            });
            alert("request successful")
        }
        catch {
            H.push('/error');
        }
    }
    useEffect(async () => {
        try{
            const data = await axios({
                method:"get",
                url:"http://localhost:8000/RequestFood/"+acceptorRegion,
            });
            setfooditems(data.data);
            console.log(data);
        }
        catch{
        }
    },[acceptorRegion]);
    useEffect(async ()=>{
        try{
            const data = await axios({
                method:"get",
                url:"http://localhost:8000/RequestFood/"+acceptorRegion+"?search="+search,
                responseType:"json",
            })
            setfooditems(data.data);
        }
        catch{

        }
        console.log(search);
    }, [search])
    const [requestfood,setrequestfood] = useState(false);

    return (
        <div style={{
            textAlign: "center"
        }}>
            <label for="selectCity" style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                margin: "auto",
                marginTop: "1rem"
            }}>Select the District:</label>
            <select class="form-control" value={acceptorRegion} id="exampleFormControlSelect1" name="selectCity" style={{
                maxWidth: "50rem",
                margin: "auto",
                marginTop: "2rem",
                marginBottom: "4rem"
            }} onChange={(e)=>{onChangeHandler(e)}}>
                <option value="Adilabad">Adilabad</option>
                <option value="Bhadradri Kothagudem">Bhadradri Kothagudem</option>
                <option value="Hyderabad" selected>Hyderabad</option>
                <option value="Jagitial">Jagitial</option>
                <option value="Jangaon">Jangaon</option>
                <option value="Jayashankar Bhupalpally">Jayashankar Bhupalpally</option>
                <option value="Jogulamba Gadwal">Jogulamba Gadwal</option>
                <option value="Kamareddy">Kamareddy</option>
                <option value="Karimnagar">Karimnagar</option>
                <option value="Khammam">Khammam</option>
                <option value="Komaram Bheem">Komaram Bheem</option>
                <option value="Mahabubabad">Mahabubabad</option>
                <option value="Mahabubnagar">Mahabubnagar</option>
                <option value="Mancherial">Mancherial</option>
                <option value="Medak">Medak</option>
                <option value="Medchal–Malkajgiri">Medchal–Malkajgiri</option>
                <option value="Mulugu">Mulugu</option>
                <option value="Nagarkurnool">Nagarkurnool</option>
                <option value="Narayanpet">Narayanpet</option>
                <option value="Nalgonda">Nalgonda</option>
                <option value="Nirmal">Nirmal</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="Peddapalli">Peddapalli</option>
                <option value="Rajanna Sircilla">Rajanna Sircilla</option>
                <option value="Ranga Reddy">Ranga Reddy</option>
                <option value="Sangareddy">Sangareddy</option>
                <option value="Siddipet">Siddipet</option>
                <option value="Suryapet">Suryapet</option>
                <option value="Vikarabad">Vikarabad</option>
                <option value="Wanaparthy">Wanaparthy</option>
                <option value="Warangal Rural">Warangal Rural</option>
                <option value="Warangal Urban">Warangal Urban</option>
                <option value="Yadadri Bhuvanagiri">Yadadri Bhuvanagiri</option>
            </select>
            <input className=" mb-4" placeholder="Search 🔍" onChange={(e)=>{setsearch(e.target.value)}} style={{
                padding: "8px",
                outline: "none",
                width: "50vw",
                textAlign: "center",
                fontSize: "1.2rem",
            }}></input>
                <Button variant="outlined" color="secondary" className={classes.acceptorButton} onClick={
                    ()=>{
                        setrequestfood((pre)=>!pre);
                    }
                }>
                    {(!requestfood)?"Request Food":"Search Requestors"}
                </Button>
            {
                (requestfood) ?
                <div style={{
                    display: selectedButton.one ? "block" : "none",
                }}>
                    <p style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontWeight: "900",
                        fontSize: "2rem",
                        marginBottom: "3px"
                    }}>Fill the Following Form to make a Donation!</p>
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
                        {/* <div class="form-group m-4">
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
                        </div> */}
                        <div class="form-group m-4">
                            <label for="phone" style={{
                                fontWeight: "900"
                            }}>Phone Number</label>
                            <input type="tel" value={details.phoneNo} onChange={(e) => {
                                setDetails((pre) => ({ ...pre, phoneNo: e.target.value }));
                            }} class="form-control" id="phone" name="phone"
                                pattern="[0-9]{10}"
                                required></input>
                            <div class="invalid-tooltip">
                                Please Enter your Proper Mobile Number to contact you!
                            </div>
                        </div>
                        <div class="form-group m-4">
                            <label for="address" style={{
                                fontWeight: "900"
                            }}>Enter Your Address</label>
                            <input type="text" class="form-control" value={details.address} onChange={(e) => {
                                setDetails((pre) => ({ ...pre, address: e.target.value }));
                            }}
                                id="address" required></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1" style={{
                                fontWeight: "900"
                            }}>Select Your Region</label>
                            <select class="form-control" id="exampleFormControlSelect1" value={details.region} onChange={(e) => {
                                setDetails((pre) => ({ ...pre, region: e.target.value }));
                            }} >
                                <option>Adilabad</option>
                                <option>Bhadradri Kothagudem</option>
                                <option>Hyderabad</option>
                                <option>Jagitial</option>
                                <option>Jangaon</option>
                                <option>Jayashankar Bhupalpally</option>
                                <option>Jogulamba Gadwal</option>
                                <option>Kamareddy</option>
                                <option>Karimnagar</option>
                                <option>Khammam</option>
                                <option>Komaram Bheem</option>
                                <option>Mahabubabad</option>
                                <option>Mahabubnagar</option>
                                <option>Mancherial</option>
                                <option>Medak</option>
                                <option>Medchal–Malkajgiri</option>
                                <option>Mulugu</option>
                                <option>Nagarkurnool</option>
                                <option>Narayanpet</option>
                                <option>Nalgonda</option>
                                <option>Nirmal</option>
                                <option>Nizamabad</option>
                                <option>Peddapalli</option>
                                <option>Rajanna Sircilla</option>
                                <option>Ranga Reddy</option>
                                <option>Sangareddy</option>
                                <option>Siddipet</option>
                                <option>Suryapet</option>
                                <option>Vikarabad</option>
                                <option>Wanaparthy</option>
                                <option>Warangal Rural</option>
                                <option>Warangal Urban</option>
                                <option>Yadadri Bhuvanagiri</option>
                            </select>
                        </div>
                        <div class="form-check mt-3 mb-3">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" required></input>
                            <label class="form-check-label" for="exampleCheck1">I'll be availiable when people contact me!</label>
                        </div>
                        <button type="submit" class="btn btn-outline-primary" onClick={submitFood}>Submit</button>
                    </form>
                </div>:
                <div className="container">
                    <div class="row p-3">
                        {fooditems.map((value)=>{
                            if(value.region===acceptorRegion){
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
                                            Requested Person Details:
                                        </h4>
                                        {/* <h3><span style={{fontWeight: "900"}}>Name: </span>{value.name}</h3> */}
                                        <p className="text-center"><span style={{fontWeight: "900"}}>Address: </span>{value.address}</p>
                                        <p className="text-center"><span style={{fontWeight: "900"}}>Contact:</span> {value.phoneNo}</p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default RequestFood
