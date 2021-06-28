import React from 'react'
import Common from './Common'
import Lense2 from '../src/Images/camera.png'

export default function About() {
    return (
        <>
            <Common visit="/Contact" name1="Its" name2=" My Swag" desc="Its All About my Information" getButton="Contact Me" CamLense={Lense2}/>
        </>
    )
}
