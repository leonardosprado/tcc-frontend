import React, { useState } from 'react'
import Loading from '../../../../components/Loading';
import BreadCrumbs from '../../../components/BreadCrumbs';
import atividadeServico from '../../../services/atividade.servico';
import { Container } from '../styles'

export default function PageCriarAtividade() {


    const [questao, setQuestao] = useState(null);
    const [palavra, setPalavra] = useState(null);
    const [nivel, setNivel] = useState(null);
    const [sugestao, setSugestao] = useState(null);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [fileRead, setFileRead] = useState(null);
    const [isLoaded, setisLoaded] = useState(null);
    const [error, setError] = useState(null);
    const [sucess, setSucess] = useState(null);

    async function requisicaoCreateAtividades(){
        try{
            setisLoaded(true);
            if(palavra && nivel && sugestao && file){
                var data = await atividadeServico.createAtividade(file, questao,sugestao,nivel,palavra,fileName);
                // console.log(data.data.message);
                setSucess(data.data.message||'');
                setisLoaded(false);
                setError(null);
            }
            else{
                setisLoaded(false);
                if(!questao){
                    throw("Insere uma Questão");
                }
                if(!palavra){
                    throw("Insere uma Palavra");
                }
                if(!nivel){
                    throw("Insere um Nivel");
                }
                if(!sugestao){
                    throw("Insere uma Sugestão");
                }
                if(!file){
                    throw("Insere um Arquivo");
                }
            }
        }
        catch(erro){
            setError(erro||'');
        }
        
      }
  
    //   useEffect(()=>{
    //     requisicaoCreateAtividades();
    //   },[])
      

    
    return (
        <Container>
              <BreadCrumbs rotas={[
                  {"rota":"Painel","link":"/monitor"},
                  {"rota":"Atividades","link":"/monitor/atividades"},
                  {"rota":"Criar Atividades"}]} 
                />

             <form>
                 <div >
                    <input type="text" placeholder="Questão" value={questao ||''} onChange={(e)=>(setQuestao(e.target.value))} />
                    <input type="text" placeholder="Palavra" value={palavra ||''} onChange={(e)=>(setPalavra(e.target.value))} />
                    <input type="number" placeholder="nivel" value={nivel ||''} onChange={(e)=>(setNivel(e.target.value))} />
                 </div>
                 <div >
                    <input type="text" placeholder="Sugestão de Palavra" value={sugestao||''} onChange={(e)=>(setSugestao(e.target.value))} />
                 </div>
                 <div >
                    <input type="file" placeholder="Sugestão de Palavra" value={fileName||''} onChange={(e)=>{
                        if(e.target.files[0]){
                            setFileRead(URL.createObjectURL(e.target.files[0]));
                        }
                        setFileName(e.target.value)
                        setFile(e.target.files[0])
                        }} />
                 </div>
                {file?
                    <img className="preImg" src={file?fileRead:""}/>
                :
                    <br/>
                }
             </form>
             {sucess?
                <span className="py-4 px-3 text-success fw-bold">{sucess}</span>:''}
             {error?
                <span className="py-4 px-3 text-danger fw-bold">{error}</span>:''}
             <div className="d-flex justify-content-end align-items-center mt-3">
              {/* <span>{fileRead}</span> */}
              {isLoaded?<Loading Size="50" />:''}
                <a onClick={()=>requisicaoCreateAtividades()} className="button-create">Salvar</a>

             </div>
           
             
        </Container>
    )
}
