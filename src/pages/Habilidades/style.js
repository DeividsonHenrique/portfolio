import styled from "styled-components";

export const SkillsContainer = styled.div`
    max-width: 1400px;
    width: 100%;
    height: 87vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`


export const CardSkills = styled.div`
  height: 600px;
  width: 460px;
  background-color: #ccc;

  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Modulo = styled.div`
  height: 85px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-bottom: -10px;
  }

  span {
    &:nth-child(2) {
      width: 2px;
      height: 55px;
      background-color: black;
      display: block;
      border-radius: 50%;
      margin-left: 7px;
    }

    &:nth-child(3) {
      width: 100%;
      height: 7px;
      background-color: aqua;
      display: block;
      border-radius: 5px;
    }
  }
`;


export const ModuloTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-family: var(--fonte1);
  margin-left: 5px;
  transition: all 0.5s ease-in-out;
`;

export const ModuloBall = styled.span`
  width: 15px;
  height: 15px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;

export const Icons = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    row-gap: 0;
    justify-items: center;
    align-items: center;
    
    

    div{
        width: 100px;
        height: 125px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    img{
        width: 100px;
        height: 100px;
    }

    p{
        font-family: var(--fonte1)
        font-size: 15px;
        font-weight: 500;
        color: white;
    }
`

export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;

`