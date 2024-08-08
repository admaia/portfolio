import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import htmlLogo from '../images/htmlLogo.png';
import cssLogo from '../images/cssLogo.png';
import javaLogo from '../images/javaLogo.png';
import jsLogo from '../images/jsLogo.png';
import reactLogo from '../images/reactLogo.png';

const AboutWrapper = styled.section`
    padding: 60px 20px;
    text-align: center;
    opacity: 0;
    transform: translateX(20px); 
    transition: opacity 1s ease, transform 1s ease;
    margin-bottom: 200px;
    &.fade-in-visible {
        opacity: 1;
        transform: translateX(0);
    }
`;

const AboutContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background: ${(props) => props.theme.cardBackground};
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const AboutTitle = styled.h2`
    font-family: "Abril Fatface", serif;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const AboutText = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const SkillTitle = styled.h2`
    font-family: "Abril Fatface", serif;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const SkillText = styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
    img {
        width: 50px;
        margin: 0 10px;
        @media (max-width: 768px) {
            width: 40px;
        }
    }
`;

const AboutSection = () => {
    const section = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([para]) => {
            setIsVisible(para.isIntersecting);
        }, {
            threshold: 0.1
        });
        if (section.current) {
            observer.observe(section.current);
        }
        return () => {
            if (section.current) {
                observer.unobserve(section.current);
            }
        };
    }, []);
    return (
        <AboutWrapper ref={section} className={isVisible ? 'fade-in-visible' : 'fade-in'}>
            <AboutContent>
                <AboutTitle>About Me</AboutTitle>
                <AboutText>
                    I’m passionate about web development and design, focusing on creating websites that are both functional and visually appealing. As a naturally cheerful individual, I strive to infuse vibrant colors and joyful elements into my creations, aiming to brighten the digital world with a touch of fun and creativity. ✨ Outside of studying, I enjoy baking, writing, watching anime, and listening to K-pop!
                </AboutText>
                <SkillTitle>Coding Skills</SkillTitle>
                <SkillText>
                    <img src={htmlLogo} alt='HTML Logo'/>
                    <img src={cssLogo} alt='CSS Logo'/>
                    <img src={jsLogo} alt='JavaScript Logo'/>
                    <img src={javaLogo} alt='Java Logo'/>
                    <img src={reactLogo} alt='React Logo'/>
                </SkillText>
            </AboutContent>
        </AboutWrapper>
    );
};

export default AboutSection;