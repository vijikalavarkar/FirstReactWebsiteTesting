import React from 'react'
import Card from './Card'
import { Sdata } from './Sdata'


export default function Service() {
    return (
        <>
           
                
                                    {Sdata.map((Value)=>{
                                         return(
                                               <Card imgsrc={Value.imgsrc} 
                                                     title={Value.title} 
                                                        info={Value.info} 
                                                     gosomewhere={Value.gosomewhere}/>
                )
                                              })}
                                  
            
        </>
    )
}
