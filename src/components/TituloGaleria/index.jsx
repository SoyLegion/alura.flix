import styled from "styled-components";

const Titulo = styled.h2`
    padding: 25px 0;
    font-size: 36px;
    font-weight: bold;
    color: #2271D1;
    text-align: ${props => props.$align ? props.$align : "center" };
`

export default Titulo;