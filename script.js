
function main() {
    const canvas = document.querySelector('#paintJob');
    const gl = canvas.getContext("webgl");

    // Vertex Shaders

    const vertexShader =
        "void main() {"
        "}";
    
    // Frament Shader

    const fragmentShader = `
        void main() {
            console.log(canvas);
        }
    `;
}
    