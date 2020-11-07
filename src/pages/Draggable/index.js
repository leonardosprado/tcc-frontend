import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import { Texto, AreaWip } from './styles';

// import { Container } from './styles';

export default class Draggable extends Component {
    state = {
        isDragging: false,
    
        originalX: 0,
        originalY: 0,
    
        translateX: 0,
        translateY: 0,
    
        lastTranslateX: 0,
        lastTranslateY: 0
      };
    
      componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
      }
    
      handleMouseDown = ({ clientX, clientY }) => {
        console.log("SOLTEI");
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    
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
        console.log("SOLTEI");
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    
        this.setState(
          {
            originalX: 0,
            originalY: 0,
            lastTranslateX: this.state.translateX,
            lastTranslateY: this.state.translateY,
    
            isDragging: false
          },
          () => {
            if (this.props.onDragEnd) {
              this.props.onDragEnd();
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
            x={translateX}
            y={translateY}
            isDragging={isDragging}
          >
           
              <Texto>{this.props.texto}</Texto>
              {/* <p>{this.props.id}</p> */}
              {/* <p>{`${translateX} x ${translateX}`}</p> */}
          
            
          </Container>
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
      /* transition: transform .01s ease-in-out; */
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
