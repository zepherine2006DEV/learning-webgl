# Learning WebGL

This project aims to give me a basic understanding of WebGL.

I'm going to use native WebGL, rather than one of the higher level frameworks based on it (e.g. Three.js), so that I can understand the underlying api. I'm going to code my own very simple vertex shader etc., rather than use one provided by a library.

## How to Install

Clone this project from GitHub.
Open the demo.html page in a browser.

## How to Run

Opening the page in the browser above will run the code, and the webGL graphics will appear. If your browser does not support WebGL you will get an alert.

## User Stories

### Story 1: Canvas

So that I know my browser is set up to use WebGL,  
I can see an area on my web page which will hold the graphics,  
Or an error message if it does not support WebGL. 

## Learning Notes

### Key Concepts

* Vertex - The point where two lines meet.
* Vertex Shader - Function which converts original vertex positions into clipspace postions. Runs every time a shape is rendered. Output is saved to a special variable called `gl_Position`.

### Resources Used

[MDN Getting Started with WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)  
[WebGL Fundamentals](https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html)
