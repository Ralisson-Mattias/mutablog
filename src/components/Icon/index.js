import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

const SVGWrapper = styled.svg`
  fill: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover .octo-arm{
    animation:octocat-wave 560ms ease-in-out
  }
  @keyframes octocat-wave{
    0%,100%{transform:rotate(0)}
    20%,60%{transform:rotate(-25deg)}
    40%,80%{transform:rotate(10deg)}
  }
  @media (max-width:500px){
    &:hover .octo-arm{
      animation:none
    }
    & .octo-arm{
      animation:octocat-wave 560ms ease-in-out
    }
  }
`;

export default function Icon({ projectUrl }) {
    return (
        <Wrapper>
            <a href={projectUrl} target="_blank" rel="noreferrer">
                <SVGWrapper className="linkedinIcon" width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
                    <path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9    S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204    V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z" fill="#ffffff" data-original="#000000" style={{ alignItems: 'center' }} class="" />
                </SVGWrapper>
            </a>
        </Wrapper>
    );
} 