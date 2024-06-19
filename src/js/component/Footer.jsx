import React from "react";

const Footer = () => {
    return (
        <div>
             <section className="border-bottom border-secondary border-2">
                <div>
                </div>
            </section>

            <footer className="w-100 d-flex align-items-center justify-content-center flex-wrap bg-black" target="blank">
                <div>
                    <p className="fs-5 px-3 pt-3 text-white">RogerManrique_ &copy; Copyright 2024</p>
                </div>
                <div>
                    <a href="https://es-es.facebook.com/"><i className="bi bi-facebook text-white"></i></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-instagram text-white"></i></a>
                    <a href="https://www.twitter.com/"><i className="bi bi-twitter text-white"></i></a>
                </div>
            </footer>
        </div>
       
    );
};

 
export default Footer;
