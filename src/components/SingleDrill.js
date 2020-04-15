import React, {useEffect, useSingle, useState} from 'react'
import axios from 'axios'
import useAxios from '../hooks/useAxios'



const SingleDrill = ({history, props}) => {
    const [drills] = useSingle('/api/singledrill/:drill_id')
    console.log(drills)
    return(


        <div>single drill
            {
                drills.map(drill => {
                    return (
                        <div>{drill.name}</div>
                        // <div>{drills.drill_id}</div>
                        // <div>{distance}</div>
                        // <div>{shots}</div>
                        // <div>{setup}</div>
                        // <div>{partime}</div>
                        // <div>{actions}</div>
                
                )})}
        </div>
        )
}

export default SingleDrill