import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import BreadCrumbs from '../../../components/BreadCrumbs';
import atividadeServico from '../../../services/atividade.servico';
import { ContainerRelatorioById } from './styles';
import {AiOutlineCheckCircle,AiOutlineCloseCircle,AiFillCalendar,AiOutlineFieldTime,AiOutlineUnorderedList,AiOutlineUser,AiOutlineProfile} from 'react-icons/ai';
import { FcList } from "react-icons/fc";

import { IconContext } from "react-icons";
import userService from '../../../services/user.service';
import  {URL_API}  from '../../../../services/config';

export default function RelatorioById() {
    let { id } = useParams();
    const [listAtividadesRealizada, setListAtividadesRealizada] = useState([]);
    const [data_realizacao, setDataRealizacao] = useState('');
    const [data_criacao, setDataCriacao] = useState('');
    const [data_alteracao, setDataAlteracao] = useState('');
    const [tentativa, setTentativa] = useState(null);
    const [status, setStatus] = useState('');
    const [resposta, setResposta] = useState('');
    const [resultado, setResultado] = useState('');
    const [id_monitor, setIdMonitor] = useState('');
    const [id_atividade, setIdAtividade] = useState('');
    const [id_aprendiz, setIdAprendiz] = useState('');
    const [tempoResposta,setTempoResposta]=useState('');
    const [dataAprendiz,setDataAprendiz]=useState('');
    const [dataAtividade,setDataAtividade]=useState('');

    async function getAtividadesRealizadas(){
        const response = await atividadeServico.atividadesRealizadasById(id);
        // setListAtividadesRealizada(response);
        if(response){
            setDataRealizacao(response.data_realizacao);
            setDataCriacao(response.data_criacao);
            setDataAlteracao(response.data_alteracao);
            // setTentativa(response.tentativa);
            setStatus(response.status);
            setResposta(response.resposta);
            setResultado(response.resultado);
            setIdMonitor(response.id_monitor);
            setIdAtividade(response.id_atividade);
            setIdAprendiz(response.id_aprendiz);

            getUserById(response.id_aprendiz);
            getAtividadeByID(response.id_atividade);
        }
    }

    async function relatorioDeAtividadesDaoById(){
        const response = await atividadeServico.relatorioDeAtividadesDaoById(id);
        setTempoResposta(response.tempo);
        setTentativa(response.tentativa);
        setListAtividadesRealizada(response);
    }

    async function getUserById(id){
        const response = await userService.getAprendizById(id);
        setDataAprendiz(response);
    }
    async function getAtividadeByID(id){
        const response = await atividadeServico.getAtividadeById(id);
        console.log(response);
        setDataAtividade(response);
    }
    useEffect(()=>{
        getAtividadesRealizadas();
        relatorioDeAtividadesDaoById();
      },[])
    return (
        <ContainerRelatorioById>
            <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Relatórios","link":"/monitor/relatorio"},{"rota":`Relatório de Atividade ${id}`,"link":`/monitor/relatorio/relatorio-id/${id}`}]} />
            <div className="container-fluid">
                <div className="row mb-3">
                    {status==1?
                    <div>
                        
                    </div>:
                    <div>

                    </div>
                    }
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <div className="item-relatorio primary-bg d-flex flex-column justify-content-center p-3">
                            <IconContext.Provider value={{size:"20px",style:{marginBottom:'10px'}}}>
                                <span><AiFillCalendar/></span>
                            </IconContext.Provider>
                            <p>Data de Criação</p>
                            <p className="m-0">{data_criacao}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        {data_realizacao?
                         <div className=" item-relatorio blue-bg d-flex flex-column justify-content-center p-3">
                            <IconContext.Provider value={{size:"20px",style:{marginBottom:'10px'}}}>
                                    <span><AiFillCalendar/></span>
                            </IconContext.Provider>
                            <p>Data de Realização</p>
                            <p className="m-0">{data_realizacao}</p>
                        </div>
                        :
                        <div className=" item-relatorio primary-bg d-flex flex-column justify-content-center p-3">
                            <IconContext.Provider value={{size:"20px",style:{marginBottom:'10px'}}}>
                                    <span><AiFillCalendar/></span>
                            </IconContext.Provider>
                            <p>Data de Realização</p>
                            <p className="m-0">Não realizado</p>
                        </div>
                        }
                     
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="item-relatorio primary-bg d-flex flex-column justify-content-center p-3">
                            <IconContext.Provider value={{size:"20px",style:{marginBottom:'10px'}}}>
                                    <span><AiFillCalendar/></span>
                            </IconContext.Provider>
                            <p>Ultima atualização</p>
                            <p className="m-0">{data_alteracao}</p>
                        </div>
                       
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                {resultado=="Correto"?
                                <div title="Certo" className="h-100 item-relatorio item-resposta certo-bg  d-flex flex-column justify-content-center p-3">
                                    <div className="row ">
                                        <div className="col-8 ">
                                            <p>Resposta</p>
                                            <h1>{resposta}</h1>
                                        </div>    
                                        <div className="col-4 d-flex justify-content-end">
                                            <IconContext.Provider value={{size:"35px"}}>
                                                <span title="Correto"><AiOutlineCheckCircle/></span>
                                            </IconContext.Provider>
                                        </div>    
                                    </div>
                                </div>
                                :
                                <div title="Errado" className="item-relatorio item-resposta erro-bg d-flex flex-column justify-content-center p-3">
                                     <div className="row">
                                        <div className="col-8">
                                            <p>Resposta</p>
                                            <h1>{resposta}</h1>
                                        </div>    
                                        <div className="col-4 d-flex justify-content-end">
                                            <IconContext.Provider value={{size:"35px"}}>
                                                <span title="Errado"><AiOutlineCloseCircle/></span>
                                            </IconContext.Provider>
                                        </div>    
                                    </div>
                                </div>
                                }
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="item-relatorio item-resposta primary-bg d-flex flex-column justify-content-center p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <p>Tempo</p>
                                            <h1>{tempoResposta}s</h1>
                                        </div>    
                                        <div className="col-4 d-flex justify-content-end">
                                            <IconContext.Provider value={{size:"35px"}}>
                                                <span><AiOutlineFieldTime/></span>
                                            </IconContext.Provider>                                        
                                                                                  
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="item-relatorio item-resposta primary-bg d-flex flex-column justify-content-center p-3">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <p>Atividades</p>
                                            <p>Palavra:&nbsp;<span className="fw-bold">{dataAtividade.palavra?dataAtividade.palavra:''}</span></p>
                                            <p>Sugestão de Resposta:&nbsp;<span className="fw-bold">{dataAtividade.sugestao_resposta?dataAtividade.sugestao_resposta:''}</span></p>
                                            {/* <img width="100%" src={dataAtividade.url_img?`${URL_API}${dataAtividade.url_img}`:''}></img> */}
                                        </div>
                                        <div className="col-md-3 d-flex justify-content-end">
                                            <IconContext.Provider value={{size:"35px"}}>
                                                <span><AiOutlineProfile/></span>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Imagem</p>
                                            <img width="100%" src={dataAtividade.url_img?`${URL_API}${dataAtividade.url_img}`:''}></img>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="item-relatorio item-resposta primary-bg d-flex flex-column justify-content-center p-3">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <p>Aprendiz</p>
                                            <p>Nome:&nbsp;<span className="fw-bold">{dataAprendiz.nome?dataAprendiz.nome:''}</span></p>
                                            <p>Apelido:&nbsp;<span className="fw-bold">{dataAprendiz.apelido?dataAprendiz.apelido:''}</span></p>
                                            <p>Username:&nbsp;<span className="fw-bold">{dataAprendiz.username?dataAprendiz.username:''}</span></p>
                                            <p>Telefone:&nbsp;<span className="fw-bold">{dataAprendiz.telefone?dataAprendiz.telefone:''}</span></p>
                                        </div>
                                        <div className="col-md-3 d-flex justify-content-end">
                                            <IconContext.Provider value={{size:"35px"}}>
                                                <span><AiOutlineUser/></span>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="item-relatorio item-resposta primary-bg d-flex flex-column justify-content-center p-3">
                            <IconContext.Provider value={{size:"20px",style:{marginBottom:'10px'}}}>
                                <AiOutlineUnorderedList />
                            </IconContext.Provider> 
                            <p>Como chegou até a resposta</p>
                            <table>
                                <tr>
                                    <th>(nº)</th>
                                    <th>Texto</th>
                                    <th>Tempo(s)</th>
                                </tr>
                            {tentativa?tentativa.map((item)=>(
                                <tr>
                                    <td>{item.numero}</td>
                                    <td>{item.texto}</td>
                                    <td>{item.tempo}</td>
                               </tr>
                            )) :''}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerRelatorioById>
    )
}
