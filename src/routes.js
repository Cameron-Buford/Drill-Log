import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import CreateDrill from './components/CreateDrill'
import Dashboard from './components/Dashboard'
import DrillArchive from './components/DrillArchive'
import MyDrills from './components/MyDrills'
import MyTraining from './components/MyTraining'
import SingleDrill from './components/SingleDrill'
import Stats from './components/Stats'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/drills' component={DrillArchive}/>
        <Route path='/mytraining' component={MyTraining}/>
        <Route path='/mydrills' component={MyDrills}/>
        <Route path='/createdrill' component={CreateDrill}/>
        <Route path= '/stats/:mydrill_id' component= {Stats}/>
        <Route path= '/singledrill/:drill_id' component= {SingleDrill}/>
    </Switch>
);