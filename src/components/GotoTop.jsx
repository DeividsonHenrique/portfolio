import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #e30606;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &.active {
    visibility: visible;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

function GotoTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return window.removeEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box onClick={scrollTop} className={scroll > 100 ? "active" : ""}>
      <FaArrowUp />
    </Box>
  );
}

export default GotoTop;
