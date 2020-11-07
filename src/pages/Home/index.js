import React, { Component } from 'react';
import Draggable from '../Draggable';

import { Container,Wip, Complete, Letter } from './styles';
import DraggableDrop from '../DraggableDrop';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.myComplete = React.createRef(); //Referenciar o component Complete, onde vai ser jogado as palavras. 

    this.state = {
      palavraVet:[],
      palavra:'Leonardo',
      tasks:[],
      onMouseEnterComplete:false,
      selectOn:null,
      myBoxTop: null,
      myBoxBottom: null,
      myBoxLeft:null,
      myBoxRight:null
    }
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
 
    var tasks = new Array();
    var task = null;
    for(let i=0; i<palavra.length; i++){
      task = {
        id:i,
        name:palavra[i],
        category:'wip'
      }
      tasks[i] = task;
      palavraVet[i] = palavra[i];

    }
    
    this.setState({palavraVet:palavraVet, tasks:tasks});
  }

  componentDidMount(){
    this.vetorizacao_static();
    this.positionBoudingAtt();
  
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
    // this.setState({selectOn:id});
    // console.log('dragstart:', id);
    // ev.dataTransfer.setData("id",id);
  }

  onDragOver(ev){
    ev.preventDefault();
  }


  onDrop = (ev,cat) => {
      // console.log(ev);

  }

  render() {
    var tasks={
      wip:[],
      complete:[]
      
    }
    this.state.tasks.forEach((t,i)=>{
        t.category === 'wip'?
        tasks[t.category].push(
          <DraggableDrop 
          
            key={i}
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
            >
            {t.name}
            
        </DraggableDrop>
      )
      :
      tasks[t.category].push(
        <DraggableDrop 
        key={i}
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
       
        >
        {t.name}
      </DraggableDrop>
    )
    
    })
    return (
      <Container>
        {/* <input value={this.state.palavra} onChange={(e)=> this.vetorizacao(e)}  /> */}
        <h2>INTERFACE DE APOIP AO LETRAMENTO - APRENDIZ</h2>
        <h3>{this.state.onMouseEnterComplete?'Solte aqui':'Pegue uma Letra'}</h3>
        <Wip className='wip'
          onDragOver={(e)=>this.onDragOver(e)} 
          onDrop={(e)=>this.onDrop(e, "wip")}  
        >
          {tasks.wip}
        </Wip> 

        <Complete className='complete'
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDrop(e, "complete")}
          onMouseOver={()=>this.setState({onMouseEnterComplete:true})} 
          onMouseLeave={()=>this.setState({onMouseEnterComplete:false})} 
          ref={this.myComplete}
        >
          {tasks.complete}
          <div>
              {this.state.myBoxTop} / {this.state.myBoxBottom} X {this.state.myBoxLeft} / {this.state.myBoxRight}
          </div>
        </Complete>
        {/* {this.state.palavraVet.map((item,i) => (
           <DraggableDrop key={i} texto={item} id={i} onDrop={this.onDrop} />
        ))} */}
      </Container>
    );
  }
}
