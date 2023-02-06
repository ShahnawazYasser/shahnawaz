import React from "react";
import '../styles/Main.css';

const Main = () => {


    return (
        <section>
            <div className="main-body">
                <div className="container-coloumn">
                    <div className="container-left">
                        <div>
                            <img src="../assests/ProfilePicture.jpg" className="" />
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="right-content">
                            <h1 className="container-right h1">Shahnawaz Yasser</h1>
                            <h2 className="container-right h2">Creating New Websites Inspires Me…</h2>
                            <p>Hello! Im Shahnawaz, a Pakistan/Northern Cyprus based freelancer. 
                                I do not work with freelancing organizations as they charge more than required. 
                                Thats why I started my own practice; so people can have a choice.
                            </p>
                            <p>I have a diverse set of skills including Web design, 
                                front-end development with HTML, CSS, & JavaScript. 
                                I also create WordPress powered websites for those 
                                who do not need a highly customized website.
                            </p>
                            <icons></icons>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;