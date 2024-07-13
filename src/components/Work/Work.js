import React from "react";

function Work() {
    return (
        <div className="section">
            <h2>Work Experience</h2>
            <div className="job">
                <div className="job-title">Technical Lead - Solution Architect</div>
                <div className="job-details">Deloitte, Luxembourg</div>
                <div className="job-duration">March 2023 – Present</div>
            </div>

            <div className="job">
                <div className="job-title">Technical Lead</div>
                <div className="job-details">Bottomline Technologies, Kaslik, Lebanon</div>
                <div className="job-duration">June 2021 – September 2022</div>
            </div>
            <div className="job">
                <div className="job-title">Team Lead / Senior Developer</div>
                <div className="job-details">Pinpay, Beirut, Lebanon</div>
                <div className="job-duration">May 2018 – June 2021</div>
            </div>
        </div>
    );
}

export default Work;
