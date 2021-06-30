import React from 'react'
import { useState } from 'react';
import { AiOutlineProfile } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../../components/BreadCrumbs';
import atividadeServico from '../../../services/atividade.servico';
import { URL_API } from '../../../../services/config';
import { useEffect } from 'react';
import { Container } from './styles';

export default function PageEditAtividade() {
    
    let { id } = useParams();
    const [dataAtividade,setDataAtividade]=useState('');

    async function getAtividadeByID(id){
        const response = await atividadeServico.getAtividadeById(id);
        console.log(response);
        setDataAtividade(response);
    }
    useEffect(()=>{
        getAtividadeByID(id);
        
      },[])
    
    return (
        <Container>
            <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Atividades","link":"/monitor/atividades/"},{"rota":"Editar Atividade "+id}]} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="item-relatorio item-resposta primary-bg d-flex flex-column justify-content-center p-3">
                            <div className="row">
                                <div className="col-md-9">
                                  
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
                                    <img width="auto%" src={dataAtividade.url_img?`${URL_API}${dataAtividade.url_img}`:''}></img>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
 