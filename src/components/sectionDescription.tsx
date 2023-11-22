import styled, { css } from 'styled-components';

const SectionDescription = styled.p<{ light?: boolean }>`
  font-family: Outfit;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 30px;
  margin-top: 30px;

  ${({ light }) =>
    light
      ? css`
          color: #e1e1e1;
        `
      : css`
          color: #121212;
        `}
`;

export default SectionDescription;
