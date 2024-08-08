import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import emailLogo from '../images/emailLogo.png';
import linkedinLogo from '../images/linkedinLogo.png';

const ContactWrapper = styled.section`
    padding: 3.75rem 1.25rem;
    text-align: center;
    opacity: 0;
    transform: translateX(1.25rem);
    transition: opacity 1s ease, transform 1s ease;
    &.fade-in-visible {
        opacity: 1;
        transform: translateX(0);
    }
`;

const ContactContent = styled.div`
    max-width: 50rem;
    margin: 0 auto;
    background: ${(props) => props.theme.contactContentBackground};
    border-radius: 0.75rem;
    padding: 1.875rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    @media (max-width: 48rem) {
        padding: 1.25rem;
    }
`;

const ContactTitle = styled.h2`
    font-family: "Abril Fatface", serif;
    font-size: 2rem;
    color: ${(props) => props.theme.contactTitleColor};
    margin-bottom: 1.25rem;
    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`;

const ContactLinks = styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    margin: 0.625rem 0;
    a {
        color: inherit;
        text-decoration: underline;
        img {
            max-width: 3.125rem;
            height: auto;
            @media (max-width: 48rem) {
                max-width: 2.5rem;
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
                        <img src={emailLogo} alt="Email Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/adama-a%C3%AFssa-ma%C3%AFga-b726312aa/">
                        <img src={linkedinLogo} alt="LinkedIn Logo" />
                    </a>
                </ContactLinks>
            </ContactContent>
        </ContactWrapper>
    );
};

export default ContactSection;