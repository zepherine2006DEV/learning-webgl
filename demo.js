function main() {

    const canvas = document.querySelector("#glCanvas");         // find canvas element
    const webGLContext = canvas.getContext("webgl");            // get the webgl context

    if (webGLContext === null) {                                // check if browswer supports webGL
        alert("Unable to initialise WebGL");
        return;
    }

    webGLContext.clearColor(0.0, 0.0, 0.0, 1.0);                // set the colour
    webGLContext.clear(webGLContext.COLOR_BUFFER_BIT);          // redraw the canvas
}

window.onload = main;
