import React from 'react'
import axios from 'axios'
import useAxios from '../hooks/useAxios'



const SingleDrill = ({props}) => {
    const [drills,{getDrills}] = useAxios('singledrills/:drill_id')
    return(

        <div>single drill
            {drills.map(({name, distance, shots, setup, partime, actions}) =>(
                <div>{drills.name}</div>
                // <div>{distance}</div>
                // <div>{shots}</div>
                // <div>{setup}</div>
                // <div>{partime}</div>
                // <div>{actions}</div>
                
            ))}
        </div>
        )
}

export default SingleDrill