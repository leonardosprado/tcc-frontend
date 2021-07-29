import React, { Component } from 'react';
import Draggable from '../Draggable';
import AtividadeService from '../services/atividade.servico';
import { Container,Wip, Complete, Gif, Row, Figura, Loading,Save,Finish } from './styles';
import DraggableDrop from '../DraggableDrop';
import {URL_API} from '../../services/config';
import Gif_Padrao from '../../assets/img/gifs/feliz1.gif'
import Gif_Triste from '../../assets/img/gifs/sad.gif'
import Confete1 from '../../assets/img/gifs/confetti-1.gif'
import Confete2 from '../../assets/img/gifs/confetti-2.gif'
import ConfeteSong from '../../assets/songs/confetti.wav'
import ClapSong from '../../assets/songs/clap.mp3'

import Bg from '../../assets/img/image-letramento.jpeg'
import { ThemeConsumer } from 'styled-components';
import { number } from 'prop-types';
import { Redirect } from 'react-router';
import Menu from '../Components/Menu';
import './styles.css';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  constructor(props){
    super(props);
    this.myComplete = React.createRef(); //Referenciar o component Complete, onde vai ser jogado as palavras. 

    this.state = {
      requicaoComplete:false,

      id_atividade:'',
      atividade:[],
      palavraVet:[],
      questao:'',
      palavra:'',
      figura:'',
      id_atividade_programada:'',
      resultado:'Errado',
      emoji:Gif_Padrao,
      vetorEmoji:[Gif_Padrao,Gif_Triste],

      orderFinal:0,
      orderInicial:0,

      teste:'',
      tasks:[],
      VetorComplete:[],

      onMouseEnterComplete:false,

      selectOn:null,
      myBoxTop: null,
      myBoxBottom: null,
      myBoxLeft:null,
      myBoxRight:null,

      timer:0,
      palavraFinal:'',
      tentativa_numero:0,
      tentativa:[],
      palavraIsCorrect:'',
      onFinish:false,

      onEncerrar:false,
      error:false,

      logoff:false
    }

    this.statustask = this.statustask.bind(this);
    this.tentativa_numero = this.tentativa_numero.bind(this);
   
  }

  handleLogout() {
    localStorage.removeItem('@Letramento_aprendiz:JWT_TOKEN');
    // this.props.history.push('/monitor/');
    this.setState({logoff:true});
  }

  vetorizacao(e){
    this.setState({palavra:e.target.value });
    var palavra = e.target.value;
    var palavraVet =[];    
    var tasks = new Array();
    var task = null;
    for(let i=0; i<palavra.length; i++){
      task = {
        id:i,
        name:palavra[i],
        ordem:i,
        category:'wip'
      }
      tasks[i] = task;
      palavraVet[i] = palavra[i];

    }
  
    this.setState({palavraVet:palavraVet, tasks});
    // console.log(this.state.tasks);
  }

  vetorizacao_static(){
    var palavra = this.state.palavra; //Palavra 
    var palavraVet =[];    
    if(palavra){
      var tasks = new Array();
      var task = null;
      for(let i=0; i<palavra.length; i++){
        task = {
          id:i,
          name:palavra[i],
          ordem:i,
          category:'wip'
        }
        tasks[i] = task;
        palavraVet[i] = palavra[i];
  
      }
      this.setState({orderInicial:palavra.length})
      this.setState({palavraVet:palavraVet, tasks:tasks});

    }
  }

  async tentativa_numero(status){
    await this.setState({tentativa_numero:this.state.tentativa_numero+1});
 
    var tentativa = {
      'texto':this.state.palavraFinal,
      // 'local':status?'Final':'Sugerido',
      'tempo':this.state.timer,
      'numero':this.state.tentativa_numero
    };

    await this.setState(prevState=>({
      tentativa:[...prevState.tentativa, tentativa]}));
        
    const data = await AtividadeService.setAtividadeTentativa(this.state.id_atividade_programada,this.state.tentativa);
    console.log(data);

    console.log(this.state.tentativa);
  }

  componentDidMount(){
    this.interval = setInterval(() => this.setState({ timer: this.state.timer+1 }), 1000);
    this.requisicaoAtividadeDisponivel();
  
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.requicaoComplete !== this.state.requicaoComplete) {
      this.vetorizacao_static();
      this.positionBoudingAtt();
    }
    // if(prevState.tasks!= this.state.tasks){
    // }
  }

  async createAtividade(){
    try{
      var dados = {
        'tentativa':this.state.tentativa,
        'status':true,
        'resposta':this.state.palavraFinal,
        'resultado':this.state.resultado
      }
      const data = await AtividadeService.setAtividade(this.state.id_atividade_programada, dados);
     
      console.log(data);
    } catch (error) {
      console.log(error);   
    }
  }

  async requisicaoAtividadeDisponivel(){
    try {
      const data = await AtividadeService.getAtividadeDisponivelUserAprendiz();
      console.log(data);
      this.setState({id_atividade_programada:data.id_atividade_programada})
      this.setState({id_atividade:data.atividade.id_atividade})
      this.setState({palavraIsCorrect:data.atividade.palavra.toLowerCase()})
      this.setState({palavra:data.atividade.sugestao_resposta.toLowerCase()});
      this.setState({questao:data.atividade.questao});
      this.setState({figura:`${URL_API}${data.atividade.url_img}`});
      this.setState({atividade:data});
      this.setState({requicaoComplete:true})
    
    } catch (error) {
      this.setState({requicaoComplete:true})
      this.setState({error:true}) 
    }
  }
   
 
   

 
  palavraIsVerifique(){
     var palavra = this.state.palavraFinal;
     var palavraCorreta = this.state.palavraIsCorrect;

    for (let i = 0; i < palavra.length; i++) {
      if(palavra[i]==palavraCorreta[i]){
        this.setState({emoji:this.state.vetorEmoji[0]});
        this.setState({resultado:"Quase"})
      }
      else{
        this.setState({emoji:this.state.vetorEmoji[1]});
        this.setState({resultado:"Errado"})
      }
    }
    if(palavra === palavraCorreta){
      this.setState({resultado:"Correto"})
      this.setState({onFinish:true});
      this.createAtividade();
      setTimeout(
        () => {
          this.setState({ onFinish: false })
          this.setState({ onEncerrar: true })
          
        }, 
        10000
      );
    }
  }

  positionBoudingAtt(){
    var posTop = this.myComplete.current.offsetTop
    var posBottom = posTop + this.myComplete.current.offsetHeight;
    var posLeft =  this.myComplete.current.offsetLeft;
    var posRight = posLeft + this.myComplete.current.offsetWidth;
    
    var bouding = this.myComplete.current.getBoundingClientRect();

    this.setState({myBoxTop:bouding.top})
    this.setState({myBoxBottom:bouding.bottom})
    this.setState({myBoxLeft:bouding.left})
    this.setState({myBoxRight:bouding.right})
    // console.log( bouding ) //Tamanho da tela Complete(Tela onde vai os resultados.)
  }

  onDragStart = (ev, id) =>{
    
  }

  onDragOver(ev){
    ev.preventDefault();
  }


  onDrop = async (texto,cat) => { 
    var task = await this.state.tasks;
    // console.log(task);    
    var taskComplete = [];
    task.map((item)=>(
      item.category =='complete'?taskComplete.push(item):null
    ));
   
    var palavraVetorFinal = [];
    var palavraFinal='';
    await task.forEach((t,i)=>{
      if(t.category === 'complete')
        palavraVetorFinal.push(t)
     
    })
    var vetorOrdenado = (palavraVetorFinal.sort((a,b)=>{
      if(a.ordem < b.ordem)
        return -1
      if (a.ordem > b.ordem)
        return 1
      return 0;
    }));
    this.setState({VetorComplete:vetorOrdenado})
    await vetorOrdenado.map((item)=>{
      palavraFinal=palavraFinal+''+item.name;
    })
    this.setState({palavraFinal:palavraFinal})
    
    this.palavraIsVerifique();
  }

  async statustask(id,status,texto){
    console.log(status,texto);
    this.onDrop();
    var listTask = this.state.tasks;
    var orderFinal = this.state.orderFinal;
  
    status?orderFinal++:orderFinal=orderFinal;
    this.setState({orderFinal});
    // console.log("NUMERO ATUAL=> "+orderFinal);
    // console.log(listTask);
    await listTask.map((item)=>{
      // console.log(item.id);
      if(item.id == id){
        item.ordem = orderFinal;
        status? item.category = 'complete':item.category='wip'
      }
    });
    await this.setState({tasks:listTask});
    this.tentativa_numero(status);
    // console.log(this.state.tasks);

  }
  

  ordenarTasks(a,b){
    // console.log(a.props.ordem + b.props.ordem);
    if (a.props.ordem < b.props.ordem)
        return -1;
    if (a.props.ordem > b.props.ordem)
      return 1;
    return 0;
  }


  render() {
    var tasks={
      wip:[],
      complete:[]
      
    }
 
    // this.setState({palavraFinal:tasks.complete});
    
    // console.log(tasks.complete);
    this.state.tasks.forEach((t,i)=>{
        // console.log(t.ordem);
        // console.log(t.category);
        t.category === 'wip'?
          tasks[t.category].push(
            <DraggableDrop 
              statusStack = {this.statustask}
              onClick = {()=>{alert("click")}}
              key={i}
              ordem={t.ordem}
              texto={t.name}
              id={i}
              onDragStart ={(e)=>this.onDragStart(e,t.id)} 
              draggable
              onDrop={this.onDrop}
              myBoxTop = {this.state.myBoxTop}
              myBoxBottom = {this.state.myBoxBottom}
              myBoxLeft = {this.state.myBoxLeft}
              myBoxRight = {this.state.myBoxRight}
              ref = {React.createRef()}
              positionAttComplete = {()=>this.positionBoudingAtt()}
              draggableoff={false}
              atualizazao={this.tentativa_numero}
              >
              {t.name}
              
          </DraggableDrop>
      )
      :
        tasks[t.category].push(
          <DraggableDrop 
                statusStack = {this.statustask}
                
                key={i}
                ordem={t.ordem}
                texto={t.name}
                id={i}
                onDragStart ={(e)=>this.onDragStart(e,t.id)}
                draggable
                onDrop={this.onDrop}
                myBoxTop = {this.state.myBoxTop}
                myBoxBottom = {this.state.myBoxBottom}
                myBoxLeft = {this.state.myBoxLeft}
                myBoxRight = {this.state.myBoxRight}
                ref = {React.createRef()}
                positionAttComplete = {()=>this.positionBoudingAtt()}
                draggableoff={true}
                atualizazao={this.tentativa_numero}
              >
            {t.name}
          </DraggableDrop>
    )
    tasks.complete = tasks.complete.sort(this.ordenarTasks)
    })
    if(this.state.logoff){
      if (this.state.logoff) {
          return <Redirect to={"/login"} />
        }
    }
    if(this.state.error){
      return(
        <>
          <Menu/>
          <Loading> 
            <h1>NÃO TEM ATIVIDADE NO MOMENTO</h1>
            <img draggable="false" src={`${Gif_Triste}`} alt="figura"/>
            <div className="d-flex my-3">
              <button className="btn btn-danger me-2" onClick={(e)=>(this.handleLogout())}>Sair</button>
              <button className="btn btn-warning me-2" onClick={(e)=>(window.location.reload())}>Atualizar</button>
              <Link className="btn btn-secondary" to="/login">Voltar</Link>
            </div>
          </Loading>
        </>
      )
    }
    if(this.state.onEncerrar===true){
      return(
        window.location.reload()
      )
    }
    else{ 
      return (
        this.state.requicaoComplete?
        <Container Bg={Bg}>
          <Menu/>
          <div className="d-flex justify-content-end my-1">
              <button className="btn btn-danger me-2" onClick={(e)=>(this.handleLogout())}>Sair</button>
              <button className="btn btn-warning text-light me-2" onClick={(e)=>(window.location.reload())}>Atualizar</button>
              <Link className="btn btn-secondary" to="/login">Voltar</Link>
            </div>
          {/* <button className="logoff" onClick={(e)=>(this.handleLogout())}>Sair</button> */}
          {/* <h4>{this.state.timer} - {this.state.palavraFinal}</h4> */}
          <Row className="linha-do-topo">
            <Row className="not-responsive">
             
              <Gif>
                <img draggable="false" src={`${this.state.emoji}`} alt="figura"/>
              </Gif>
              <Figura className="d-flex flex-column ">
                <div className="py-2">
                  <h2 className="display-5">
                    {this.state.questao}
                  </h2>
                </div>
                <img draggable="false" src={`${this.state.figura}`} alt="figura"/>
              </Figura>
              
              <Save onClick={()=>{this.createAtividade(); setTimeout(() => {this.setState({ onEncerrar: true })},500);}}>
                <span>Concluir</span>
            

              </Save>
              
            </Row>
            <Wip className='wip'
              onDragOver={(e)=>this.onDragOver(e)} 
              onDrop={(e)=>this.onDrop(e, "wip")}  
            >
                
                {tasks.wip}
            </Wip>
           
          </Row> 
         
          <Complete className='complete'
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e, "complete")}
            // onMouseOver={()=>this.setState({onMouseEnterComplete:true})} 
            // onMouseLeave={()=>this.setState({onMouseEnterComplete:false})} 
            ref={this.myComplete}
          >
            
            {tasks.complete.sort(this.ordenarTasks)}
            {/* <div style={{width:'5px', height:'5px', background:'#000',position:'fixed', left:0,top:this.state.myBoxTop,transform:'translateX('+this.state.myBoxLeft+'px)'}}></div>
            <div style={{width:'5px', height:'5px', background:'#000',position:'fixed', left:0, top:this.state.myBoxBottom,transform:'translateX('+this.state.myBoxLeft+'px)'}}></div>
            <div style={{width:'5px', height:'5px', background:'#000',position:'fixed', left:this.state.myBoxRight, top:this.state.myBoxTop}}></div>
            <div style={{width:'5px', height:'5px', background:'#000',position:'fixed', left:this.state.myBoxRight, top:this.state.myBoxBottom}}></div>
           */}
  
           
            <div>
                {/* Top:{this.state.myBoxTop} / Bottom:{this.state.myBoxBottom} X Left: {this.state.myBoxLeft} / Right: {this.state.myBoxRight} */}
            </div>
          </Complete>
          {this.state.onFinish?
          <Finish >
              <img className="confete" src={Confete1} />
              <img className="confete" src={Confete2} />
              <audio src={ClapSong} controls autoPlay style={{display:'none'}} />
              <audio src={ConfeteSong} controls autoPlay style={{display:'none'}}  />
              {/* <img className="confete" src={Confete3} /> */}
          </Finish>
          :
          <></>
          }
  
          {/* {this.state.palavraVet.map((item,i) => (
             <DraggableDrop key={i} texto={item} id={i} onDrop={this.onDrop} />
          ))} */}
        </Container>
        :
        <Loading> 
          <h1>Atualizando</h1>
        </Loading>
      );

    }
  }
}
