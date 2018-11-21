import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const Page = styled.div`
  display: flex; 
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
`

const Calculator = styled.div`
  width: 400px;
  border-radius: 30px;
  height: auto;
  margin: 15px 0;
  display: flex; 
  justify-content: center; 
  flex-wrap: wrap;
`

const OutputBox = styled.div`
  width: 310px; 
  height: 100px; 
  border: 1px solid white; 
  border-radius: 20px;
  margin: 10px;
  display: flex; 
  justify-content: flex-end;
  align-items: center;
  font-size: 25px;
  overflow: hidden;
`

const NumBtnContainer = styled.div`
  display: flex; 
  width: auto;
  height: auto; 
  padding: 5px;
`

const Button = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid white;
  border-radius: 20px;
  margin: 5px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  cursor: pointer;
  &:hover{
    animation: colorchange 1s infinite;
    @keyframes colorchange{
      0% {
        background-color: none;
        color: white;
        }
      50% {
        background-color: white;
        color: black;
      }
      100% {
        background-color: none;
        color: white;
      }
    }
  }
`
const ZeroBtn = styled.div`
  width: 231px; 
  height: 70px;
  border: 1px solid white;
  border-radius: 20px;
  margin: 5px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  cursor: pointer;
  &:hover{
    animation: colorchange 1s infinite;
    @keyframes colorchange{
      0% {
        background-color: none;
        color: white;
        }
      50% {
        background-color: white;
        color: black;
      }
      100% {
        background-color: none;
        color: white;
      }
    }
  }
`


class App extends Component {
  constructor(){
    super();
    this.state={
      operator: '',
      current: '',
      total: '', 
    }
    this.handleType = this.handleType.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  handleType (e) {
    const value = e.target.attributes.getNamedItem('data-filter').value;

    this.setState(() => {
      const current = (this.state.current == 0 || this.state.current == this.state.total ) ? '' : this.state.current;
      return {current: parseInt(current + value)};
    });
      
  }
 calculate() {
    const total = parseInt(this.state.total);
    const current = parseInt(this.state.current);
    const sign = this.state.operator;
    switch(sign){
       case "-":
        return total - current;
          break;
       case "+":
          return  total + current;
          break;
       case "*":
          return  total * current;
          break;
       case "/":
          return  total / current;
          break;
       default:
          return 0;
     }
  };
  handleAction (e) {
    const operator = e.target.attributes.getNamedItem('data-filter').value;

    this.setState((prevState) => {
      return {
        total: prevState.current,
        operator: operator,
        current: 0
      }
    });
    console.log(this.state);
  }
  getResult () {
    this.setState({
      current: this.calculate(this.state.operator, this.state.current)
    });
  }

  cancel = () => {
    this.setState({
       total: '',
       current: '',
       operator: ''
    })
 }
 

  
  render() {
    return (
      <Page>
        <Calculator>
          <NumBtnContainer>
          <OutputBox>
            <h2>{this.state.current}</h2>
          </OutputBox>
          </NumBtnContainer>
          <NumBtnContainer>
            <ZeroBtn onClick={this.cancel}>
              C
            </ZeroBtn>
            <Button data-filter="/" onClick={this.handleAction}>
              /
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <Button data-filter="7" onClick={this.handleType}>
              7
            </Button>
            <Button data-filter="8" onClick={this.handleType}>
              8
            </Button>
            <Button data-filter="9" onClick={this.handleType}>
              9
            </Button>
            <Button data-filter="*" onClick={this.handleAction}>
              *
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <Button data-filter="4" onClick={this.handleType}>
              4
            </Button>
            <Button data-filter="5" onClick={this.handleType}>
              5
            </Button>
            <Button data-filter="6" onClick={this.handleType}>
              6
            </Button>
            <Button data-filter="-" onClick={this.handleAction}>
              -
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <Button data-filter="1" onClick={this.handleType}>
              1
            </Button>
            <Button data-filter="2" onClick={this.handleType}>
              2
            </Button>
            <Button data-filter="3" onClick={this.handleType}>
              3
            </Button>
            <Button data-filter="+" onClick={this.handleAction}>
              +
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <ZeroBtn data-filter="0" onClick={this.handleType}>
              0
            </ZeroBtn>
            <Button onClick={this.getResult}>
              =
            </Button>
          </NumBtnContainer>
        </Calculator>
      </Page>
    );
  }
}

export default App;
