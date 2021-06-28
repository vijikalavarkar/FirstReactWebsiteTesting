import React from 'react' 
import Common from './Common'
import Lense from '../src/Images/camera2.png'

export default function Home() {

    return (
        <>  
            <Common visit="/Service" name1="Welcome to " name2="OMG VIPER" desc="Its All About Photography" getButton="Get Started" CamLense={Lense}/>

        </>
    )
}
