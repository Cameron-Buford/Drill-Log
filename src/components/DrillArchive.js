import React from 'react'
import axios from 'axios'
import useAxios from '../hooks/useAxios'



const DrillArchive = ({history, props}) => {
    const [drills, {getSingleDrill}] = useAxios('drills')
    console.log(drills)
    return(

    <div>DrillArchive
        {drills.map(({drill_id, name}) => (
            <button onClick = {() => history.push(`/singledrill/${drill_id}`)}>{name}</button>
        ))}
    </div>
    )
}

export default DrillArchive