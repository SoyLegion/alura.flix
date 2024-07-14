import styled from "styled-components";
import BotonesHeader from "./ButtonsHeader";


const HeaderEstilizado = styled.header`
    padding: 30px 20px;
    width: 100%;
    display: flex;
    background-color: #0A0A0A;
    flex-direction: row;
    justify-content: space-between;
    img{
        width: 212px;
    }
    
`

const Cabecera =() => {
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo Alura Flix" />
        <BotonesHeader/>
    </HeaderEstilizado>
}

export default Cabecera;