import React, { Component } from 'react'

import '../mock/index'
import axios from 'axios'

export default class List extends Component {
    state = { data: [] }
    componentDidMount() {
        axios.get('/list').then(({ data }) => {
            this.setState({ data })
        })
    }
    render() {

        let { list } = this.state.data
        
        return (
            <>
                {
                  
                }
            </>
        )
    }
}
