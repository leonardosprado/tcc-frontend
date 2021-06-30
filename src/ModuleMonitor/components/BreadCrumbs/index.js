import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from './styles'

export default function BreadCrumbs(props) {
    return (
        <Component>
            {props.rotas.map((item,id)=>(
                <li key={id}><Link to={item.link}>{item.rota}</Link></li>
            ))}
        </Component>
    )
}
