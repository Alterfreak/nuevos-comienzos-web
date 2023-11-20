import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Label = styled.label`
  max-width: 1320px;
  width: 100%;
  position: relative;
  font-family: Outfit;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
`;

const StyledInput = styled.textarea`
  height: 96px;
  border-radius: 4px;
  border: 2px solid rgba(217, 217, 217, 1);
  outline: none;
  padding: 10px;
  font-size: 16px;
  font-family: Outfit;
  transition: border-color linear 0.3s;

  &:active,
  &:focus {
    border-color: var(--contrast);
  }
`;

type Props = {
  label?: string;
  name?: string;
  id?: string;
};

const Textarea: React.FC<Props> = ({ label, name, id }) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput name={name} id={id} />
    </Wrapper>
  );
};

export default Textarea;
