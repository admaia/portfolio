import React from "react";
import styled from "styled-components";

const LightBulb = styled.section`
    max-width: 6.25rem;
    max-height: 6.25rem;
    font-size: 2rem;
    cursor: pointer;
    opacity: 1 !important;
    transform: translateY(0) !important;
    @media (max-width: 48rem) { 
        font-size: 1.5rem;
        max-width: 5rem; 
        max-height: 5rem; 
    }
`;

const HeroWrapper = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    margin-bottom: 9.375rem;
`;

const HeroContent = styled.div`
    max-width: 50rem; 
    margin: 0 auto;
    padding: 1.25rem; 
    background: ${(props) => props.theme.cardBackground};
    border-radius: 0.75rem; 
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); 
    position: relative;
    @media (max-width: 48rem) { 
        padding: 1rem; 
    }
`;

const HeroTitle = styled.h1`
    font-family: "Abril Fatface", serif;
    font-size: 2.5rem;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 1.25rem; 
    @media (max-width: 48rem) {
        font-size: 2rem;
    }
    @media (max-width: 30rem) { 
        font-size: 1.5rem;
    }
`;

const HeroSubtitle = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 1.25rem; 
    @media (max-width: 48rem) { 
        font-size: 1rem;
    }
    @media (max-width: 30rem) { 
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
    text-shadow: ${(props) =>
        props.theme.bodyBackground === "#eee2df"
            ? `0.0625rem 0.0625rem 0.125rem #c89f9c`
            : `0.0625rem 0.0625rem 0.125rem black`
    };
    @keyframes slide {
        0% { transform: translateY(0); }
        50% { transform: translateY(-0.625rem); }
        100% { transform: translateY(0); }
    }
    @media (max-width: 48rem) { 
        font-size: 0.9rem;
    }
    @media (max-width: 30rem) { 
        font-size: 0.8rem;
    }
`;

const EmojiCircleWrapper = styled.div`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 12.5rem; 
    height: 12.5rem; 
    border-radius: 50%;
    background-color: ${(props) => props.theme.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); 
    border: 0.3125rem solid #eee2df; 
    z-index: 1;
    &:hover .emoji {
        transform: scale(1.2);
    }
    .emoji {
        font-size: 10rem; 
        transition: transform 0.3s ease;
        position: relative;
        top: 1.625rem; 
        right: 0.1875rem; 
        @media (max-width: 48rem) { 
            font-size: 10rem; 
            top: 1.875rem; 
        }
        @media (max-width: 30rem) { 
            font-size: 10rem;
            top: 1.875rem;
        }
    }
`;

const HeroSection = ({ toggleDarkMode }) => (
    <>
        <LightBulb onClick={toggleDarkMode}>💡</LightBulb>
        <HeroWrapper className="hero-section">
            <HeroContent>
                <HeroTitle>
                    Welcome to my <span className="portfolio">Portfolio</span> ✨
                </HeroTitle>
                <HeroSubtitle>
                    Hi, I'm Adama Aïssa. I aim to create engaging web experiences with a focus on both aesthetics and performance.
                </HeroSubtitle>
                <ScrollPrompt>
                    Scroll to explore <span>↓</span>
                </ScrollPrompt>
            </HeroContent>
            <EmojiCircleWrapper>
                <span className="emoji">🧕🏾</span>
            </EmojiCircleWrapper>
        </HeroWrapper>
    </>
);

export default HeroSection;