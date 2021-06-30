import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../../components/BreadCrumbs';
import userService from '../../../services/user.service';
import { Container } from '../../Atividades/styles';

export default function Monitores() {


    const [listMonitores, setListMonitores] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoaded, setisLoaded] = useState(null);

    async function requisicaoAllMonitores(){
        try {
            var data = await userService.getAllMonitores();
            setListMonitores(data);
            setisLoaded(true);
        } catch (error) {
            setMessage(error);
            setListMonitores(null);
            setisLoaded(true);
        }
      }

      function dateFormat(data){
      
        var datafinal = new Date(data);
        var dia = datafinal.getDate().toString();
        var diaF = (dia.length == 1) ? '0'+dia : dia;
        var mes  = (datafinal.getMonth()+1).toString();
        var mesF = (mes.length == 1) ? '0'+mes : mes;
        var anoF = datafinal.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
      } 
  
      useEffect(()=>{

        requisicaoAllMonitores();
      },[])
      
    return (
        <Container>
          
          <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Monitor"}]} />

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Nome</th>
                  <th>Sexo</th>
                  <th>Telefone</th>
                  <th>Data de Nascimento</th>
                  <th>Email</th>
                  <th>Curso</th>
                </tr>
              </thead>
              <tbody>
                {
                  listMonitores? listMonitores.map((item,i)=>{
                    var data_nascimento = dateFormat(item.data_nascimento)

                    return(
                    <tr key={i}>
                      <td >{item.id_monitor}</td>
                      <td className="nameAtividade">  <Link to={`/monitor/monitor/editar-monitor/${item.id_monitor}`}>{`${item.username}`}</Link></td>
                      <td>{item.nome}</td>
                      <td>{item.sexo=="M"?'Masculino':"Feminino"}</td>
                      <td>{item.telefone}</td>
                      <td>{data_nascimento}</td>
                      <td>{item.email}</td>
                      <td>{item.curso}</td>
                     
                    </tr>
                )})        
                :
                ''
                }
              </tbody>
            </table>
          </div>

          <Link to='/monitor/monitor/criar-monitor' className="button-create">Criar Novo Monitor</Link>
      </Container>
    )
}
