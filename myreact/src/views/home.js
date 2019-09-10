import React, { Component } from 'react'
import Header from '../compon/Header'
import Tab from '../compon/Tab'
import List from '../compon/List'

export default class home extends Component {
    render() {
        return (
            <>
                <Header />
                <Tab /> 
                <List/>
            </>
        )
    }
}
