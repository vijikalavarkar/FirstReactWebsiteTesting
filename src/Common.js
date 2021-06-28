import React, { useState } from 'react' 
import './Home.css'
import { NavLink } from 'react-router-dom'
// import Lense from '../src/Images/camera2.png'

export default function Common(props) {

    const CurrentTime = new Date().toLocaleTimeString()
    const greet = new Date().getHours()
    let greeting = '';
    let styleGreetcolor = {}

    console.log(greet)
    if(greet >= 1 && greet <12){
        greeting = "Good Morning"
        styleGreetcolor.color ="Green"
    }else if(greet >=12 && greet <19){
        greeting = "Good Afternoon"
        styleGreetcolor.color ="Orange"
    }else{
        greeting = "Good Night"
        styleGreetcolor.color ="red"
    }
    

    const [Timer, setTimer] = useState(CurrentTime)

    function UpdateTime(){
        const Time = new Date().toLocaleTimeString()
        setTimer(Time)
    }


    setInterval(UpdateTime,1000)
    
    return (
        <>
            


    
           <div className="main_home">
            <div className="container-fluid">
                <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-12 sec1Home">

                            <div className="timeGreet">
                                <div className="Timer">
                                      <h1>{Timer}</h1> 
                                </div>

                                <div className="Greeeting">
                                    <h4 style={styleGreetcolor}>{greeting}</h4>
                                </div>
                            
                            </div>
                            
                            <h1>{props.name1}<strong>{props.name2}</strong></h1>
                            <h3>{props.desc}</h3>
                            <NavLink className="btn_get_started" to={props.visit}>{props.getButton}</NavLink>
                        </div>

                        <div className="col-lg-6 col-12 sec2Home">
                            <img src={props.CamLense} alt="LenseHome" className="homeImage"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        </>
    )
}
