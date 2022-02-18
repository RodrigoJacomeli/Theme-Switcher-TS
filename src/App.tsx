import React from "react";
import usePersistedState from "./hooks/usePersistedState";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { Header } from "./Components/Header";
import { GlobalStyle } from "./Style/GlobalStyle";
import Light from "./Style/Themes/Light";
import Dark from "./Style/Themes/Dark";

function App() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("@theme", Light);

    function toggleTheme() {
        setTheme(theme.title === "light" ? Dark : Light);
    }

    return (
        <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme} />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
