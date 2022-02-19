import styled from "styled-components";

const TextStyle = styled.div`
    font-family: 'Noto Sans JP';
    color: ${props => props.color};
    ${props => props.bold ? 'font-weight: bold' : null};
    text-align: ${props => props.align};
    padding-top: ${props => props.pt}px;
    padding-left: ${props => props.pleft}px;
    font-size: ${props => props.fs}px;



    
export { Container, ContainerView, ImageLogo };
