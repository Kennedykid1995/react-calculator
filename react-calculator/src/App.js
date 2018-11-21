import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const Page = styled.div`
  display: flex; 
  justify-content: center;
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
  width: 151.5px; 
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
  render() {
    return (
      <Page>
        <Calculator>
          <NumBtnContainer>
          <OutputBox>
          </OutputBox>
          </NumBtnContainer>
          <NumBtnContainer>
            <Button>
              C
            </Button>
            <Button>
              +/-
            </Button>
            <Button>
              %
            </Button>
            <Button>
              /
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <Button>
              7
            </Button>
            <Button>
              8
            </Button>
            <Button>
              9
            </Button>
            <Button>
              X
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <Button>
              4
            </Button>
            <Button>
              5
            </Button>
            <Button>
              6
            </Button>
            <Button>
              -
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <Button>
              1
            </Button>
            <Button>
              2
            </Button>
            <Button>
              3
            </Button>
            <Button>
              +
            </Button>
          </NumBtnContainer>
          <NumBtnContainer>
            <ZeroBtn>
              0
            </ZeroBtn>
            <Button>
              .
            </Button>
            <Button>
              =
            </Button>
          </NumBtnContainer>
        </Calculator>
      </Page>
    );
  }
}

export default App;
