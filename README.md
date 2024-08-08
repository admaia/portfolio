# Portfolio Website

## Overview

This portfolio website showcases my work and skills. I initially planned a more complex design but had to simplify it due to time constraints. The final design is functional and adapts to both light and dark themes.

## Initial Plan

I wanted a quirky design with animations and interactive elements. This included:

- Cool animations and transitions
- Interactive features
- A customized layout

## Changes Made

As I worked on the project, I realized I wouldn't have enough time to finish the complex design. I decided to start again from scratch and simplify the design while still ensuring the portfolio looked good and worked well.

## Final Design

Here’s what I focused on for the final design:

- **Responsive Layout**: The website adjusts to different screen sizes, including phones and tablets.
- **Theme Switching**: I added a feature to switch between light and dark themes.
- **Background**: I used a vector image as a repeating background with some opacity to make the design more interesting.
- **Various animations**: I added various animations to make the website more engaging and fun as it is a very simple layout.

## Technical Details

### Themed Components

I used `styled-components` to handle different themes. The colors and styles change based on whether you are in light or dark mode.

### Responsive Design

I used CSS media queries to make sure the website looks good on all devices. This includes adjusting font sizes and layout for smaller screens.

### Background Image

The background image is set to repeat and has a slight opacity. This helps the image be visible without being too overpowering.

### Theme Switching

I used React's `useState` hook to manage the theme switching functionality. This allows users to toggle between light and dark themes.

## Code Highlights

### Sections Fade-In Animation

To enhance the visual appeal, I implemented a fade-in animation for sections as they become visible on the screen : 

- **Global & personalized styles**: I applied a general fade-in effect to all sections. I then gave each section a custom fade-in style.

```css
section {
    box-sizing: border-box;
    padding: 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
}

.fade-in {
    opacity: 0;
    transform: translateY(20px); 
}

.fade-in-visible {
    opacity: 1;
    transform: translateY(0);
}

const AboutWrapper = styled.section`
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

const ProjectsWrapper = styled.section`
    padding: 60px 20px;
    text-align: center;
    opacity: 0;
    transform: translateX(-20px); 
    transition: opacity 1s ease, transform 1s ease;
    &.fade-in-visible {
        opacity: 1;
        transform: translateX(0); 
    }
`;

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
```

### Hero Section Customization

To ensure the hero section is not affected by the fade-in animation, I added a specific class hero-section to override the fade-in for this section.

```javascript
.hero-section {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
```

### Scroll Prompt with Shadow

I added a shadow to the "Scroll to explore" text to make it more visible. The shadow color changes based on the theme:

```javascript
text-shadow: ${(props) =>
    props.theme.bodyBackground === '#eee2df' ? `1px 1px 2px #c89f9c` : `1px 1px 2px black` 
};
```