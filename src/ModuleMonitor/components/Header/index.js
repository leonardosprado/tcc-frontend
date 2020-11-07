import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Head } from './styles'

import ImageLetramento from '../../../assets/img/teacher-board.png';

export default class Header extends Component {
    render() {
        return (
            <Head>
                <div>
                    <div className="logo"><h2>Apoio ao Letramento</h2></div>
                    <ul>
                        <li><Link to="/monitor/">Inicio</Link></li>
                        <li><Link to="/monitor/atividades">Minha Conta</Link></li>
                        <li><Link to="/monitor/atividades">Atividades</Link></li>
                        <li><Link to="/monitor/aprendiz">Aprendiz</Link></li>
                        <li><Link to="/monitor/monitor">Monitor</Link></li>
                    </ul>
                </div>
                <img src={ImageLetramento} />
            </Head>
        )
    }
}
