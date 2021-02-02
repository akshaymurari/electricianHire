import React from 'react';
import './MainLandingPage.scss';
import BackGroundg from '../../assets/background1.jpg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import DonarForm from '../../Components/DonarForm/donarForm';
import AcceptorPage from '../../Components/AcceptorPage/AcceptopPage';

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

function MainLandingPage(props) {
    const classes = useStyles(props);
    return (
        <>
        <div className="mainLandingPage b-0" style={{backgroundImage: `url(${BackGroundg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", filter: "blur(3px)"}}>
        </div>
        <div className="mainLandingPageContent">
            <div style={{
                marginBottom: "4rem"
            }}>
                <h1 style={{
                    margin: "0 auto",
                    fontFamily: "Spicy Rice, cursive",
                    fontSize: "6rem",
                    color: "#000000",
                    letterSpacing: "2px",
                }}>Welcome to Appetite</h1>
                <p style={{
                    fontFamily: "Open Sans Condensed, sans-serif",
                    fontSize: "2rem",
                    margin: "0 auto",
                    color: "#fff",
                    fontWeight: "900",
                }}>We’re wrestling hunger to the ground</p>
            </div>
            <div>
                <Link to="/signin">
                    <Button variant="contained" color="secondary" className={classes.donarButton}>
                        Donate Food
                    </Button>
                </Link>
                <Link to="/acceptorpage">
                    <Button variant="outlined" color="secondary" className={classes.acceptorButton}>
                        Accept Food
                    </Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default MainLandingPage;
