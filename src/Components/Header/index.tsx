import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Container } from "./style";

interface HeaderProps {
    toggleTheme(): void;
}

export function Header({ toggleTheme }: HeaderProps) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <h1>Hello World</h1>

            <Switch
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                handleDiameter={15}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    );
}
