import styled from 'styled-components';

export const Dots = styled.div`
  height: 30px;

  .dots-flow:before {
    -webkit-animation: dots-flow 0.85s infinite ease;
    animation: dots-flow 0.85s infinite ease;
    border-radius: 100%;
    content: '';
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -40px);
    transform: translate(-50%, -40px);
    width: 16px;
  }

  @-webkit-keyframes dots-flow {
    0%,
    100% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 0 white;
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 0 white;
    }
    35% {
      -webkit-box-shadow: -26px 32px 0 4px #4e89cc, 0px 32px 0 0 white,
        26px 32px 0 0 white;
      box-shadow: -26px 32px 0 4px #4e89cc, 0px 32px 0 0 white,
        26px 32px 0 0 white;
    }
    50% {
      -webkit-box-shadow: -26px 32px 0 0 white, 0px 32px 0 4px #4e89cc,
        26px 32px 0 0 white;
      box-shadow: -26px 32px 0 0 white, 0px 32px 0 4px #4e89cc,
        26px 32px 0 0 white;
    }
    65% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px #4e89cc;
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px #4e89cc;
    }
  }

  @keyframes dots-flow {
    0%,
    100% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 0 white;
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 0 white;
    }
    35% {
      -webkit-box-shadow: -26px 32px 0 4px #4e89cc, 0px 32px 0 0 white,
        26px 32px 0 0 white;
      box-shadow: -26px 32px 0 4px #4e89cc, 0px 32px 0 0 white,
        26px 32px 0 0 white;
    }
    50% {
      -webkit-box-shadow: -26px 32px 0 0 white, 0px 32px 0 4px #4e89cc,
        26px 32px 0 0 white;
      box-shadow: -26px 32px 0 0 white, 0px 32px 0 4px #4e89cc,
        26px 32px 0 0 white;
    }
    65% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px #4e89cc;
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px #4e89cc;
    }
  }
`;
