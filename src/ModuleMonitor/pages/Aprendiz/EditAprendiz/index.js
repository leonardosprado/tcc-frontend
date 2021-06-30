import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import BreadCrumbs from '../../../components/BreadCrumbs'
import { Formulario } from '../../../components/Formulario/styles'
import userService from '../../../services/user.service'
import { Container } from '../../Atividades/styles';

export default function EditAprendiz() {
    let { id } = useParams();
    const [idUsuario, setIdUsuario] = useState(null);
    const [username, setUsername] = useState(null);
    const [nome, setNome] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [data_nascimento, setData_nascimento] = useState(null);
    const [apelido, setApelido] = useState(null);
    const [messageLoading, setMessageLoading] = useState('');
    const [message,setMessage] = useState('');


    // const [curso, setCurso] = useState(null);
    const [loading, setLoading] = useState(false);


    async function requisicaoCurrentUser(){
        setLoading(true);
        const dadosUser = await userService.getAprendizById(id);
        console.log(dadosUser);
        if(dadosUser){
            setUsername(dadosUser.username)
            setNome(dadosUser.nome)
            setSexo(dadosUser.sexo)
            setTelefone(dadosUser.telefone)
            setIdUsuario(dadosUser.id_usuario);
            var datanasc = new Date(dadosUser.data_nascimento);
            // var data_month = ((datanasc.getMonth()+1) < 9)? ('0'+ )
            setData_nascimento(datanasc.getFullYear()+'-'+(((datanasc.getMonth()+1) < 9)? ('0'+(datanasc.getMonth()+1)):(datanasc.getMonth()+1)) +'-'+datanasc.getDate());
            setApelido(dadosUser.apelido)
            // setCurso(dadosUser.curso)
            setLoading(false);
        }
        else{
            setMessageLoading('');
            setMessage("Aprendiz não encontrado")
        }
    }


    async function handleSave(e){
        e.preventDefault();
        setLoading(true);
        const data = {"id_usuario":idUsuario, "username":username,"nome":nome,"sexo":sexo,"telefone":telefone,"data_nascimento":data_nascimento,"apelido":apelido};
        const response = await userService.saveAprendizById(data,id);
        setMessage(JSON.stringify(response));
        console.log(response);
        setTimeout(()=>{
            setMessage('');
        },5000)
        setLoading(false);
        setLoading(true);
        const response2 = await userService.saveUsuarioById(data,idUsuario);
        
        setLoading(false);
        requisicaoCurrentUser();
        
    }

    useEffect(()=>{
        requisicaoCurrentUser();

    },[])



    return (
        <div>
            <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Aprendiz","link":"/monitor/aprendiz"},{"rota":`Editar Aprendiz ${id}`,"link":`/monitor/aprendiz/editar-aprendiz/${id}`}]} />

            <Formulario  onSubmit={handleSave}>
                <div className="form-row">
                    <div className="form-column">
                        <label for="username">Username</label>
                        <input placeholder="UserName" id="username" value={username|| ''} onChange={(e)=>(setUsername(e.target.value))}  />
                    </div>
                    <div className="form-column">
                        <label for="nome">Nome</label>
                        <input placeholder="Nome Completo" id="nome" value={nome|| ''} onChange={(e)=>(setNome(e.target.value))}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label for="sexo">Sexo</label>
                        <select name="sexo" value={sexo|| ''} onChange={(e)=>(setSexo(e.target.value))}>
                            {/* <option value="valor1">Masculino</option> */}
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                        {/* <label for="sexo">Sexo</label>
                        <input placeholder="Homem" id="sexo" value={sexo|| ''} onChange={(e)=>(setSexo(e.target.value))}/> */}
                    </div>
                    <div className="form-column">
                        <label for="telefone">Telefone</label>
                        <input type="tel" placeholder="62982732049" id="telefone" value={telefone|| ''} onChange={(e)=>(setTelefone(e.target.value))}/>
                    </div>
                </div>
                <div className="form-column">
                    <label for="nascimento">Data de Nascimento</label>
                
                    <input type="date" data-date-format="DD M YYYY" placeholder="01/05/2021" id="nascimento" value={data_nascimento|| ''} onChange={(e)=>(setData_nascimento(e.target.value))}/>
                </div>
                <div className="form-column">
                    <label for="apelido">Apelido</label>
                    <input  type="text" placeholder="Apelido" id="apelido" value={apelido|| ''} onChange={(e)=>(setApelido(e.target.value))}/>
                </div>
                {/* <div className="form-column">
                    <label for="curso">Curso</label>
                    <input type="text" placeholder="Curso" id="curso" value={curso|| ''} onChange={(e)=>(setCurso(e.target.value))}/>
                </div> */}
                <div className="form-column">
                    <button class="button" type="submit">Salvar</button>
                </div>
                <div className="form-column">
                    {messageLoading}
                    <label style={{color:"#ff0000"}}><pre>{ message?JSON.stringify(JSON.parse(message),null, 2):''}</pre></label>
                </div>
            </Formulario>
        </div>
        )
    
}
