import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import emailLogo from '../images/emailLogo.png';
import linkedinLogo from '../images/linkedinLogo.png';

const ContactWrapper = styled.section`
    padding: 60px 20px;
    text-align: center;
    opacity: 0;
    transform: translateX(20px); 
    transition: opacity 1s ease, transform 1s ease;
    &.fade-in-visible {
        opacity: 1;
        transform: translateX(0);
    }
`;

const ContactContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background: ${(props) => props.theme.contactContentBackground};
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const ContactTitle = styled.h2`
    font-family: "Abril Fatface", serif;
    font-size: 2rem;
    color: ${(props) => props.theme.contactTitleColor};
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ContactLinks = styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    margin: 10px 0;
    a {
        color: inherit;
        text-decoration: underline;
        img {
            max-width: 50px;
            height: auto;
            @media (max-width: 768px) {
                max-width: 40px;
            }
        }
    }
`;

const ContactSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <ContactWrapper ref={sectionRef} className={isVisible ? 'fade-in-visible' : 'fade-in'}>
            <ContactContent>
                <ContactTitle>Contact Me</ContactTitle>
                <ContactLinks>
                    <a href="mailto:adamaaissamaigadesign@gmail.com">
                        <img src={emailLogo} alt='Email Logo' />
                    </a>
                    <a href="https://www.linkedin.com/in/adama-a%C3%AFssa-ma%C3%AFga-b726312aa/">
                        <img src={linkedinLogo} alt='LinkedIn Logo' />
                    </a>
                </ContactLinks>
            </ContactContent>
        </ContactWrapper>
    );
};

export default ContactSection;