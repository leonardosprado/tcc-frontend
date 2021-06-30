import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../../components/BreadCrumbs'
import atividadeServico from '../../../services/atividade.servico';
import { ContainerDashBoard, FormSearch, InputSearch } from './style';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
export default function Dashboard() {

    
    const [listAtividadesRealizadas, setListAtividadesRealizadas] = useState([]);
    const [listAtividadesNRealizadas, setListAtividadesNRealizadas] = useState([]);
    const [listAtividadesSearch, setListAtividadesSearch] = useState([]);
    const[search,setSearch] = useState(null);

    async function getAllAtividadesRealizadas(){
        const response = await atividadeServico.relatorioDeAtividadesDao()
        setListAtividadesRealizadas(response);
    }
    async function getAllAtividadesNRealizadas(){
        const response = await atividadeServico.relatorioDeAtividadesNRealizadaDao();
        setListAtividadesNRealizadas(response);
    }
    async function handleSearch(e){
     
        var search = e.target.value;
    
        if(search==""){
            setSearch(null);
        }else{
            setSearch(e.target.value)

            const response = await atividadeServico.relatorioDeAtividadesSearchDao(search)
            setListAtividadesSearch(response)
        };

        

        
    }
    useEffect(()=>{
        getAllAtividadesRealizadas();
        getAllAtividadesNRealizadas();
      },[])
    return (
        <div>
            <BreadCrumbs rotas={[{"rota":"Painel","link":"/monitor"},{"rota":"Relatórios","link":"/monitor/relatorio"}]} />
            <FormSearch onSubmit={(e)=>e.preventDefault()}>
                <IconContext.Provider value={{size:"35px",color:"#989898" }}>
                    <AiOutlineSearch />
                </IconContext.Provider>    
                <InputSearch type="search" placeholder="Pesquisar" onChange={handleSearch} />
            </FormSearch>
            <ContainerDashBoard>
                    {search!=null || search!= undefined || search ==""?
                    <div className="atividade-n-realizada search">
                        {/* <input type="search" placeholder="Pesquisar Atividade" /> */}
                        <h6 className="title">Resultado para Pesquisa: {search}</h6>
                        <ul>
                            {listAtividadesSearch?listAtividadesSearch.map((item,i)=>(
                                item.status?
                                <Link key={i} to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}>
                                    <li className={`${i%2==0?'':'long'}`}>
                                        <Link to={`/monitor/aprendiz/editar-aprendiz/${item.id_aprendiz}`}>{item.apelido} </Link>&nbsp;realizou a atividade&nbsp;<Link to={`/monitor/editar-atividade/${item.id_atividade}`}>{item.id_atividade}</Link> 
                                        <Link to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}><span>+</span></Link> 
                                    </li>
                                </Link>
                                :
                                <Link key={i} to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}>
                                    <li className={`${i%2==0?'':'long'} n-realizada`}>
                                        <Link to={`/monitor/aprendiz/editar-aprendiz/${item.id_aprendiz}`}>{item.apelido} </Link>&nbsp;não realizou a atividade&nbsp;<Link to={`/monitor/editar-atividade/${item.id_atividade}`}>{item.id_atividade}</Link> 
                                        <Link to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}><span>+</span></Link> 
                                    </li>
                                </Link>
                            )):''}
                        </ul>
                    </div>
                    :null}
                    

                    <div className="atividade-n-realizada">
                        {/* <input type="search" placeholder="Pesquisar Atividade" /> */}
                        <h6 className="title">Atividades aguardando a ser feita</h6>
                        <ul>
                            {listAtividadesNRealizadas?listAtividadesNRealizadas.map((item,i)=>(
                                <Link key={i}  to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}>
                                    <li className={i%2==0?'':'long'}>
                                        <Link to={`/monitor/aprendiz/editar-aprendiz/${item.id_aprendiz}`}>{item.apelido} </Link>&nbsp;não realizou a atividade&nbsp;<Link to={`/monitor/editar-atividade/${item.id_atividade}`}>{item.id_atividade}</Link> 
                                        <Link to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}><span>+</span></Link> 
                                    </li>
                                </Link>
                            )):''}
                        </ul>
                    </div>
                    <div className="atividade-realizada">
                    {/* <input type="search" placeholder="Pesquisar Atividade" /> */}
                        <h6 className="title">Relatório de Atividades</h6>
                        <ul>
                            {listAtividadesRealizadas?listAtividadesRealizadas.map((item,i)=>(
                                <Link key={i}  to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}>
                                    <li>
                                        <Link to={`/monitor/aprendiz/editar-aprendiz/${item.id_aprendiz}`}>{item.apelido}</Link>&nbsp;realizou a atividade&nbsp; 
                                        <Link to={`/monitor/editar-atividade/${item.id_atividade}`}>{item.id_atividade}</Link>&nbsp;em&nbsp;{item.tempo}s&nbsp;
                                        <Link to={`/monitor/relatorio/relatorio-id/${item.id_atividade_programada}`}><span>+</span></Link> 
                                    </li>
                                </Link>
                            )):''}
                        </ul>
                    </div>
            </ContainerDashBoard>

        </div>
    )
}
