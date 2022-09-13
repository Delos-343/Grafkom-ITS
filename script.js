
function main() {
    const canvas = document.querySelector('#paintJob');
    const gl = canvas.getContext("webgl");

    var vertices = [
        0.5, 0.5,
        0.0, 0.0,
        -0.5, 0.5
    ];
    
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    

    // Vertex Shaders
    var vertexShaderCode = ` 
        
        attribute vec2 aPosition;
        
        void main() {
            gl_PointSize = 15.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
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

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

    gl.shaderSource(ragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkShader(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");

    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(1.0, 0.75, 0.79, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArray(gl.POINT, 0, 3)
} 
    