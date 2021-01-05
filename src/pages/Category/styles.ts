import styled from 'styled-components';

export const Body = styled.div``;

export const Container = styled.div`
    width:1120px;
    margin:0 auto;
`;

export const PresentationSession = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
`;

export const PresentationText = styled.div`

    h3{
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 50px;
    }
    p{
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
        line-height: 20px;
        color:var(--jadri-color-text-success);
    }

`;

export const VectorImageContent = styled.div`
    img {
        width:500px;
    }
`;