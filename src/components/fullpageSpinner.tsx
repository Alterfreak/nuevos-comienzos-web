import React from 'react';
import styled from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa6';

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(FaCircleNotch)`
  animation:
    beat-fade 2s,
    spin 1.5s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-iteration-count: infinite;
  color: var(--contrast);

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--fa-beat-fade-opacity, 0.4);
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    50% {
      opacity: 1;
      -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
      transform: scale(var(--fa-beat-fade-scale, 1.125));
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
`;

const FullPageSpinner: React.FC = () => {
  return (
    <Wrapper>
      <StyledIcon size={60} className="fa-fw fa-2x fa-beat-fade" />
    </Wrapper>
  );
};

export default FullPageSpinner;
