import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../../components/BreadCrumbs';
import userService from '../../../services/user.service';
import { Container } from '../../Atividades/styles';

export default function Aprendizes() {
    const [listAprendizes, setListAprendizes] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);
    const [message, setMessage] = useState(null);

    async function requisicaoAllAprendizes(){
      try {
        var data = await userService.getAllAprendiz();
        await setListAprendizes(data);
        setisLoaded(true);
      } catch (error) {
        await setListAprendizes([]);
        setisLoaded(false);
        setMessage(error);
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
        requisicaoAllAprendizes();
      },[])
    
    if(isLoaded){
      return (
          <Container>
            
            <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Aprendiz","link":"/monitor/aprendiz"}]} />
  
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
                    <th>Apelido</th>
                  </tr>
                </thead>
                <tbody>
                  {
                     Array.isArray(listAprendizes)?listAprendizes.map((item,i)=>
                     {
                      var data_nascimento = dateFormat(item.data_nascimento)
                    
                       return(
                        <tr key={i}>
                          <td >{item.id_aprendiz}</td>
                          <td className="nameAtividade">  <Link to={`/monitor/aprendiz/editar-aprendiz/${item.id_aprendiz}`}>{`${item.username}`}</Link></td>
                          <td>{item.nome}</td>
                          <td>{item.sexo=="M"?'Masculino':"Feminino"}</td>
                          <td>{item.telefone}</td>
                          <td>{data_nascimento}</td>
                          <td>{item.apelido}</td>
                        
                        
                        </tr>
                    )})        
                  :
                  <></>
                  }
                </tbody>
              </table>
            </div>
  
            <Link to='/monitor/aprendiz/create-aprendiz' className="button-create">Criar Novo Aprendiz</Link>
        </Container>
      )

    }
    else{
      return(
        <label>Carregando</label>
      )
    }
}
