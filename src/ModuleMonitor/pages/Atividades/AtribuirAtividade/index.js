import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../../components/BreadCrumbs'
import { Formulario } from '../../../components/Formulario/styles';
import AtividadeService from '../../../services/atividade.servico';
import userService from '../../../services/user.service';
import { Container } from '../styles';

export default function AtribuirAtividade() {

    const [aprendiz, setAprendiz] = useState('');
    const [atividade, setAtividade] = useState('');
    const [listAtividades, setlistAtividades] = useState([]);
    const [listAprendizes, setlistAprendizes] = useState([]);
    const [response,setResponse] = useState(null)
    const [message, setMessage] = useState(null);
    const [isLoaded, setisLoaded] = useState(null);

    async function requisicaoAllAtividades(){
        try {
            var data = await AtividadeService.getAllAtividades();
            // setAtividade(data[0].id_atividade?data[0].id_atividade:'')
            // console.log(data);
            console.log(data);
            setlistAtividades(data);
            setisLoaded(true);
        } catch (error) {
            setMessage(JSON.stringify(error));
            setTimeout(()=>{
                setMessage(null);
            },5000)
        }
   
  
    }
    async function requisicaoAtribuiAtividade(){
      
        var data = {
            'id_atividade':String(atividade),
            'id_aprendiz':String(aprendiz)
        }
        const response = await AtividadeService.elaboraAtividade(JSON.stringify(data));
        console.log(response.message);
        await setResponse(JSON.stringify(response.message));

  
    }
    async function requisicaoAllAprendizes(){
      try {
        var data = await userService.getAllAprendiz();
        console.log(data);
        // setAprendiz(data[0].id_aprendiz?data[0].id_aprendiz:'')
        // console.log(data);
        setlistAprendizes(data);
        setisLoaded(true);
      } catch (error) {
            console.log(error);
            setMessage(JSON.stringify(error));
            setTimeout(()=>{
                setMessage(null);
            },5000)
        }
        
    }
    useEffect(()=>{
        requisicaoAllAtividades();
        requisicaoAllAprendizes();
      },[])
      
    return (
        <Container>
              <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Atribuir Atividades"}]} />

     
                  <Formulario>
                    <div className="form-row">
                        <div className="form-column">
                            <label>Atividade</label>
                            <select value={atividade}   onChange={(e)=>(setAtividade(e.target.value))}>
                                <option value="" disabled selected>Escolha a Atividade</option>
                                {listAtividades.map((item,key)=>(
                                    <option value={item.id_atividade} placeholder="ID" key={key}>{item.id_atividade}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label>Aprendiz</label>
                                <select value={aprendiz}   onChange={(e)=>(setAprendiz(e.target.value))}>
                                    <option value="" disabled selected>Escolha o Aprendiz</option>
                                    {listAprendizes.map((item,key)=>(
                                        <option value={item.id_aprendiz} key={key}>{item.nome}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <a onClick={()=>requisicaoAtribuiAtividade()} className="button-create">Salvar</a>
                        </div>
                    </div>
                </Formulario>
                <h6 style={{color:"#ff0000",padding:'10px'}} >{response}</h6>
                <div style={{color:"#ff0000",padding:'10px'}}><pre>{ message?JSON.stringify(JSON.parse(message),null, 2):''}</pre></div>

             
        </Container>
        

    )
}
