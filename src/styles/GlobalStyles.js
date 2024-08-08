import { createGlobalStyle } from "styled-components";
import vector from "../images/vector.png";

const GlobalStyles = createGlobalStyle`
    html, body {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        height: 100%;
        font-size: 16px;
        transition: 1s all;
    }
    body {
        position: relative;
        font-family: "Arial", sans-serif;
        overflow-x: hidden;
        background-color: ${(props) => props.theme.bodyBackground};
    }
    body::before, body::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    body::before {
        background-image: url(${vector});
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.1;
    }
    body::after {
        background-color: rgba(255, 255, 255, 0.05);
    }
    section {
        box-sizing: border-box;
        padding: 1.25rem; 
        opacity: 0;
        transform: translateY(1.25rem);
        transition: opacity 1s ease, transform 1s ease;
    }
    a {
        padding: 0.9375rem; 
        color: #c97c5d;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    a:hover {
        color: #b36a5e;
    }
    hr {
        width: 100%;
        border: 0.0625rem solid #c89f9c; 
        margin: 1.25rem 0; 
    }
    img {
        max-width: 5.625rem; 
        height: auto;
        padding-right: 1.875rem; 
        border-radius: 0.5rem; 
        transition: transform 0.3s ease;
    }
    img:hover {
        transform: scale(1.05);
    }
    .project, .project-dark-mode {
        padding-right: 0;
        max-width: 18.75rem; 
        height: auto;
        border-radius: 0.5rem; 
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); 
    }
    .project-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1.25rem; 
    }
    .project-title {
        font-size: 1rem;
        color: white;
        margin: 0.625rem; 
        text-align: center;
    }
    .project-container, .project-container-dark {
        border-radius: 0.75rem; 
        padding: 1.25rem; 
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
        max-width: 16.875rem; 
        height: 23.75rem; 
        text-align: center;
        flex: 1;
        position: relative;
        bottom: 1.25rem; 
    }
    .project-container {
        background: white;
    }
    .project-container-dark {
        background: #222222;
    }
    .project-text, .project-text-dark {
        font-size: 1rem;
        margin: 0;
    }
    .project-text {
        color: #b36a5e;
    }
    .project-text-dark {
        color: white;
    }
    .fade-in {
        opacity: 0;
        transform: translateX(1.25rem); 
    }
    .fade-in-visible {
        opacity: 1;
        transform: translateX(0);
    }
    .hero-section {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    .portfolio {
        transform: translate(-50%, -50%);
        background-image: linear-gradient(#eee2df, #eee2df);
        background-size: 100% 0.625rem;
        background-repeat: no-repeat;
        background-position: 0 110%;
        transition: background-size 0.7s, background-position 0.5s ease-in-out;
    }
    .portfolio:hover {
        background-size: 100% 100%;
        background-position: 0% 100%;
        transition: background-position 0.7s, background-size 0.5s ease-in-out;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(1.25rem); 
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @media (max-width: 48rem) {
        .project-wrapper {
            flex-direction: column;
            align-items: center;
        }
        .project-container {
            max-width: 100%;
            margin: 0.625rem 0; 
        }
        .project-title {
            font-size: 1.2rem;
        }
    }
    @media (max-width: 30rem) {
        body {
            font-size: 0.75rem; 
        }
        section {
            padding: 0.625rem; 
        }
        .project-container {
            padding: 0.625rem; 
        }
    }
`;

export default GlobalStyles;