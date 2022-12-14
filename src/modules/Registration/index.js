import styled from 'styled-components';

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AnimatedText = styled.div`
  html,
  body {
    height: 100%;
    font-weight: 800;
  }

  body {
    background: #4e89cc;
    font-family: Arial;
  }

  svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 100vw;
    height: 50vh;
    margin: 0 auto;
  }

  .text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
    @media screen and (max-width: 1024px) {
      font-size: 140px !important;
    }
  }

  .text-copy:nth-child(1) {
    stroke: #4e89cc;
    animation-delay: -1;
  }

  .text-copy:nth-child(2) {
    stroke: #9cbde2;
    animation-delay: -2s;
  }

  .text-copy:nth-child(3) {
    stroke: #1a0066;
    animation-delay: -3s;
  }

  .text-copy:nth-child(4) {
    stroke: #2e629e;
    animation-delay: -4s;
  }

  .text-copy:nth-child(5) {
    stroke: #ae9ce2;
    animation-delay: -5s;
  }

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
`;

export const AText = styled.div`
  .animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #4e89cc 0%,
      #9cbde2 29%,
      #1a0066 67%,
      #2e629e 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 100px;
    @media screen and (max-width: 1024px) {
      font-size: 70px !important;
    }
    @media screen and (max-width: 768px) {
      font-size: 60px !important;
    }
    @media screen and (max-width: 480px) {
      font-size: 40px !important;
      position: relative;
      top: -15vh;
    }
    @media screen and (max-width: 300px) {
      font-size: 30px !important;
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
