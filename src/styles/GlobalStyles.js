import { createGlobalStyle } from 'styled-components';
import vector from '../images/vector.png'

const GlobalStyles = createGlobalStyle`
        html, body {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        height: 100%; 
    }
    body {
        position: relative;
        font-family: 'Arial', sans-serif;
        overflow-x: hidden;
        background-color: ${(props) => props.theme.bodyBackground};
    }

    body::before {
        content: "";
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${vector});
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.1; 
        z-index: -1;
    }
    body::after {
        content: "";
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.05); 
        z-index: -1; 
    }
    section {
        box-sizing: border-box;
        padding: 20px;
    }
    a {
        padding: 15px;
        color: #c97c5d;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    a:hover {
        color: #b36a5e;
    }
    hr {
        width: 100%;
        border: 1px solid #c89f9c;
        margin: 20px 0;
    }
    img {
        max-width: 90px;
        height: auto;
        padding-right: 30px;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }
    img:hover {
        transform: scale(1.05);
    }
    .project {
        padding-right: 0;
        max-width: 300px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .project-dark-mode {
        padding-right: 0;
        max-width: 300px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .project-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .project-title {
        font-size: 1rem;
        color: white;
        margin: 10px;
        text-align: center;
    }
    .project-container {
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 270px;
        height: 380px;
        text-align: center;
        flex: 1;
        position: relative;
        bottom: 20px;
    }
    .project-container-dark {
        background: #222222;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 270px;
        height: 380px;
        text-align: center;
        flex: 1;
        position: relative;
        bottom: 20px;
    }
    .project-text {
        font-size: 1rem;
        color: #b36a5e;
        margin: 0;
    }
    .project-text-dark {
        font-size: 1rem;
        color: white;
        margin: 0;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media (max-width: 768px) {
        .project-wrapper {
        flex-direction: column;
        align-items: center;
    }
    .project-container {
        max-width: 100%;
        margin: 10px 0;
    }
    .project-title {
        font-size: 1.2rem;
    }
    }
    @media (max-width: 480px) {
        body {
            font-size: 12px;
        }
        section {
            padding: 10px;
        }
        .project-container {
            padding: 10px;
        }
    }
`;

export default GlobalStyles;