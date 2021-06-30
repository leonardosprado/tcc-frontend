import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Formulario } from '../../components/Formulario/styles'
import userService from '../../services/user.service'

export default function MinhaConta() {

    const [idUsuario, setIdUsuario] = useState(null);
    const [username, setUsername] = useState(null);
    const [nome, setNome] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [data_nascimento, setData_nascimento] = useState(null);
    const [email, setEmail] = useState(null);
    const [curso, setCurso] = useState(null);
    const [loading, setLoading] = useState(false);


    async function requisicaoCurrentUser(){
        setLoading(true);
        const dadosUser = await userService.getCurrentMonitor();
        console.log(dadosUser);
        setUsername(dadosUser.username)
        setNome(dadosUser.nome)
        setSexo(dadosUser.sexo)
        setTelefone(dadosUser.telefone)
        setIdUsuario(dadosUser.id_usuario);
        var datanasc = new Date(dadosUser.data_nascimento);
        // var data_month = ((datanasc.getMonth()+1) < 9)? ('0'+ )
        setData_nascimento(datanasc.getFullYear()+'-'+(((datanasc.getMonth()+1) < 9)? ('0'+(datanasc.getMonth()+1)):(datanasc.getMonth()+1)) +'-'+datanasc.getDate());
        setEmail(dadosUser.email)
        setCurso(dadosUser.curso)
        setLoading(false);
    }


    async function handleSave(e){
        e.preventDefault();
        setLoading(true);
        const data = {"id_usuario":idUsuario, "username":username,"nome":nome,"sexo":sexo,"telefone":telefone,"data_nascimento":data_nascimento,"email":email,"curso":curso};
        const response = await userService.saveMonitor(data);
        setLoading(false);
        setLoading(true);
        const response2 = await userService.saveUsuario(data);
        setLoading(false);
        requisicaoCurrentUser();
        
    }

  

    useEffect(()=>{
        requisicaoCurrentUser();

    },[])
    return (
        <div>
            <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Minha Conta","link":"#"}]} />

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
                    <label for="email">E-mail</label>
                    <input  type="email" placeholder="E-mail" id="email" value={email|| ''} onChange={(e)=>(setEmail(e.target.value))}/>
                </div>
                <div className="form-column">
                    <label for="curso">Curso</label>
                    <input type="text" placeholder="Curso" id="curso" value={curso|| ''} onChange={(e)=>(setCurso(e.target.value))}/>
                </div>
                <div className="form-column">
                    <button class="button" type="submit">Salvar</button>
                </div>
                <div className="form-column">
                    {loading?<label>Carregando...</label>:<label></label>}
                </div>
            </Formulario>
        </div>
    )
}
