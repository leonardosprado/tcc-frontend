import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import AtividadeService from '../../services/atividade.servico';
import ImageLetramento from '../../../assets/img/teacher-board.png';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs';

function Atividades({history}) {

    function handleLogout() {
        localStorage.removeItem('@Letramento_monitor:JWT_TOKEN');
        history.push('/monitor/');
    }

    const [listAtividades, setlistAtividades] = useState(null);
    const [isLoaded, setisLoaded] = useState(null);

    


    async function requisicaoAllAtividades(){
      
      var data = await AtividadeService.getAllAtividades();
      // console.log(data);
      // console.log(data);
      setlistAtividades(data);
      setisLoaded(true);

      // Axios.get(`https://jsonplaceholder.typicode.com/users`)
      // .then(res => {
      //   const persons = res.data;
      //   this.setState({ persons });
      // })
    }

    useEffect(()=>{
      requisicaoAllAtividades();
    },[])
    
  
  if(!isLoaded){
      return <div>Loading..</div>
  }
  
  else{
    return (
      <Container>
          
          <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Atividades"}]} />

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Nivel</th>
                  <th>Palavra</th>
                  <th>Sugestão de Resposta</th>
                  <th>Data de Criação</th>
                </tr>
              </thead>
              <tbody>
                {
                  listAtividades? listAtividades.map((item,i)=>(
                    <tr key={i}>
                    
                      <td >{item.id_atividade}</td>
                  
                      <td className="nameAtividade">  <Link to={`/monitor/editar-atividade/${item.id_atividade}`}>{`Atividade ${item.id_atividade}`}</Link></td>
                      <td>{item.nivel}</td>
                      <td>{item.palavra}</td>
                      <td>{item.sugestao_resposta}</td>
                      <td>{item.data_criacao}</td>
                    </tr>
                ))        
                :
                ''
                }
              </tbody>
            </table>
          </div>

          <Link to='/monitor/criar-atividade' className="button-create">Criar Atividade </Link>
      </Container>
    );
  }
}

export default Atividades;