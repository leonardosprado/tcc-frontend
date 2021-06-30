import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Sidbar } from './styles';


export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            data:new Date(),
            semana:[
                'Domingo',
                'Segunda-Feira',
                'Terça-Feira',
                'Quarta-Feira',
                'Quinta-Feira',
                'Sexta-Feira',
                'Sábado'
            ],
            mes:[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ]
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        localStorage.removeItem('@Letramento_monitor:JWT_TOKEN');
        // this.props.history.push('/monitor/');
        this.setState({redirect:true});
    }
    render() {
        if(this.state.redirect){
            if (this.state.redirect) {
                return <Redirect to={"/monitor/"} />
              }
        }
        return (

            <Sidbar>
                <div className="date">
                   <span>{this.state.semana[this.state.data.getDay()]}</span>  | <span>{this.state.data.getDate()} de  {this.state.mes[this.state.data.getMonth()]} de {this.state.data.getFullYear()}</span>
                </div>
                {/* <div>
                    <div className="logo"><h2>Apoio ao Letramento</h2></div>
                </div> */}
            </Sidbar>
        )
    }
}
