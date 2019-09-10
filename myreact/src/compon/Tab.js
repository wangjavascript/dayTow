import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Tab extends Component {
    render() {
        return (
            <div className='tab'>
                <NavLink to='/home/my'>我的</NavLink>   
                <NavLink to='/home/hot'>热门</NavLink>   
                <NavLink to='/home/jin'>精品</NavLink>   
                <NavLink to='/home/fen'>分类</NavLink>   
            </div>
        )
    }
}
