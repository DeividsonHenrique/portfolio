import styled from "styled-components";

const BackgroundC = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;

  .yellow,
  .red,
  .blue,
  .green {
    height: 500px;
    width: 500px;
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.4;
  }

  .yellow {
    border: 120px solid #e4e400;
    width: 1000px;
    top: -100px;
    left: -550px;
    background-color: transparent;
    animation: yellow 10s infinite linear alternate;
  }

  .red {
    border: 150px solid #0000e4;
    width: 1500px;
    height: 800px;
    top: -100px;
    right: -200px;
    background-color: transparent;
    animation: red 10s infinite linear alternate;
  }

  .blue {
    border: 120px solid #0000e4;
    width: 1100px;
    height: 800px;
    bottom: -100px;
    left: -550px;
    background-color: transparent;
    animation: blue 10s infinite linear alternate;
  }

  .green {
    border: 150px solid #00e400;
    width: 1100px;
    height: 700px;
    bottom: -100px;
    right: 200px;
    background-color: transparent;
    animation: green 10s infinite linear alternate;
  }

  @keyframes yellow {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(100px);
    }
  }

  @keyframes red {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(500px);
    }
  }

  @keyframes blue {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(200px);
    }
  }

  @keyframes green {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-500px);
    }
  }
`;

function Background() {
  return (
    <BackgroundC>
      <div className="yellow"></div>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="green"></div>
    </BackgroundC>
  );
}

export default Background;
