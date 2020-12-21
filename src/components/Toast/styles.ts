import styled, { css } from "styled-components";

interface ToastContentProps {
    type: 'success' | 'info' | 'error';
    hasDescription: boolean;
}


const toastTypeVariations = {
    info: css`
        background:#ebffff;
        color:#3172b7;
    `,

    error: css`
        background:red;
        color:#e6fffa;
    `,

    success: css`
        background:green;
        color:#e6fffa;
`,
};


export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;


export const ToastContent = styled.div<ToastContentProps>`
    width:360px;

    position:relative;
    padding:16px 30px 16px 16px;

    border-radius:10px;
    box-shadow:2px 2px 8px rgba(0,0,0,0.2);

    display:flex;

    & + div {
        margin-top:8px;
    }

    ${(props) => toastTypeVariations[props.type] || 'info'}


    > svg {
        margin:4px 12px 0px 0px;
    }

    div {
        flex:1;

        p{
            margin-top:8px;
            font-size:14px;
            opacity:0.7;
            line-height:20px;

        }
    }

    button {
        position:absolute;
        right:16px;
        top:19px;
        opacity:0.6;
        border:0;
        background:transparent;
        color:inherit;
    }


    ${(props) => !props.hasDescription && css`

        align-items:center;

        svg {
            margin-top:0;

        }

        button {

        }

    
    `}
`;


