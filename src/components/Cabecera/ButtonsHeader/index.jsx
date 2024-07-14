import styled from "styled-components";
import BotonHome from "./ButtonHome";




const ContainerBotones = styled.div`
    width: 380px;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: white;
    
`



const BotonesHeader = () => {
    return (
        
            <ContainerBotones>
                <BotonHome />
                
          </ContainerBotones>
       

    )
}

export default BotonesHeader;