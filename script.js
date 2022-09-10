
function main() {
    const canvas = document.querySelector('#paintJob');
    const gl = canvas.getContext("webgl");

    // Vertex Shaders
    const vertexShaderCode =
    "void main() {"
    "}";
    
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    

    // Frament Shader
    const fragmentShaderCode = `
        void main() {
            console.log(canvas);
        }
    `;
}
    