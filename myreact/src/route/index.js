import React, { Component } from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'

import Home from '../views/home'
import My from '../views/my'
import Hot from '../views/hot'
import Jin from '../views/jinpin'
import Fen from '../views/fenlei'


export default class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/home/hot' component={Hot}></Route>
                    <Route path='/home/jin' component={Jin}></Route>
                    <Route path='/home/fen' component={Fen}></Route>
                    <Route path='/home/my' component={My}></Route>
                    <Redirect  to='/home/hot' />
                </Switch> 
            </BrowserRouter>
        )
    }
}
