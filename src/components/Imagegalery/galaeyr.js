import React from "react";
import IMAGE1 from "../../Assets/Galary2.jpeg"
import IMAGE2 from "../../Assets/Galey1.jpeg"
import IMAGE3 from "../../Assets/Galary3.jpeg"
import IMAGE4 from "../../Assets/Galary4.jpeg"
import IMAGE5 from "../../Assets/Galary6.jpeg"
import IMAGE6 from "../../Assets/Galary5.jpeg"



const Imagegallry = () => {
    return (
        <>
            <div style={{width:"100%"}}>

                <div className="Garylybox">

                    <div className="imagebox">
                        <img src={IMAGE1} style={{width:"100%",height:"100%"}} />


                    </div>
                    <div className="imagebox">
                        <img src={IMAGE5} style={{width:"100%",height:"100%"}} />


                    </div>
                    <div className="imagebox">
                        <img src={IMAGE4} style={{width:"100%",height:"100%"}} />


                    </div>
                    <div className="imagebox">
                        <img src={IMAGE3} style={{width:"100%",height:"100%"}} />


                    </div>
                    <div className="imagebox">
                        <img src={IMAGE2} style={{width:"100%",height:"100%"}} />


                    </div>
                


                </div>
            </div>

        </>
    )
}

export default Imagegallry