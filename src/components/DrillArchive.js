import React from 'react'
import axios from 'axios'
import useAxios from '../hooks/useAxios'



const DrillArchive = (props) => {
    const [drills, {getDrills}] = useAxios('drills')
    return(

    <div>DrillArchive
        {drills.map(({name}) => (
            <div>{name}</div>
        ))}
    </div>
    )
}

export default DrillArchive