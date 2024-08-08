import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/themes';
import GlobalStyles from './styles/GlobalStyles';
import HeroSection from './components/Hero';
import AboutSection from './components/AboutMe';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    return (
        <ThemeProvider theme = {isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <HeroSection toggleDarkMode = {toggleDarkMode} />
            <AboutSection />
            <ProjectsSection theme = {isDarkMode ? 'dark' : 'light'}/>
            <ContactSection />
        </ThemeProvider>
    );
}

export default App;