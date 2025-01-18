import styled from "styled-components";

const BackgroundC = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  left: 0;
  opacity: 0.1;

  .shape {
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.6;
    animation: float 8s infinite alternate ease-in-out;
  }

  .yellow {
    background: radial-gradient(circle, #ffe700, #e4a700);
    width: 600px;
    height: 600px;
    top: -150px;
    left: -400px;
    animation: yellow 12s infinite alternate ease-in-out;

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      top: -100px;
      left: -200px;
    }

    @media (min-width: 481px) and (max-width: 991px) {
      width: 300px;
      height: 300px;
      top: -100px;
      left: -200px;
    }

    @media (min-width: 992px) and (max-width: 1600px) {
      width: 400px;
      height: 400px;
      top: -100px;
      left: -200px;
    }
  }

  .red {
    background: radial-gradient(circle, #ff4e50, #ff0000);
    width: 500px;
    height: 500px;
    top: 10px;
    right: -400px;
    animation: red 14s infinite alternate ease-in-out;

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      top: 50px;
      right: -100px;
    }

    @media (min-width: 481px) and (max-width: 991px) {
      width: 300px;
      height: 300px;
      top: 50px;
      right: -100px;
    }

    @media (min-width: 992px) and (max-width: 1600px) {
      width: 400px;
      height: 400px;
      top: 50px;
      right: -100px;
    }
  }

  .blue {
    background: radial-gradient(circle, #4e91ff, #0014ff);
    width: 500px;
    height: 500px;
    bottom: -200px;
    left: -300px;
    animation: blue 10s infinite alternate ease-in-out;

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      bottom: -100px;
      left: -100px;
    }

    @media (min-width: 481px) and (max-width: 991px) {
      width: 300px;
      height: 300px;
      bottom: -100px;
      left: -100px;
    }

    @media (min-width: 992px) and (max-width: 1600px) {
      width: 400px;
      height: 400px;
      bottom: -100px;
      left: -100px;
    }
  }

  .green {
    background: radial-gradient(circle, #74ff89, #00e400);
    width: 600px;
    height: 600px;
    bottom: -20%;
    right: -400px;
    animation: green 13s infinite alternate ease-in-out;

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      bottom: 50px;
      right: -100px;
    }

    @media (min-width: 481px) and (max-width: 991px) {
      width: 300px;
      height: 300px;
      bottom: 50px;
      right: -100px;
    }

    @media (min-width: 992px) and (max-width: 1600px) {
      width: 400px;
      height: 400px;
      bottom: 50px;
      right: -100px;
    }
  }

  @keyframes yellow {
    0% {
      transform: translateX(0) scale(1);
      -webkit-transform: translateX(0) scale(1);
    }
    100% {
      transform: translateX(150px) scale(1.1);
      -webkit-transform: translateX(150px) scale(1.1);
    }
  }

  @keyframes red {
    0% {
      transform: translateY(-50px) rotate(0deg);
      -webkit-transform: translateY(-50px) rotate(0deg);
    }
    100% {
      transform: translateY(100px) rotate(15deg);
      -webkit-transform: translateY(100px) rotate(15deg);
    }
  }

  @keyframes blue {
    0% {
      transform: translateX(-50px) rotate(0deg);
      -webkit-transform: translateX(-50px) rotate(0deg);
    }
    100% {
      transform: translateX(100px) rotate(-15deg);
      -webkit-transform: translateX(100px) rotate(-15deg);
    }
  }

  @keyframes green {
    0% {
      transform: translateY(0) scale(1);
      -webkit-transform: translateY(0) scale(1);
    }
    100% {
      transform: translateY(-100px) scale(1.2);
      -webkit-transform: translateY(-100px) scale(1.2);
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
