"use client";

import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";

const defaultShader = `// GLSL Fragment Shader
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    vec2 pos = st * 5.0;
    pos.x += u_time * 0.3;
    pos.y += sin(u_time * 0.5) * 0.5;
    
    float n = noise(pos);
    n += noise(pos * 2.0) * 0.5;
    n += noise(pos * 4.0) * 0.25;
    n /= 1.75;
    
    vec3 color1 = vec3(0.102, 0.102, 0.18);
    vec3 color2 = vec3(0.914, 0.271, 0.376);
    vec3 color = mix(color1, color2, n);
    
    color += 0.1 * sin(u_time + st.x * 10.0);
    
    gl_FragColor = vec4(color, 1.0);
}`;

export default function GLSLLab() {
  const [shaderCode, setShaderCode] = useState(defaultShader);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      setError("WebGL not supported");
      return;
    }

    // Vertex shader (standard)
    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) return;
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    // Fragment shader (user-defined)
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) return;
    gl.shaderSource(fragmentShader, shaderCode);
    gl.compileShader(fragmentShader);

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      const err = gl.getShaderInfoLog(fragmentShader);
      setError(err || "Shader compilation error");
      return;
    } else {
      setError(null);
    }

    // Create program
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const err = gl.getProgramInfoLog(program);
      setError(err || "Program linking error");
      return;
    }

    gl.useProgram(program);

    // Set up geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1, -1, 1, -1, -1, 1, 1, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let animationId: number;
    let startTime = Date.now();

    const render = () => {
      if (!isPlaying) return;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, (Date.now() - startTime) * 0.001);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [shaderCode, isPlaying]);

  const presets = [
    {
      name: "Fractal Noise",
      code: `precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (st - 0.5) * 2.0;
    
    float d = length(p);
    float a = atan(p.y, p.x);
    
    float pattern = sin(d * 10.0 - u_time * 2.0) * cos(a * 8.0);
    
    vec3 color = vec3(0.1, 0.1, 0.18) + vec3(0.9, 0.27, 0.37) * pattern;
    
    gl_FragColor = vec4(color, 1.0);
}`,
    },
    {
      name: "Plasma",
      code: `precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    float c1 = sin(st.x * 10.0 + u_time);
    float c2 = sin(st.y * 10.0 + u_time);
    float c3 = sin((st.x + st.y) * 10.0 + u_time);
    float c4 = sin(length(st - 0.5) * 20.0 - u_time * 2.0);
    
    float c = (c1 + c2 + c3 + c4) / 4.0;
    
    vec3 color = vec3(0.5) + 0.5 * cos(u_time + c * 3.14159 + vec3(0.0, 0.5, 1.0));
    
    gl_FragColor = vec4(color, 1.0);
}`,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-180px)]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">GLSL Editor</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 bg-[#E94560] text-white rounded hover:bg-[#ff5577] transition-colors text-sm"
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
            <button
              onClick={() => setShaderCode(defaultShader)}
              className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-colors text-sm"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mb-2 flex gap-2 flex-wrap">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => setShaderCode(preset.code)}
              className="px-3 py-1 bg-white/5 text-white/70 rounded hover:bg-white/10 hover:text-white transition-colors text-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>

        <div className="flex-1 border border-white/20 rounded overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="glsl"
            value={shaderCode}
            onChange={(value) => value && setShaderCode(value)}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-300 text-sm"
          >
            <strong>Error:</strong> {error}
          </motion.div>
        )}
      </div>

      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-white mb-4">Preview</h2>
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="w-full h-full bg-black rounded border border-white/20"
        />
      </div>
    </div>
  );
}
