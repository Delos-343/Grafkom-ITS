
function main() {
    const canvas = document.querySelector('#paintJob');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });

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
    