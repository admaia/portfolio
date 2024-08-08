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
- **Theme Switching**: Added a feature to switch between light and dark themes.
- **Background**: Used a vector image as a repeating background with some opacity to make the design more interesting.

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

### Scroll Prompt with Shadow

I added a shadow to the "Scroll to explore" text to make it more visible. The shadow color changes based on the theme:

```javascript
text-shadow: ${(props) =>
    props.theme.bodyBackground === '#eee2df' ? `1px 1px 2px #c89f9c` : `1px 1px 2px black` 
};
