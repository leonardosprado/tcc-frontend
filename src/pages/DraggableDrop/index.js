import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import { Texto, AreaWip } from './styles';

// import { Container } from './styles';

export default class DraggableDrop extends Component {
  
  
  constructor(props){
    super(props);
    this.myItem = React.createRef(); 
    // console.log(this.myItem);
    // alert(this.myItem);
    
  }

 

    state = {
        isDragging: false,
    
        originalX: 20,
        originalY: 0,
    
        translateX: 0,
        translateY: 0,
    
        lastTranslateX: 0,
        lastTranslateY: 0,

        boxEnter:false,


        myItemTop: null,
        myItemBottom: null,
        myItemLeft:null,
        myItemRight:null, 

        bouding:null,

      };

      
      componentDidMount(){
        this.positionBoudingAtt(); 
        this.props.positionAttComplete();

      }

      positionBoudingAtt(){
        var posTop = this.myItem.current.offsetTop;
        var posBottom = posTop + this.myItem.current.offsetHeight;
        var posLeft =  this.myItem.current.offsetLeft;
        var posRight = posLeft + this.myItem.current.offsetWidth;
        var bouding = this.myItem.current.getBoundingClientRect();
        this.setState({bouding:bouding});
        // console.log(bouding);
      

        this.setState({myItemTop:bouding.top})
        this.setState({myItemBottom:bouding.bottom})
        this.setState({myItemLeft:bouding.left})
        this.setState({myItemRight:bouding.right})

     
      }
    
      componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
        
        window.removeEventListener('touchmove', this.handleMouseMove);
        window.removeEventListener('touchend', this.handleMouseUp);
      }
    
      handleMouseDown = ({ clientX, clientY }) => {
       
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);

        window.addEventListener('touchstart', this.handleMouseMove);
        window.addEventListener('touchend', this.handleMouseUp);
    
        if (this.props.onDragStart) {
          this.props.onDragStart();
        }
    
        this.setState({
          originalX: clientX,
          originalY: clientY,
          isDragging: true
        });
      };
    
      handleMouseMove = ({ clientX, clientY }) => {
        const { isDragging } = this.state;
        const { onDrag } = this.props;
    
        if (!isDragging) {
          return;
        }
    
        this.setState(prevState => ({
          translateX: clientX - prevState.originalX + prevState.lastTranslateX,
          translateY: clientY - prevState.originalY + prevState.lastTranslateY
        }), () => {
          
          if (onDrag) {
            onDrag({
              translateX: this.state.translateX,
              translateY: this.state.translateY
            });
          }
        });
      };
    
      handleMouseUp = () => {
        this.props.onDrop();
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
        window.removeEventListener('touchmove', this.handleMouseMove);
        window.removeEventListener('touchend', this.handleMouseUp);
        var bouding = this.myItem.current.getBoundingClientRect();
        // console.log(bouding);
        this.setState(
          {
            originalX: 0,
            originalY: 0,
            lastTranslateX: this.state.translateX,
            lastTranslateY: this.state.translateY,
    
            isDragging: false
          },
          () => {
            this.positionBoudingAtt();
            if (this.props.onDragEnd) {
              this.props.onDragEnd();
             
            }
            if((bouding.top > this.props.myBoxTop && bouding.bottom < this.props.myBoxBottom) && (bouding.left > this.props.myBoxLeft && bouding.right < this.props.myBoxRight)  ){
              this.setState({boxEnter:true});
       
            }
            else{
              this.setState({boxEnter:false});
             
            }
            

          }
        );
      };
    
      render() {
        const { children } = this.props;
        const { translateX, translateY, isDragging } = this.state;
    
        return (
        <>
          <Container
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleMouseDown}
            x={translateX}
            y={translateY}
            isDragging={isDragging}
          >
           
              <Texto
              ref={this.myItem}
              >{this.props.texto}</Texto>
              {/* <p>{this.props.id}</p> */}
              {/* <p>{`${translateX} x ${translateY}`}</p> */}
              {/* <p>{`${this.state.myItemTop} x ${this.state.myItemBottom}`}</p>
              <p>{`${this.state.myItemLeft} x ${this.state.myItemRight}`}</p> */}
              {/* <p>{`${this.props.myBoxTop} x ${this.props.myBoxBottom}`}</p> */}
              {/* <p>{`${this.state.myItemLeft} x ${this.state.myItemRight}`}</p> */}
              {/* <p>{this.props.boxComplete}</p> */}
          
            
          </Container>
          {/* <div>
            {this.state.isDragging?
              <div style={{width:'20px',  height:'20px', background:"#ff0000"}} ></div>: <div style={{width:'20px',  height:'20px', background:"#00ff00"}}></div>
            }
          </div> */}
          <div>
          {
            this.state.boxEnter?
              <div style={{width:'20px',  height:'20px', background:"#0000ff"}} ></div>: <div style={{width:'20px',  height:'20px', background:"#00ff00"}}></div>
            }
          </div>
          </>
        );
      }
    }
    
    const Container = styled.div`
    
      transform: translate(${props=> props.x}px,${props=> props.y}px);
      cursor: grab;
      background:transparent; 
      user-select: none;
      font-size:3rem;
      margin:0rem;
      /* width:50px; */
      transition: transform .1s ease;
      /* height:50px; */
      &:hover{
        opacity:0.8;
      }
      ${({ isDragging }) =>
      isDragging && css`
        opacity: 0.8;
        color:#f1fe1f;
        /* transition:none; */
        cursor: grabbing;
        
      `};
    `;
