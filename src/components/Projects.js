import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import project from '../images/project.png';
import projectDark from '../images/project-dark-mode.png';

const ProjectsWrapper = styled.section`
    padding: 60px 20px;
    text-align: center;
    opacity: 0;
    transform: translateX(-20px); 
    transition: opacity 1s ease, transform 1s ease;
    margin-bottom: 200px;
    &.fade-in-visible {
        opacity: 1;
        transform: translateX(0); 
    }
`;

const ProjectContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const ProjectCard = styled.div`
    background: ${(props) => props.theme.cardBackground};
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateX(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const ProjectTitle = styled.h2`
    font-family: "Lato", sans-serif;
    font-family: "Abril Fatface", serif;
    font-size: 1.8rem;
    color: ${(props) => props.theme.cardTitleColor};
    margin-bottom: 10px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ProjectsSection = ({ theme }) => {
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
    const isDarkMode = theme === 'dark';
    return (
        <ProjectsWrapper ref={section} className={isVisible ? 'fade-in-visible' : 'fade-in'}>
            <ProjectContainer>
                <ProjectCard>
                    <ProjectTitle>Projects</ProjectTitle>
                    <div className='project-wrapper'>
                        <div className='mouse-wrapper'>
                            <img 
                                className={isDarkMode ? 'project-dark-mode' : 'project'} 
                                src={isDarkMode ? projectDark : project} 
                                alt='Project Preview' 
                            />
                            <h3 className='project-title'>Mini Mouse Game</h3>
                        </div>
                        <div className={isDarkMode ? 'project-container-dark' : 'project-container'}>
                            <p className={isDarkMode ? 'project-text-dark' : 'project-text'}>More to come...</p>
                        </div>
                        <div className={isDarkMode ? 'project-container-dark' : 'project-container'}>
                            <p className={isDarkMode ? 'project-text-dark' : 'project-text'}>More to come...</p>
                        </div>
                    </div>
                </ProjectCard>
            </ProjectContainer>
        </ProjectsWrapper>
    );
};

export default ProjectsSection;