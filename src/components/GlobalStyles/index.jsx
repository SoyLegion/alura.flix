import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./fonts/Roboto-Regular.otf"
import RobotoBold from "./fonts/Roboto-Bold.otf";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Roboto-Regular";
    src: local("Roboto Regular"), local("RobotoRegular") url(${RobotoRegular});
}

@font-face {
    font-family: "Roboto-Bold";
    src: local("Roboto Bold"), local("RobotoBold") url(${RobotoBold});
}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "RobotoRegular";
    }
`

export default GlobalStyles;