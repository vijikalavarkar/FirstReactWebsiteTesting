import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Service.css"

export default function Card(props) {
    return (
        <>
            

                <div className="main_service">
                    <div className="conatiner-fluid">
                        <div className="row">
                            <div className="col-lg-10 mx-auto ">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12 mx-auto ">
                                    <div className="card">
                                        <img src={props.imgsrc} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{props.title}</h5>
                                                <p className="card-text">{props.info}</p>
                                                <NavLink to="/About" className="btn btn-primary">{props.gosomewhere}</NavLink>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
