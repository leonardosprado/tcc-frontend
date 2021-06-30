import React, { useState } from 'react'
import { useRouteMatch } from 'react-router';
import BreadCrumbs from '../../../components/BreadCrumbs';
import { Formulario } from '../../../components/Formulario/styles';
import userService from '../../../services/user.service';

export default function CreateAprendiz() {
    const [idUsuario, setIdUsuario] = useState(null);
    const [username, setUsername] = useState(null);
    const [nome, setNome] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [data_nascimento, setData_nascimento] = useState(null);
    const [apelido, setApelido] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message,setMessage] = useState(null);
    let match = useRouteMatch();
    
    async function handleSave(e){
        e.preventDefault();
       
        setLoading(true);
        const data = {
            "username":username,
            "nome":nome ,
            "sexo":sexo ,
            "telefone":telefone ,
            "data_nascimento":data_nascimento ,
            "apelido":apelido ,
            "password":password
            
        }
        const response = await userService.createAprendiz(data);
        setMessage(JSON.stringify(response));
        setTimeout(()=>{
            setMessage(null);
        },5000)
    
        setLoading(false);

        // setLoading(true);
        // const response2 = await userService.saveUsuario(data);
        setLoading(false);
            // requisicaoCurrentUser();
        
        
    }

    return (
        <div>
            <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Aprendiz","link":"/monitor/aprendiz"},{"rota":"Criar Novo Aprendiz","link":"/monitor/aprendiz/create-aprendiz"}]} />
            
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
                            <option value="" disabled selected>Qual o sexo?</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                        {/* <label for="sexo">Sexo</label>
                        <input placeholder="Homem" id="sexo" value={sexo|| ''} onChange={(e)=>(setSexo(e.target.value))}/> */}
                    </div>
                    <div className="form-column">
                        <label for="telefone">Telefone</label>
                        <input type="tel" placeholder="Telefone" id="telefone" value={telefone|| ''} onChange={(e)=>(setTelefone(e.target.value))}/>
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
                <div className="form-column">
                    <label for="password">Senha</label>
                    <input  type="password" placeholder="Senha" id="password" value={password|| ''} onChange={(e)=>(setPassword(e.target.value))}/>
                </div>
            
                <div className="form-column">
                    <button className="button" type="submit">Criar</button>
                </div>
                <div className="form-column">
                    {loading?<label>Carregando...</label>:<label></label>}
                    <label style={{color:"#ff0000"}}><pre>{ message?JSON.stringify(JSON.parse(message),null, 2):''}</pre></label>
                </div>
            </Formulario>
        </div>
    )
}
