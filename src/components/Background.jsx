import styled from "styled-components";

const BackgroundC = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  left: 0;
  opacity: 0.5;

  .shape {
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.6;
    animation: float 8s infinite alternate ease-in-out;
  }

  .yellow {
    background: radial-gradient(circle, #ffe700, #e4a700);
    width: 800px;
    height: 800px;
    top: -150px;
    left: -400px;
    animation: yellow 12s infinite alternate ease-in-out;
  }

  .red {
    background: radial-gradient(circle, #ff4e50, #ff0000);
    width: 1000px;
    height: 1000px;
    top: 100px;
    right: -500px;
    animation: red 14s infinite alternate ease-in-out;
  }

  .blue {
    background: radial-gradient(circle, #4e91ff, #0014ff);
    width: 700px;
    height: 700px;
    bottom: -200px;
    left: -300px;
    animation: blue 10s infinite alternate ease-in-out;
  }

  .green {
    background: radial-gradient(circle, #74ff89, #00e400);
    width: 900px;
    height: 900px;
    bottom: 50px;
    right: -400px;
    animation: green 13s infinite alternate ease-in-out;
  }

  .ellipse {
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    width: 400px;
    height: 200px;
    border-radius: 50% / 25%;
    filter: blur(5px);
    animation: float 8s infinite alternate ease-in-out;
  }

  .ellipse.one {
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    animation: ellipseOne 10s infinite alternate ease-in-out;
  }

  .ellipse.two {
    bottom: 150px;
    right: 20%;
    animation: ellipseTwo 12s infinite alternate ease-in-out;
  }

  .ellipse.three{
    position: absolute;
    bottom: 50px;
    right: 0;
    animation: ellipseThree 14s infinite alternate ease-in-out;
  }

  .ellipse.four{
    position: absolute;
    bottom: 300px;
    right: 0;
    animation: ellipseThree 14s infinite alternate ease-in-out;
  }

  @keyframes yellow {
    0% {
      transform: translateX(0) scale(1);
    }
    100% {
      transform: translateX(150px) scale(1.1);
    }
  }

  @keyframes red {
    0% {
      transform: translateY(-50px) rotate(0deg);
    }
    100% {
      transform: translateY(100px) rotate(15deg);
    }
  }

  @keyframes blue {
    0% {
      transform: translateX(-50px) rotate(0deg);
    }
    100% {
      transform: translateX(100px) rotate(-15deg);
    }
  }

  @keyframes green {
    0% {
      transform: translateY(0) scale(1);
    }
    100% {
      transform: translateY(-100px) scale(1.2);
    }
  }

  @keyframes ellipseOne {
    0% {
      transform: translateX(-50%) translateY(0) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(-50px) rotate(20deg);
    }
  }

  @keyframes ellipseTwo {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(50px) rotate(-20deg);
    }
  }

  @keyframes ellipseThree {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(50px) rotate(20deg);
    }
  }

  @keyframes ellipseFour {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(-50px) rotate(-20deg);
    }
  }
`;

function Background() {
  return (
    <BackgroundC>
      <div className="shape yellow"></div>
      <div className="shape red"></div>
      <div className="shape blue"></div>
      <div className="shape green"></div>
      <div className="ellipse one"></div>
      <div className="ellipse two"></div>
      <div className="ellipse three"></div>
      <div className="ellipse four"></div>
    </BackgroundC>
  );
}

export default Background;
