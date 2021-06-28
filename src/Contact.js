import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {

    const [detail, setDetail] = useState({
        fname : '',
        lname : '',
        phone : '',
        email : ''

    })

    function userInput(e){
        
        const {name, value} = e.target;

        setDetail((PrevData)=>{
            return {
                ...PrevData,
                [name] : value
            }
        })
        console.log(detail)
    }

    function Submit(e){
        e.preventDefault();
        alert(`First Name: ${detail.fname} Last Name is: ${detail.lname} Phone:${detail.phone} Email : ${detail.email} was submitted Successfully I hope he will replay ❤❤❤ ` )
    }

    return (
        <>
            <div className="Main_contact"> 
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 col-12 mx-auto">
                            <h1 className="text-center py-4 display-6">Contact Me</h1>

                            
                            <input type="text" className="form-control text-center" name="fname" value={detail.fname} onChange={userInput} placeholder="First Name" aria-label="Username"></input><br />
                            <input type="text" className="form-control text-center" name="lname" value={detail.lname} onChange={userInput} placeholder="Last Name" aria-label="Lastname"></input><br />
                            <input type="text" className="form-control text-center" name="phone" value={detail.phone} onChange={userInput} placeholder="Phone" aria-label="Phone"></input><br />
                            <input type="text" className="form-control text-center" name="email" value={detail.email} onChange={userInput} placeholder="Email" aria-label="email"></input><br />
                            <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
