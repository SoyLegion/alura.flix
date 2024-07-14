import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import catalogo from "./Data/catalogo.json"
import { useState } from "react"

const FondoMain = styled.div`
  background-color: #262626;
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.main`
  display: flex;
  
  width: 100vw;
  max-width: 100%;
  margin: 0;
`

const ContenidoGalería = styled.section`
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
const [imagenesDeGaleria, setImagenesDeGaleria]= useState(imagen)

  return (
    <>
     <FondoMain>
      <GlobalStyles />
      <Cabecera />
      <AppContainer>
        <ContenidoGalería>
          <Banner texto="El mejor servicio de streaming para ver tus series y películas favoritas" backgroundImage={banner}/>
          <Galeria imagen={imagenesDeGaleria}/>
        </ContenidoGalería>
      </AppContainer>
     </FondoMain> 
    </>
  )
}

export default App
