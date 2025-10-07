// Default GLSL Fragment Shader
// Time-based animated gradient with noise

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

// Simple noise function
float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    // Animated coordinates
    vec2 pos = st * 5.0;
    pos.x += u_time * 0.3;
    pos.y += sin(u_time * 0.5) * 0.5;
    
    // Generate noise-based pattern
    float n = noise(pos);
    n += noise(pos * 2.0) * 0.5;
    n += noise(pos * 4.0) * 0.25;
    n /= 1.75;
    
    // Color gradient
    vec3 color1 = vec3(0.102, 0.102, 0.18); // #1A1A2E
    vec3 color2 = vec3(0.914, 0.271, 0.376); // #E94560
    vec3 color = mix(color1, color2, n);
    
    // Add time-based variation
    color += 0.1 * sin(u_time + st.x * 10.0);
    
    gl_FragColor = vec4(color, 1.0);
}
