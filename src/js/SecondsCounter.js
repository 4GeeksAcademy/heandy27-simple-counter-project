import React from "react";

const SecondsCounter = (props) => {
    return (
        <div className="container  d-flex justify-content-around align-items-center py-3" style={{height: "160px", backgroundColor: "blue"}}>
            <div className="row gap-5">
            <div className="col-1 rounded bg-primary d-flex justify-content-around align-items-center fs-1 text-light" style={{height: "125px", width: "80px"}}><i class="fa-regular fa-clock"></i></div>
            <div className="col-1 rounded bg-primary d-flex justify-content-around align-items-center fs-1 text-light" style={{height: "125px", width: "80px"}}>{props.hour2}</div>
            <div className="col-1 rounded bg-primary d-flex justify-content-around align-items-center fs-1 text-light" style={{height: "125px", width: "80px"}}>{props.hour1}</div>
            <div className="col-1 rounded bg-primary d-flex justify-content-around align-items-center fs-1 text-light" style={{height: "125px", width: "80px"}}>{props.minutes2}</div>
            <div className="col-1 rounded bg-primary d-flex justify-content-around align-items-center fs-1 text-light" style={{height: "125px", width: "80px"}}>{props.minutes1}</div>
            <div className="col-1 rounded bg-primary d-flex justify-content-around align-items-center fs-1 text-light" style={{height: "125px", width: "80px"}}>{props.seconds2}</div>
            <div className="col-1 rounded bg-primary d-flex justify-content-around align-items-center fs-1 text-light" style={{height: "125px", width: "80px"}}>{props.seconds1}</div>
            </div>
        </div>

    );
}

export default SecondsCounter;