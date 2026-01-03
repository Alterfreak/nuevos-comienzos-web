'use client';

import * as React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const buttonStyles = css<{ $hoverStyle: 'primary' | 'secondary' }>`
  color: var(--color-primary-text);
  background: var(--color-primary);
  border: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Outfit';
  padding: 20px 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all linear 0.3s;
  text-decoration: none;

  &:hover {
    ${({ $hoverStyle }) => {
      if ($hoverStyle === 'secondary') {
        return css`
          background: white;
          color: #121212;
        `;
      }
      return css`
        background: var(--color-primary-strong);
        color: white;
        border-color: var(--color-primary-strong);
      `;
    }}
  }

  &:focus-visible {
    outline: 3px solid rgba(126, 217, 87, 0.6);
    outline-offset: 3px;
  }
`;

const StyledButton = styled.button<{ $hoverStyle: 'primary' | 'secondary' }>`
  ${buttonStyles};
`;

const StyledLink = styled(Link)<{ $hoverStyle: 'primary' | 'secondary' }>`
  ${buttonStyles};
`;

const StyledAnchor = styled.a<{ $hoverStyle: 'primary' | 'secondary' }>`
  ${buttonStyles};
`;

type Props = {
  label: string;
  hoverStyle?: 'primary' | 'secondary';
  type?: HTMLButtonElement['type'];
  className?: string;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  ariaLabel?: string;
};

const Button: React.FC<Props> = ({
  label,
  type,
  hoverStyle = 'primary',
  className,
  href,
  target,
  rel,
  onClick,
  ariaLabel,
}) => {
  const isExternal = !!href && (/^https?:\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:'));
  if (href) {
    if (isExternal) {
      const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;
      return (
        <StyledAnchor
          href={href}
          target={target}
          rel={safeRel}
          onClick={onClick}
          aria-label={ariaLabel}
          $hoverStyle={hoverStyle}
          className={className}
        >
          {label}
        </StyledAnchor>
      );
    }
    return (
      <StyledLink
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        $hoverStyle={hoverStyle}
        className={className}
      >
        {label}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      aria-label={ariaLabel}
      $hoverStyle={hoverStyle}
      className={className}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
