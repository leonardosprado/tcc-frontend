import React, { Component } from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import { Head, HeadMobile } from './styles'

import ImageLetramento from '../../../assets/img/teacher-board.png';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            menuSanduiche:false
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        localStorage.removeItem('@Letramento_monitor:JWT_TOKEN');
        // this.props.history.push('/monitor/');
        this.setState({redirect:true});
    }
    render() {
        console.log(this.props);
        if(this.state.redirect){
            if (this.state.redirect) {
                return <Redirect to={"/monitor/login"} />
              }
        }
        return (
            <>
                <Head>
                    <div>
                        <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="223.46" height="50" viewBox="0 0 223.46 70.147">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.021" y1="0.569" x2="0.99" y2="0.711" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stopColor="#00ffe5"/>
                                    <stop offset="1" stopColor="#41ffb9"/>
                                    </linearGradient>
                                </defs>
                                <g id="Grupo_10" data-name="Grupo 10" transform="translate(-60.77 -7.353)">
                                    <path id="Caminho_5" data-name="Caminho 5" d="M44.516,0C69.1,0,213.243,19.931,213.243,44.516S69.1,70.147,44.516,70.147,0,69.1,0,44.516A44.516,44.516,0,0,1,44.516,0Z" transform="translate(70.987 7.353)" fill="url(#linear-gradient)"/>
                                    <path id="Caminho_3" data-name="Caminho 3" d="M13.5,0C20.957,0,27,8.168,27,18.244S20.957,36.489,13.5,36.489,0,28.32,0,18.244,6.045,0,13.5,0Z" transform="translate(60.77 31.435)" fill="#001868"/>
                                    <text id="L" transform="translate(66.035 62.094)" fill="#00ffe5" fontSize="39" fontFamily="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">L</tspan></text>
                                    <text id="etramento" transform="translate(88.409 62.094)" fill="#001868" fontSize="39" fontFamily="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">etramento</tspan></text>
                                    <text id="apoio" transform="translate(85 33)" fill="#001868" fontSize="25" fontFamily="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">apoio</tspan></text>
                                </g>
                            </svg>

                        </div>
                        <ul>
                            
                            
                            <NavLink exact={true} activeClassName='is-active' to="/monitor/"><li>Inicio</li></NavLink >
                            <NavLink activeClassName='is-active' to="/monitor/minha-conta"><li>Minha Conta</li></NavLink >
                            <NavLink activeClassName='is-active' to="/monitor/atividades"><li>Atividades</li></NavLink>
                            <NavLink activeClassName='is-active' to="/monitor/atribuir-atividade"><li>Atribuir Atividade</li></NavLink>
                            <NavLink activeClassName='is-active' to="/monitor/aprendiz"><li>Aprendiz</li></NavLink>
                            <NavLink activeClassName='is-active' to="/monitor/monitor"><li>Monitor</li></NavLink>
                            <NavLink activeClassName='is-active' to="/monitor/relatorio"><li>Relatório</li></NavLink>
                            <button type="button" onClick={this.handleLogout}>
                                Sair
                            </button>
                            
                        </ul>
                    </div>
                    <img src={ImageLetramento} />
                </Head>
                <HeadMobile menuSanduiche={this.state.menuSanduiche}>
                    <input type="checkbox" id="control-nav" checked={this.state.menuSanduiche} defaultChecked={this.state.menuSanduiche} style={{display:'none'}} onChange={()=>this.setState({menuSanduiche:!this.state.menuSanduiche})} />
                    <label htmlFor="control-nav" className="burger"> <span className="span"></span> </label>
                    <div className="header-mobile">
                        {/* <div className="logo"><h2>Apoio ao Letramento</h2></div> */}
                        <ul>
                            
                            <NavLink exact={true} activeClassName='is-active' onClick={()=>this.setState({menuSanduiche:false})} to="/monitor/"><li>Inicio</li></NavLink>
                            <NavLink activeClassName='is-active' onClick={()=>this.setState({menuSanduiche:false})} to="/monitor/minha-conta"><li>Minha Conta</li></NavLink>
                            <NavLink activeClassName='is-active' onClick={()=>this.setState({menuSanduiche:false})} to="/monitor/atividades"><li>Atividades</li></NavLink>
                            <NavLink activeClassName='is-active' onClick={()=>this.setState({menuSanduiche:false})} to="/monitor/atribuir-atividade"><li>Atribuir Atividade</li></NavLink>
                            <NavLink activeClassName='is-active' onClick={()=>this.setState({menuSanduiche:false})} to="/monitor/aprendiz"><li>Aprendiz</li></NavLink>
                            <NavLink activeClassName='is-active' onClick={()=>this.setState({menuSanduiche:false})} to="/monitor/monitor"><li>Monitor</li></NavLink>
                            <NavLink activeClassName='is-active' onClick={()=>this.setState({menuSanduiche:false})} to="/monitor/relatorio"><li>Relatório</li></NavLink>
                            <button type="button" onClick={this.handleLogout}>
                                Sair
                            </button>
                            
                        </ul>
                        <img src={ImageLetramento} />
                    </div>
                    <div onClick={()=>this.setState({menuSanduiche:!this.state.menuSanduiche})} className="header-mobile-black"></div>
                   
                </HeadMobile>
            </>
        )
    }
}
