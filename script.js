
function main() {
    const canvas = document.querySelector('#paintJob');
    const gl = canvas.getContext("webgl");

    var vertices = "array of 0.5, 0.5, 0.0, 0.0, -0.5, 0.5" ;
    
    var buffer - gl.createBuffer();
    gl.bindBuffer(gl.ARRAy_BUFFER, buffer);
    gl.bufferData(gl.ARRAy_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    

    // Vertex Shaders
    var vertexShaderCode = ` 
        
        attribute vec2 aPosition;
        
        void main() {
            gl_PointSize = 15.0;
            gl_Position = vec4(0.5, 0.5, 1.0, 1.0);
        }
    `;
    
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);

    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    

    // Frament Shader
    var fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);

            /* RGBA Blue => R:0 | G:0 | B:1 | A:1
               Red, Green, Blue, Alpha */
        }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER_)

    var shaderProgram = gl.createProgram();
    
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
}
    