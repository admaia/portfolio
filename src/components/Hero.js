import React from 'react';
import styled from 'styled-components';

const LightBulb = styled.section`
    max-width: 100px;
    max-height: 100px;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        max-width: 80px;
        max-height: 80px;
    }
`;

const HeroWrapper = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
`;

const HeroContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: ${(props) => props.theme.cardBackground};
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    @media (max-width: 768px) {
        padding: 15px;
    }
`;

const HeroTitle = styled.h1`
    font-family: "Abril Fatface", serif;
    font-size: 2.5rem;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const HeroSubtitle = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const ScrollPrompt = styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    position: absolute;
    top: 150%;
    left: 42%;
    animation: slide 5s infinite linear;
    @keyframes slide {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

const EmojiCircleWrapper = styled.div`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 5px solid ${(props) => props.theme.textColor};
    z-index: 1;
    &:hover .emoji {
        transform: scale(1.2);
    }
    .emoji {
        font-size: 10em;
        transition: transform 0.3s ease;
        position: relative;
        top: 12%;
        right: 3px;
        @media (max-width: 768px) {
            font-size: 10em;
            position: relative;
            top: 30px;
        }
        @media (max-width: 480px) {
            font-size: 14em;
            position: relative;
            top: 30px;
        }
    }
`;

const HeroSection = ({ toggleDarkMode }) => (
    <>
        <LightBulb onClick={toggleDarkMode}>💡</LightBulb>
        <HeroWrapper>
            <HeroContent>
                <HeroTitle>Welcome to My Portfolio ✨</HeroTitle>
                <HeroSubtitle>
                    Hi, I'm Adama Aïssa. I aim to create engaging web experiences with a focus on both aesthetics and performance.
                </HeroSubtitle>
                <ScrollPrompt>Scroll to explore <span>↓</span></ScrollPrompt>
            </HeroContent>
            <EmojiCircleWrapper>
                <span className="emoji">🧕🏾</span>
            </EmojiCircleWrapper>
        </HeroWrapper>
    </>
);

export default HeroSection;