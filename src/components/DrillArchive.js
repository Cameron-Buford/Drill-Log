// import React from 'react'
// import axios from 'axios'
// import useAxios from '../hooks/useAxios'
// import useParams from 'react-router-dom'



// const DrillArchive = ({history, props}) => {
//     const {drills} = useAxios('drill')
//     console.log(drills)
//     return(

//     <div>DrillArchive
//         {drills.map(({drill_id, name}) => (
//             <button onClick = {() => history.push(`/singledrill/${drill_id}`)}>{name}</button>
//         ))}
//     </div>
//     )
// }

// export default DrillArchive



import React from 'react'
import useAxios from '../hooks/useAxios'
import {useHistory} from 'react-router-dom'


const DrillArchive = ()=>{
const {drills} = useAxios('drill')
const {push} = useHistory()
return(
<div className = 'drillcontainer'> 
    <div className = 'drilllist'>
        {drills.map(({drill_id, name})=>(
            <button className = 'drillbuttonstyle' onClick = {()=> push(`/singledrill/${drill_id}`)}>{name}</button>
        ))}
    </div>
</div>
    )
}
export default DrillArchive