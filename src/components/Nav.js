import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getUser} from '../Duxx/reducer'


const Nav = ({history}) => {
    return(

        <div>
            DRILL LOG
            <button onClick = {() => history.push('/')} >home</button>
            <button onClick = {() => history.push('drills')}>drill archive</button>
            <button onClick = {() => history.push('mytraining')}>my training</button>
            
        </div>
        )
}

export default (withRouter(Nav))