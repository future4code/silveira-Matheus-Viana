import React from "react";
import styled from "styled-components";

const ButtonPushable = styled.button`
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    span{
      display: block;
      position: relative;
      padding: 12px 42px;
      border-radius: 12px;
      font-size: 1.25rem;
      color: white;
      background: hsl(345deg 100% 47%);
      will-change: transform;
      transform: translateY(-4px);
      transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
      }
    :hover{      
      filter: brightness(110%);
    }
    :hover > span{      
      transform: translateY(-6px);
      transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
    }
    :hover > Shadow{
      transform: translateY(4px);
      transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
    }
    :active{      
      transform: translateY(-2px);
    }
    :active > span{
      transform: translateY(-2px);
      transition: transform 34ms;
    }
    :active > Shadow{      
      transform: translateY(1px);
      transition: transform 34ms;
    }
    :focus:not(:focus-visible) {
      outline: none;
    }
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
`;

const Edge = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
`;

const ButtonThreeD = (props) => {
  return (
    <div>
          <ButtonPushable onClick={props.onClick}>
            <Shadow/>
            <Edge/>
            <span>{props.text}</span>
          </ButtonPushable>
    </div>
  );
};

export default ButtonThreeD;
