import styled from "styled-components";

export const BackgroundC = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: transparent;
  z-index: -1;
  overflow: hidden;

  @keyframes light {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      transform: translateY(100vh);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }

  @keyframes lightRed {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      transform: translateY(100vh);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }

  .purple {
    position: absolute;
    background-color: purple; /* Cor das estrelas */
    border-radius: 50%;
    //box-shadow: 0px 0px 10px 0px purple, 0px 0px 10px 0px purple;
    opacity: 0.8;
    animation: light linear infinite;
  }

  .red {
    position: absolute;
    background-color: red; /* Cor das estrelas */
    border-radius: 50%;
    //box-shadow: 0px 0px 10px 0px red, 0px 0px 10px 0px red;
    opacity: 0.8;
    animation: lightRed linear infinite;
  }
`;

function Background() {
  const purpleLine = 20;
  const redLine = 20;

  const generateCircles = () => {
    const circles = [];
    for (let i = 0; i < purpleLine + redLine; i++) {
      const size = Math.random() * 10 + 3;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 30 + 20;

      const type = i < redLine ? "red" : "purple";

      circles.push(
        <div
          className={type}
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDuration: `${duration}s`,
          }}
        ></div>
      );
    }
    
    return circles;
  };
  return <BackgroundC>{generateCircles()}</BackgroundC>;
}

export default Background;
