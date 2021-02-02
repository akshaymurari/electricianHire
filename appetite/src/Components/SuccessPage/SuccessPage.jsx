import React from 'react';
import './SuccessPage.scss'

function SuccessPage() {
    return (
        <div style={{
            textAlign: "center",
            display: "flex",
            alignContent: "center",
            height: "100vh",
            width: "100vw",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <h1 style={{
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: "4rem",
                width: "75vw",
                margin: "0 auto",
                color: "#98eb56",
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                marginBottom: "2rem",
            }}>We have Successfully Added your food to the Donation List 🎉🎊</h1>
            <p style={{
                marginTop: "2rem",
                fontSize: "2rem",
                fontWeight: "800",
            }}>Thanks for your support Toward erradicating Hunger for the society</p>
        </div>
    )
}

export default SuccessPage;
