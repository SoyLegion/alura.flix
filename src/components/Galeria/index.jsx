import styled from "styled-components";
import Titulo from "../TituloGaleria";

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const Galeria = (imagen= [])=> {
    return (
    <>
    <GaleriaContainer>
        <SeccionFluida>
            <Titulo>Catálogo de series y películas</Titulo>
            {imagen.map(imagen => {
                return <p key={imagen.id}>{imagen.titulo}</p>
            })}
        </SeccionFluida>
    </GaleriaContainer>
    </>
    )
}

export default Galeria;