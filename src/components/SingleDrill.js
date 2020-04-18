import React, {useEffect, useSingle, useState} from 'react'
import axios from 'axios'
import useAxios from '../hooks/useAxios'
import {useParams} from 'react-router-dom'



const SingleDrill = (props) => {
    const {drill_id} = useParams()
    const {drill} = useAxios('drill', drill_id)
    
    // console.log(req.params)
    return(


        <div> single drill
    {/* {drill(({drill_id, name, distance, shots, setup, partime, actions})=>( */}
        <div key={drill_id}>
            <div>{drill.name}</div>
            <div>{drill.distance}</div>
            <div>{drill.shots}</div>
            <div>{drill.setup}</div>
            <div>{drill.partime}</div>
            <div>{drill.actions}</div>
        </div>
    {/* ))} */}
</div>
        )
}

export default SingleDrill