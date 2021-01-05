import styled from 'styled-components';

export const Body = styled.div`
    

`;

export const Container = styled.div`
    width:1120px;
    margin:0 auto;
    padding:40px 0;
    display:flex;
    justify-content:space-between;

    > p {
        color:var(--jadri-color-4-hex);
        font-size: 40px;
    }

    div {

        h5 {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
        }
    }
`;

export const LocaleContent = styled.div`
    margin:15px 0;
    width:600px;
`;

export const SocialIcons = styled.div`
    margin:15px 0;

    display:flex;
    justify-content:space-between;
    align-items:center;

`;

interface ColorIconProps {
    colorIcon:string;
}

export const ColorIcon = styled.div<ColorIconProps>`

    transition:0.2s;
    color:black;
    cursor:pointer;

    :hover{
        color:${props=>props.colorIcon};
    }

`;