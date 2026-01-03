'use client';

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

const StyledInput = styled.input`
  height: 32px;
  border-radius: 4px;
  border: 2px solid rgba(217, 217, 217, 1);
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  font-family: Outfit;
  transition: border-color linear 0.3s;

  &:active,
  &:focus {
    border-color: var(--color-primary);
  }
`;

type Props = {
  label?: string;
  name?: string;
  id?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

const Input: React.FC<Props> = ({ label, type, required, name, id, defaultValue, placeholder }) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        type={type}
        name={name}
        id={id}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default Input;
