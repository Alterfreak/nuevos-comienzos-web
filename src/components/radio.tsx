'use client';

import * as React from 'react';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  gap: 8px;
  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr;
`;

const Label = styled.label`
  max-width: 1320px;
  width: 100%;
  position: relative;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #aaaaaa;
  cursor: pointer;
  user-select: none;
`;

const StyledInput = styled.input`
  height: 15px;
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  transition: border-color linear 0.3s;
  color: #eee;
  cursor: pointer;
  margin: 0;

  &:active,
  &:focus {
    border-color: var(--color3);
  }
`;

type Props = {
  label?: string;
  name?: string;
  id?: string;
  required?: boolean;
  value: string;
  checked: boolean;
  onClick?: () => void;
};

const Radio: React.FC<Props> = ({ label, required, name, id, checked, value, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <StyledInput
        onChange={() => {}}
        type="radio"
        name={name}
        id={id}
        required={required}
        value={value}
        checked={checked}
      />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Wrapper>
  );
};

export default Radio;

const RadioGroupWrapper = styled.div`
  display: grid;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  grid-template-rows: max-content 1fr;
`;

const RadioGroupOptions = styled.div<{ $layout: 'horizontal' | 'vertical' }>`
  ${({ $layout }) =>
    $layout === 'horizontal'
      ? css`
          display: flex;
          flex-wrap: wrap;
        `
      : css`
          display: grid;
        `}
  gap: 16px;
`;

type Option = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  options: Option[];
  selected: string;
  label: string;
  layout: 'horizontal' | 'vertical';
  name: string;
  required: boolean;
  onChange: (option: Option) => void;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  required,
  selected,
  layout,
  name,
  label,
  onChange,
}) => {
  return (
    <RadioGroupWrapper>
      {label && (
        <Label>
          {label}
          {required && '*'}
        </Label>
      )}
      <RadioGroupOptions $layout={layout}>
        {options.map(option => (
          <Radio
            key={option.value}
            onClick={() => {
              onChange(option);
            }}
            id={option.value}
            name={name}
            value={option.value}
            label={option.label}
            checked={selected === option.value}
          />
        ))}
      </RadioGroupOptions>
    </RadioGroupWrapper>
  );
};
