import styled from "styled-components";

export const DetalhesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding-top: 50px;
`;

export const Descricao = styled.div`
  max-width: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const DivButtons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    font-family: var(--fonte1);
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #770000;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    }

    .link {
      margin-left: 5px;
    }

    .seta {
      margin-right: 5px;
    }
  }
`;

export const Sobre = styled.div`
  margin-block: 20px;
`;
export const Subtitle = styled.h2`
  color: white;
  font-family: var(--fonte1);
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;

  img {
    margin-right: 10px;
  }
`;

export const DivTechAndFunc = styled.div`
  margin-block: 20px;
`;

export const Text = styled.p`
  color: white;
  font-family: var(--fonte1);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  transition: all 0.5s ease-in-out;
  text-indent: 10px;
`;

export const LiList = styled.li`
  list-style-type: none;
  color: white;
  font-family: var(--fonte1);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  transition: all 0.5s ease-in-out;

  strong {
    margin-right: 5px;
    transition: all 0.5s ease-in-out;
  }
`;

export const Data = styled.span`
  color: white;
  font-family: var(--fonte1);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-block: 20px;
  transition: all 0.5s ease-in-out;

  strong {
    margin-right: 5px;
    transition: all 0.5s ease-in-out;
  }

  img {
    margin-right: 10px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 100vh;
  background-color: #770000;
`;

export const DivImages = styled.div`
  max-width: 620px;
  width: 100%;

  img {
    width: 100%;
    margin-block: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;
