
import React from "react";

function Personal() {
    return (
        <div className="section">
            <h2>Charbel Boutros</h2>
            <p>Luxembourg, Luxembourg</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/charbel-boutros-32b38272/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/boutroscharbel" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="mailto:charbel.boutros.dev@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                <a href={require("./Resume-Charbel-Boutros.pdf")} download="Resume-Charbel-Boutros" target="_blank">
                    <i className="fas fa-download"></i>
                </a>
            </div>
        </div>
    );
}

export default Personal;